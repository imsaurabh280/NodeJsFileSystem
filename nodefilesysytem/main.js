let helpObj=require("./command/help");
let organiseObj = require("./command/organise");
let treeObj = require("./command/tree")
let inputArr = process.argv.slice(2);

let command = inputArr[0];
// console.log(command);
switch (command){
case"organise":
    organiseObj.organiseFcn(inputArr[1]);
    break;
case"help":
    helpObj.helpfcn();
    break;
case "tree":
    treeObj.treefcn(inputArr[1]);
default:
    console.log("🙏 kindly enter the corrrect cmd");
    break;    
}
