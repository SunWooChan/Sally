const express = require("express");
var cmd = require("node-cmd");


cmd.run(
  ////////////// python shell script ///////////////
	"/home/ubuntu/miniconda3/bin/python /home/ubuntu/Sally/code/res_vege/res_vege3.py"
  ///////////////////////////////////////////////////
  function (error, success, stderr) {
    if (error) {
      console.log("ERROR :\n\n", error);
    } else {
      console.log("SUCCESS :\n\n", success);
    }
  }
);
