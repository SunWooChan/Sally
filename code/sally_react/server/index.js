// // Back Main File 
const express = require('express')

// //DB 관련 Import
const mysql = require('mysql')

// //암호화 관련
const bcrypt = require("bcrypt");
const saltRounds = 10;

// // session 관련 Import
const cors = require('cors')
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const session = require("express-session");

const app = express();
app.use(express.json());

// session 관련1
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser()); //쿠키 정보 파싱해줌.
// 쿠키는 클라이언트에 저장되는 키값. 사용자가 따로 요청안해도  Request 시에 자동으로 서버에 전송됨.
app.use(bodyParser.urlencoded({ extended : true })) // 모름

// key로 session에 저장하는 것 빼고는 모름
// session 이란, 쿠키가 가진 Key 값으로, server에 저장된 데이터이다. 클라이언트에 고유의 id 부여함.
app.use(
  session({
    key:"loginData",
    secret : "testSecret",
    resave : false,
    saveUninitialized : false,
    cookie : {
      // cookie 정보를 얼마동안 저장할지에 대한 내용인듯.(정확 X)
      expires : 60 * 60 * 24,
    },
  })
);

// 세션을 관리하려는 파일에서 작성해야 할 것 : axios.defaults.withCredentials = true

// db 연결. 이 후, db.js 파일로 옮길 예정
const conn = {  // mysql 접속 설정
  host: 'localhost',
  port: '3309',
  user: 'user',
  password: '',
  database: 'monolithic'
};
// const db = mysql.createConnection(conn)
//   // {
//   //   user: "root",
//   //   host: "localhost",
//   //   password: "",
//   //   database: "LoginSystem",
//   // });



const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "LoginSystem",
});

// 회원가입 관련 내용. routes/users.js 파일로 옮길 예정
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO users (username, password) VALUES (?,?)",
      [username, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});


// session 확인 
// session에서 로그인 정보가 있는지 확인. true 면, user < 에 session에 있는 user 정보 전달해서 로그인 상태로 있도록 함 
app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user }); 
  } else {
    res.send({ loggedIn: false });
  }
});

/* login 관련 내용. 이후, users.js로 이동 */
/* login을 시도. post로 오면, req의 내용으로 로그인 한다. */
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            // 결과가 true이면, 해당 유저의 정보를 session에 저장한다. 
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        // 아예 ID 가 존재하지 않을 시.
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

const port = 3001
app.listen(port, () =>
 console.log(`Node.js Server is running on port ${port}...`));


