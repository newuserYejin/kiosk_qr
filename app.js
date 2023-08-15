const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const session = require('express-session');

app.use(express.static(__dirname + '/public'));
app.use(cors());

// MySQL 연결 설정
const connection = mysql.createConnection({
    host: 'localhost',// 데이터베이스 호스트
    user: 'root', // 데이터베이스 사용자 이름
    password: '1234', // 데이터베이스 비밀번호
    database: 'Kiosk',// 데이터베이스 이름
});
// 데이터베이스 연결
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
  const getMenuDataByCategory = (category, callback) => {
    const menuRange = calculateMenuRange(category);
    const sql = 'SELECT menu_name, price FROM tb_menu WHERE menu_num BETWEEN ? AND ?';
    connection.query(sql, [menuRange.start, menuRange.end], (err, results) => {
        if (err) {
            console.error('Error fetching menu data:', err);
            callback([]);
            return;
        }
        callback(results);
    });
};
// getbasicMenuData 함수 정의
const getbasicMenuData = (callback) => {
  const allCategories = ['1', '2', '3', '4', '5', '6'];
  const menuData = [];

  allCategories.forEach(category => {
      getMenuDataByCategory(category, (categoryMenuData) => {
          menuData.push(...categoryMenuData);
          
          // 모든 카테고리 데이터를 모았을 때 callback 호출
          if (menuData.length === allCategories.length * 100) {
              callback(menuData);
          }
      });
  });
};

app.get('/menu', (req, res) => {
  const category = req.query.category; // URL 파라미터 읽기
  getMenuDataByCategory(category, (menuData) => {
    res.json(menuData); // 메뉴 데이터를 JSON 형식으로 응답
  });
});
  
// 서버 시작
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

/*app.get('/getbasicMenuData', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  getbasicMenuData((menuData) => {
    res.json(menuData);
  });
}); 없어도 될껄?*/
