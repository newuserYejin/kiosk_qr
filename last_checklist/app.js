const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const session = require('express-session');
const port = 3001;

app.use(express.static(__dirname + '/'));
app.use(cors());

// MySQL 연결 설정
const connection = mysql.createConnection({
    host: 'localhost', // 데이터베이스 호스트
    user: 'root', // 데이터베이스 사용자 이름
    password: '1234', // 데이터베이스 비밀번호
    database: 'Kiosk', // 데이터베이스 이름
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


// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});