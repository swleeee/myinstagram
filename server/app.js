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

app.post('/signup', (req, res) => {
  console.log('111111');
  console.log(req.body);
  //   const user_id = req.body.inText;
  //   console.log(user_id);
  //////query문 추가할 곳/////
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}!`);
});
