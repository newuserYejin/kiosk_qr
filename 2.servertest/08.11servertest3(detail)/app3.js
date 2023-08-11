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

  app.get('/menu/:menuId', (req, res) => {
    const menuId = req.params.menuId;
    console.log(menuId);

    // 메뉴 정보 가져오기
    const getMenuQuery = 'SELECT menu_name, price, menu_explan FROM tb_menu WHERE menu_num = ?';
    connection.query(getMenuQuery, [menuId], (err, menuResults) => {
      if (err) {
          console.error('Error fetching menu data:', err);
          return;
      }

        // 알레르기 정보 가져오기
        const getAllegyQuery = 'SELECT allegy_name FROM tb_allegy INNER JOIN tb_menu_allegy ON tb_allegy.allegy_num = tb_menu_allegy.allegy_num WHERE tb_menu_allegy.menu_num = ?';
        connection.query(getAllegyQuery, [menuId], (err, allegyResults) => {
            if (err) {
                console.error('Error fetching allegy data:', err);
                return;
            }

            const allegyNames = [...new Set(allegyResults.map(result => result.allegy_name))];

            // 옵션 정보 가져오기
            const getOptionQuery = 'SELECT op_name FROM tb_op  INNER JOIN tb_menu_op ON tb_op.op_num = tb_menu_op.op_num WHERE tb_menu_op.menu_num = ?';
            connection.query(getOptionQuery, [menuId], (err, optionResults) => {
                if (err) {
                    console.error('Error fetching option data:', err);
                    return;
                }

                const optionNames = optionResults.map(result => result.op_name);
                console.log('Menu data:', menuResults[0]);
                // 메뉴 정보, 알레르기 정보, 옵션 정보를 템플릿에 전달하여 렌더링
                res.render('detail_menu', {
                  menuData: menuResults[0],
                  allegy_names: allegyNames,
                  op_names: optionNames
              });
            });
        });
    });
});
// 서버 시작
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


// 라우트 설정
/*app.get('/detail_menu', (req, res) => {
    getMenuData((menuData) => {
        res.render('detail_menu', { menuData }); // menuData 변수를 템플릿으로 넘겨줌
    });
});*/

  // 주문 정보 처리 라우트
/*app.post('/submit-order', (req, res) => {
    const selectedMenuNum = req.body.menu;
    const quantity = req.body.quantity;
  
    // 여기서 주문 정보를 처리하고 데이터베이스에 저장하는 로직을 구현합니다.
  
    res.send(`주문이 완료되었습니다: 메뉴 번호 - ${selectedMenuNum}, 수량 - ${quantity}`);
  });*/