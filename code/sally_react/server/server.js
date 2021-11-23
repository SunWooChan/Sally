const express = require("express");

const app = express(); // express ��ü

const db = require("./db/models/index");
const { QnA } = db;

// �̵���� : �����ο� ��� req�� ó���Ѵ�.
app.use(express.json()); // json�޽��� �����ο� req�� body�� json �����Ͱ� ������ ��� req�� body ������Ƽ�� ����
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
