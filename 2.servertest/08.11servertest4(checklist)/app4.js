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

  app.get('/checklist', (req, res) => {
    getOrderData((orderData) => {
        // 서버에서 가져온 주문 데이터를 처리하고 렌더링
        const promises = orderData.map(order => {
            return new Promise((resolve, reject) => {
                getMenuName(order.menu_num, (menuName) => {
                    order.menu_name = menuName;
                    resolve(order);
                });
            });
        });

        Promise.all(promises).then(ordersWithMenuNames => {
            res.render('checklist', { orderData: ordersWithMenuNames });
        });
    });
});

// tb_order 테이블에서 주문 데이터 조회
const getOrderData = (callback) => {
    const sql = 'SELECT * FROM tb_order';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching order data:', err);
            callback([]);
            return;
        }
        callback(results);
    });
};

// tb_menu 테이블에서 menu_name 조회
const getMenuName = (menuNum, callback) => {
    const sql = 'SELECT menu_name FROM tb_menu WHERE menu_num = ?';
    connection.query(sql, [menuNum], (err, result) => {
        if (err) {
            console.error('Error fetching menu name:', err);
            callback('');
            return;
        }
        if (result.length > 0) {
            callback(result[0].menu_name);
        } else {
            callback('');
        }
    });
};
// 서버 시작
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');