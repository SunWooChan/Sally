const express = require("express");
var cmd = require("node-cmd");


const result = require('child-process').spawn('python',['../../res_vege/res_vege3.py'])
result.stdout.on('data', function(data) {

  console.log(data.toString());

});



출처: https://curryyou.tistory.com/225 [카레유]


cmd.run(
  ////////////// python shell script ///////////////
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
