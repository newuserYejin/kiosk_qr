const express = require('express');
const mysql = require('mysql');
const app = express();

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

  app.get('/menu', (req, res) => {
    const category = req.query.category; // URL 파라미터 읽기
    const menuRange = calculateMenuRange(category); // 카테고리별 메뉴 범위 계산
    getMenuDataByRange(menuRange, (menuData) => {
      res.render('basicOrder', { menuData });
    });
  });
  
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
  const getMenuDataByRange = (menuRange, callback) => {
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
// 서버 시작
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


// 라우트 설정
app.get('/basicOrder', (req, res) => {
    getMenuData((menuData) => {
        res.render('basicOrder', { menuData }); // menuData 변수를 템플릿으로 넘겨줌
    });
});

  // 주문 정보 처리 라우트
app.post('/submit-order', (req, res) => {
    const selectedMenuNum = req.body.menu;
    const quantity = req.body.quantity;
  
    // 여기서 주문 정보를 처리하고 데이터베이스에 저장하는 로직을 구현합니다.
  
    res.send(`주문이 완료되었습니다: 메뉴 번호 - ${selectedMenuNum}, 수량 - ${quantity}`);
  });