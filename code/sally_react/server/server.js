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
  //그럼, 
  const qna = await QnA.create(newSurvey);
<<<<<<< HEAD

=======
>>>>>>> a1d5929277aad44b6ab46ecd1805330014258006
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
<<<<<<< HEAD


});

// 3. 행렬곱 테이블 surprise 코드 돌아가게 하기

=======
  res.send(qna);
});

// 3. ��İ� ���̺� surprise �ڵ� ���ư��� �ϱ�
>>>>>>> a1d5929277aad44b6ab46ecd1805330014258006

// 4. surprise �ڵ� ��� ����Ʈ�� �����ֱ�

// path ,����, mircroservice architecture
app.listen(3001, () => {
  console.log("Server is listening...");
});
