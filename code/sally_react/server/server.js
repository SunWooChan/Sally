const express = require("express");
const cors = require("cors");

const app = express(); // express ��ü

const db = require("./models/index");
const { QnA } = db;

// �̵���� : �����ο� ��� req�� ó���Ѵ�.
app.use(express.json()); // json�޽��� �����ο� req�� body�� json �����Ͱ� ������ ��� req�� body ������Ƽ�� ����
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(cors());
//const corsOptions={
//	origin:'http://54.180.38.13:3001',
//	credentials:true,
//};
//app.use(cors(corsOptions));

// app.post("/survey", async (req, res) => {
//   const newSurvey = req.body;
//   const newSurvey1 = JSON.stringify(newSurvey);
//   const newSurvey2 = JSON.parse(newSurvey1);
//   res.send(newSurvey2);
//   const qna = await QnA.create(newSurvey2);
// });

// app.post("/survey", async (req, res) => {
//   const newSurvey = req.body.data;
//   newSurvey = JSON.stringify(newSurvey.data);
//   const qna = await QnA.create(newSurvey);
//   res.send(newSurvey);
// });

app.post("/survey", async (req, res) => {
  const newSurvey = req.body;
  const qna = await QnA.create(newSurvey);
  res.send(qna);
});

app.listen(3001, () => {
  console.log("Server is listening...");
});
