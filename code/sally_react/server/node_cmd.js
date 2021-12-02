const express = require("express");
var cmd = require("node-cmd");

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
