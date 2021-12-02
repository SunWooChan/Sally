const express = require("express");
var cmd = require("node-cmd");
const fs = require('fs');

const spawn = require("child_process").spawn;
const pythonProcess = spawn('python',["../to/script.py", arg1, arg2, ]);


cmd.run(
  /////////////// python shell script ///////////////
  "/Users/seon-uchan/opt/anaconda3/bin/python /Users/seon-uchan/Desktop/FullStack/kchTest/sally_prac2/res_vege/res_vege3.py",
  ///////////////////////////////////////////////////
  function (error, success, stderr) {
    if (error) {
      console.log("ERROR :\n\n", error);
    } else {
      console.log("SUCCESS :\n\n", success);
    }
  }
);

fs.readFile('./matrix_result.json', 'utf8', (error, jsonFile) => {
  if (error) return console.log(error);
  console.log(jsonFile);

  const jsonData = JSON.parse(jsonFile);
  console.log(jsonFile);

  const todos = jsonData.todos;
  todos.forEach(todo => {
      console.log(todo);
  });
});
fs