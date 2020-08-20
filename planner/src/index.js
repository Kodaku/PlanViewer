const express = require("express");
const fs = require("fs");

const fileEvent = require("../modules/fileEvent");
const readPlan = require("../modules/readPlan");

const app = express();

readPlan();

fileEvent.eventBus.on("read",() => { fs.readFile("./plan.json", "utf-8", (err, data) => {
  if(err){
    console.log("The file plan.json doesn't exist");
  }
  else{
    launchApp(data);
  }
}
)
}
);

function launchApp(data){
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  app.get("/data", (req, res, next) => {
    res.send(data);
  });
  
  app.listen(8000, () => console.log('Server listening on port 8000!'));
}