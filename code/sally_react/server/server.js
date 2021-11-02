const express = require('express');
const app = express();

const user_inform = require('./routes/user_inform');
 
// app.use('/user_inform', user_inform);
app.get('/login',(req,res)=>{
  res.send(user_inform)
})

app.get('/login/:id',(req,res)=>{
  const {id} = req.params;
  const member = member.find((m) => m.id ===Number(id))
  if (member) {
    res.send(member)
  } else {
    res.status(404) 
  }
  

  res.send(user_inform)
})
const port = 3001;
app.listen(port, () =>
 console.log(`Node.js Server is running on port ${port}...`));
