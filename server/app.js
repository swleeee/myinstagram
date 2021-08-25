// const express = require('express');
// const app = express();
// const port = 3003; // <- 3000에서 다른 숫자로 변경
// // const cors = require("cors")
// // const cors = require('cors');
// // const bodyParser = require("body-parser");
// // const bodyParser = require('body-parser');

// // const mysql = require('mysql'); // << 새로 추가된 부분

// // var connection = mysql.createConnection({
// //   /// 새로 추가된 부분
// //   host: 'localhost',
// //   user: 'root', // mysql에 아이디를 넣는다.
// //   password: 'root', // mysql의 비밀번호를 넣는다.
// //   database: 'hello', //위에서 만든 데이터베이스의 이름을 넣는다.
// // });

// // connection.connect();

// app.use(express.urlencoded({ extended: false }));
// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(cors());
// // app.use(bodyParser.json());
// app.use(express.json);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.post('/signup', (req, res) => {
//   console.log(req);
//   //   const user_id = req.body.inText;
//   //   console.log(user_id);
//   //////query문 추가할 곳/////
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

const express = require('express');
const app = express();
const PORT = 3003;
const cors = require('cors');
const mysql = require('mysql'); // << 새로 추가된 부분

const db = mysql.createConnection({
  /// 새로 추가된 부분
  host: 'localhost',
  user: 'lee', // mysql에 아이디를 넣는다.
  password: '1234', // mysql의 비밀번호를 넣는다.
  database: 'myinstagram', //위에서 만든 데이터베이스의 이름을 넣는다.
});

db.connect();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

function setUserInfo(userInfo, userName, userId, password, date, callback) {
  db.query(
    'insert into user (userInfo, userName, userId, password, createdDt) values(?, ?, ?, ?, ?)',
    [userInfo, userName, userId, password, date]
  ),
    function (err, result) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result[0].hexcode);
      }
    };
}

app.post('/signup', (req, res) => {
  // console.log('111111');
  // console.log(req);
  console.log(req.body);
  const userInfo = req.body.userInfo;
  const userName = req.body.userName;
  const userId = req.body.userId;
  const password = req.body.password;
  const date = new Date();
  // console.log('222222');
  let temp = 0;

  // setUserInfo(userInfo, userName, userId, password, date, function (err, data) {
  //   console.log('ccccccccccccccccc');
  //   if (err) {
  //     // error handling code goes here
  //     console.log('ERROR : ', err);
  //   } else {
  //     // code to execute on data retrieval
  //     console.log('result from db is : ', data);
  //   }
  // });

  db.query(
    'insert into user (userInfo, userName, userId, password, createdDt) values(?, ?, ?, ?, ?)',
    [userInfo, userName, userId, password, date],

    function (err, results, fields) {
      console.log(results);
      // var rows = JSON.parse(JSON.stringify(results[0]));

      // here you can access rows
      // console.log(rows);
      // console.log('=============================');

      // if (err) {
      //   console.error('One or more errors occurred!');
      //   console.error(err);
      //   return;
      // }
      // processResults(rows, fields);

      // console.log(results);
      // console.log(err);
      // console.log('aaa');
      if (err) {
        console.log('DB저장 실패');
        res.json({ data: 'fail' });
        temp = 1;
      } else {
        console.log('DB저장 성공');
        res.json({ data: 'success' });
        temp = 2;
      }
      db.end();
    }
  );
  //   const user_id = req.body.inText;
  //   console.log(user_id);
  res.json({ data: 'ee' });
  console.log(temp);
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}!`);
});
