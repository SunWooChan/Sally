const express = require("express");
const cors = require("cors");

const app = express(); // express °´Ã¼
var cmd = require("node-cmd");
const db = require("./models/index");
const { QnA } = db;

// ¹Ìµé¿þ¾î : ¼­¹ö·Î¿Â ¸ðµç req¸¦ Ã³¸®ÇÑ´Ù.
app.use(express.json()); // json¸Þ½îµå´Â ¼­¹ö·Î¿Â reqÀÇ body¿¡ json µ¥ÀÌÅÍ°¡ Á¸ÀçÇÒ °æ¿ì reqÀÇ body ÇÁ·ÎÆÛÆ¼·Î ¼³Á¤
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(cors());

app.post("/survey", async (req, res) => {
  const newSurvey = req.body;
  //ê·¸ëŸ¼, 
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
        console.log("ERROR ¹ß»ý :\n\n", error);
      } else {
        console.log("SUCCESS :\n\n", success);
      }
    }
  );
<<<<<<< HEAD


});

// 3. í–‰ë ¬ê³± í…Œì´ë¸” surprise ì½”ë“œ ëŒì•„ê°€ê²Œ í•˜ê¸°

=======
  res.send(qna);
});

// 3. Çà·Ä°ö Å×ÀÌºí surprise ÄÚµå µ¹¾Æ°¡°Ô ÇÏ±â
>>>>>>> a1d5929277aad44b6ab46ecd1805330014258006

// 4. surprise ÄÚµå °á°ú ÇÁ·ÐÆ®·Î º¸³»ÁÖ±â

// path ,¹öÀü, mircroservice architecture
app.listen(3001, () => {
  console.log("Server is listening...");
});
