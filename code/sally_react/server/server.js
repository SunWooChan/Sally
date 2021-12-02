const express = require("express");
const cors = require("cors");
var cmd = require("node-cmd");

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

app.use(cors());

app.post("/survey", async (req, res) => {
  const newSurvey = req.body;
  const qna = await QnA.create(newSurvey);
  
  cmd.run(
    /////////////// python shell script ///////////////
    "/Users/seon-uchan/opt/anaconda3/bin/python /Users/seon-uchan/Desktop/FullStack/kchTest/sally_prac2/res_vege/res_vege3.py",
    ///////////////////////////////////////////////////
    function (error, success, stderr) {
      if (error) {
        console.log("ERROR �߻� :\n\n", error);
      } else {
        console.log("SUCCESS :\n\n", success);
      }
    }
  );

});

// 3. 행렬곱 테이블 surprise 코드 돌아가게 하기
app.post("/survey", async (req, res) => {
  cmd.run(
    /////////////// python shell script ///////////////
    "/Users/seon-uchan/opt/anaconda3/bin/python /Users/seon-uchan/Desktop/FullStack/kchTest/sally_prac2/res_vege/res_vege3.py",
    ///////////////////////////////////////////////////
    function (error, success, stderr) {
      if (error) {
        console.log("ERROR �߻� :\n\n", error);
      } else {
        console.log("SUCCESS :\n\n", success);
      }
    }
  ); 이거 python 돌면, 그 결과를 json 파일로 저장 요거 가져오는거 
  
  여기에 가져와야 함!
  
});

// 4. surprise 코드 결과 프론트로 보내주기

// path ,버전, mircroservice architecture
app.listen(3001, () => {
  console.log("Server is listening…");
});