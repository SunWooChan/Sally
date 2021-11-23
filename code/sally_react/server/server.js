const express = require("express");
<<<<<<< HEAD

const app = express(); // express ï¿½ï¿½Ã¼

const db = require("./db/models/index");
const { QnA } = db;

// ï¿½Ìµï¿½ï¿½ï¿½ï¿½ : ï¿½ï¿½ï¿½ï¿½ï¿½Î¿ï¿½ ï¿½ï¿½ï¿½ reqï¿½ï¿½ Ã³ï¿½ï¿½ï¿½Ñ´ï¿½.
app.use(express.json()); // jsonï¿½Þ½ï¿½ï¿½ï¿½ ï¿½ï¿½ï¿½ï¿½ï¿½Î¿ï¿½ reqï¿½ï¿½ bodyï¿½ï¿½ json ï¿½ï¿½ï¿½ï¿½ï¿½Í°ï¿½ ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ ï¿½ï¿½ï¿½ reqï¿½ï¿½ body ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Æ¼ï¿½ï¿½ ï¿½ï¿½ï¿½ï¿½
=======
const cors = require("cors");

const app = express(); // express °´Ã¼

const db = require("./models/index");
const { QnA } = db;

// ¹Ìµé¿þ¾î : ¼­¹ö·Î¿Â ¸ðµç req¸¦ Ã³¸®ÇÑ´Ù.
app.use(express.json()); // json¸Þ½îµå´Â ¼­¹ö·Î¿Â reqÀÇ body¿¡ json µ¥ÀÌÅÍ°¡ Á¸ÀçÇÒ °æ¿ì reqÀÇ body ÇÁ·ÎÆÛÆ¼·Î ¼³Á¤
>>>>>>> d318299b7b6f7de55ec2fb1e56565d6890c1c90d
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

<<<<<<< HEAD
app.post("/survey", async (req, res) => {
  const newSurvey = req.body;
  const qna = await QnA.create(newSurvey);
  res.send(newSurvey);
=======
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
>>>>>>> d318299b7b6f7de55ec2fb1e56565d6890c1c90d
});

app.listen(3001, () => {
  console.log("Server is listening...");
});
