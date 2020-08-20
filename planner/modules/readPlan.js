const fs = require("fs");
const os = require("os");

const fileEvent = require("./fileEvent");

const key = "CompletePlan";
const jsonFileName = "./plan.json";
const textFileName = "../plan.txt";

module.exports = () => {

fs.readFile(textFileName, "utf-8", (err, data) => {
    if(err){
        console.log("The file plan.txt doesn't exist, make sure you've launched a planner at least one time");
        console.log("An empty file will be created");
        let father = createFather();
        writeJSON(jsonFileName, JSON.stringify(father));
    }
    else{
        writeOnFile(data);
    }
});
}

function writeOnFile(data){
    let arr = data.split(os.EOL);
    let newArr = [];

    for(let i = 0; i < arr.length - 1; i++){
        const splitted = arr[i].split(":");
        newArr.push(splitted);
    }
    let father = createFather();
    for(let i = 0; i < newArr.length; i++){
        const obj = {
            "id": newArr[i][0],
            "action": newArr[i][1]
        }
        father[key].push(obj);
    }

    const jsonString = JSON.stringify(father);
    writeJSON(jsonFileName, jsonString);
}

function createFather(){
    let father = {};
    father[key] = [];
    return father;
}

function writeJSON(fileName, jsonString){
    fs.writeFile(fileName, jsonString, "utf-8", (err) => {
        if(err){
            console.log("Problem while writing the file: the path is incorrect or the string does not exist");
        }
        else{
            console.log("File written successfully");
            fileEvent.eventBus.sendEvent("read");
        }
    });
}

