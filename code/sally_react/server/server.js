const express = require("express");
const cors = require("cors");

const app = express(); // express ��ü
var cmd = require("node-cmd");
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

app.post("/survey", async (req, res) => {
  const newSurvey = req.body;
  const qna = await QnA.create(newSurvey);
  var resData = "";

  cmd.run(
    /////////////// python shell script ///////////////
    "/Users/seon-uchan/opt/anaconda3/bin/python /Users/seon-uchan/Desktop/FullStack/Sally/code/res_vege/res_vege3.py",
    ///////////////////////////////////////////////////
    function (error, success, stderr) {
      if (error) {
        console.log("ERROR �߻� :\n\n", error);
      } else {
        res.send(resData)
      }
    }
  );
  // res.send(resData);
});

app.listen(3001, () => {
  console.log("Server is listening...");
});
