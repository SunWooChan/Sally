const express = require("express");

const app = express(); // express 객체

const db = require("./models/index");
const { QnA } = db;

// 미들웨어 : 서버로온 모든 req를 처리한다.
app.use(express.json()); // json메쏘드는 서버로온 req의 body에 json 데이터가 존재할 경우 req의 body 프로퍼티로 설정
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.post("/survey", async (req, res) => {
  const newSurvey = req.body;
  const qna = await QnA.create(newSurvey);
  res.send(newSurvey);
});

app.listen(3001, () => {
  console.log("Server is listening...");
});
