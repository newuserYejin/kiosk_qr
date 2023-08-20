const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const session = require('express-session');
const port = 3001;

app.use(express.static(__dirname + '/', {
  setHeaders: (res, path, stat) => {
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));
app.use(cors());
app.use(express.json());

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'Kiosk',
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('Connected to the database');
});

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

// 카테고리별 메뉴 범위 계산 함수
const calculateMenuRange = (category) => {
    let start, end;
    if (category === '1') { // 커피
      start = 100;
      end = 199;
    } else if (category === '2') { // 음료수
      start = 200;
      end = 299;
    } else if (category === '3') { // 티
      start = 300;
      end = 399;
    } else if (category === '4') { // 플랫치노
      start = 400;
      end = 499;
    } else if (category === '5') { // 쉐이크 & 에이드
      start = 500;
      end = 599;
    } else if (category === '6') { // 디저트
      start = 600;
      end = 699;
    } else {
      start = 0;
      end = 0;
    }
    return { start, end };
  };

// 데이터베이스에서 해당 범위의 메뉴 정보 조회
const getMenuDataByRange = (category, callback) => {
    const menuRange = calculateMenuRange(category);
    const sql = `SELECT menu_name, price, menu_explan, picture AS image_path 
      FROM tb_menu 
      inner join img on tb_menu.menu_num = img.img_num
      WHERE menu_num BETWEEN ? AND ?`;
    connection.query(sql, [menuRange.start, menuRange.end], (err, results) => {
      if (err) {
        console.error('Error fetching menu data:', err);
        callback([]);
        return;
      }
      callback(results);
    });
};

app.get('/menu', (req, res) => {
    const category = req.query.category; // URL 파라미터 읽기
    //const menuRange = calculateMenuRange(category); // 카테고리별 메뉴 범위 계산
    getMenuDataByRange(category, (menuData) => {
      res.json(menuData);
    });
  });

// 메뉴 상세 정보 조회 엔드포인트
app.get('/menu/:menuId', (req, res) => {
  const menuId = req.params.menuId;
  console.log(menuId);

  const getMenuQuery = `
    SELECT menu_name, price, menu_explan
    FROM tb_menu
    WHERE menu_num = ?`;

  const getImagePathQuery = `
    SELECT picture
    FROM img
    WHERE img_num = ?`;

  const getAllegyQuery = `
    SELECT allegy_name
    FROM tb_allegy
    INNER JOIN tb_menu_allegy ON tb_allegy.allegy_num = tb_menu_allegy.allegy_num
    WHERE tb_menu_allegy.menu_num = ?`;

  const getOptionQuery = `
    SELECT op_name, op_price
    FROM tb_op
    INNER JOIN tb_menu_op ON tb_op.op_num = tb_menu_op.op_num
    WHERE tb_menu_op.menu_num = ?`;

  connection.query(getMenuQuery, [menuId], (err, menuResults) => {
    if (err) {
      console.error('메뉴 데이터 조회 오류:', err);
      return;
    }

    connection.query(getImagePathQuery, [menuId], (err, imageResults) => {
      if (err) {
        console.error('이미지 데이터 조회 오류:', err);
        return;
      }

      const imagePath = imageResults[0] ? imageResults[0].picture : null;
      if (!imagePath) {
        console.error('이미지 경로를 찾을 수 없습니다.');
        return;
      }

      connection.query(getAllegyQuery, [menuId], (err, allegyResults) => {
        if (err) {
          console.error('알레르기 데이터 조회 오류:', err);
          return;
        }

        const allegyNames = [...new Set(allegyResults.map(result => result.allegy_name))];

        connection.query(getOptionQuery, [menuId], (err, optionResults) => {
          if (err) {
            console.error('옵션 데이터 조회 오류:', err);
            return;
          }

          const optionData = optionResults.map(result => ({
            op_name: result.op_name,
            op_price: result.op_price
          }));

          console.log('메뉴 데이터:', menuResults[0]);

          const menuData = {
            menuData: menuResults[0],
            allegy_names: allegyNames,
            image_path: imagePath,
            op_data: optionData
          };

          res.json(menuData);
        });
      });
    });
  });
});

// 클라이언트에 주문 데이터 제공하는 API 엔드포인트
app.get('/getOrderData', (req, res) => {
    // getOrderData 함수를 이용하여 데이터를 가져와서 클라이언트로 전송
    getOrderData((orderData) => {
        res.json(orderData);
    });
});

// getOrderData 함수 내에서 사용할 데이터 가져오는 코드 추가
const getOrderData = (callback) => {
    const sql1 = `
    SELECT tb_order.*, tb_menu.menu_name, tb_menu.price
    FROM tb_order
    JOIN tb_menu ON tb_order.menu_num = tb_menu.menu_num
    `;

    const sql2 = `
    SELECT img.picture, tb_order.count, tb_menu.price
    FROM img
    INNER JOIN tb_order ON img.img_num = tb_order.menu_num
    INNER JOIN tb_menu ON tb_order.menu_num = tb_menu.Menu_Num
    `;

    connection.query(sql1, (err, results1) => {
        if (err) {
            console.error('Error fetching order data:', err);
            callback([]);
            return;
        }

        connection.query(sql2, (err, results2) => {
            if (err) {
                console.error('Error fetching image data:', err);
                callback([]);
                return;
            }

            // 데이터 조합 및 가공
            const combinedResults = results1.map((order, index) => ({
                ...order,
                imagePath: results2[index].picture,
            }));

            // 메뉴 가격과 주문 수량을 곱하여 주문 가격을 계산하고 total_price 필드 추가
            const processedResults = combinedResults.map((order) => {
                const total_price = order.price * order.count;
                return {
                    ...order,
                    total_price,
                };
            });

            callback(processedResults);
        });
    });
};

app.get('/detail_menu.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(__dirname + '/detail_menu.js');
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/search', (req, res) => {
  const keyword = req.query.keyword;

  const sql = `select * from img inner join tb_menu
  on img.img_num = tb_menu.Menu_Num
  where tb_menu.Menu_Name LIKE '%${keyword}%'`;

  connection.query(sql, (err, results) => {
      if (err) {
          console.error('Error executing the query:', err);
          res.status(500).json({ error: 'Internal server error' });
      } else {
          res.json(results);
      }

      //res.setHeader('Content-Type', 'application/javascript');
      res.sendFile(__dirname + '/search.js');
  });
});

