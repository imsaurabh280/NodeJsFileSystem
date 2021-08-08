const { dir } = require("console");
let fs = require("fs");
let path = require("path");

function treefn(directoryPath){
    // console.log("tree command executed with " +src);
    if(directoryPath == undefined){
        treeHelper(process.cwd(), "");
        return;
    }
    else{
        let doesExist = fs.existsSync(directoryPath);
        if(doesExist){
            treeHelper(directoryPath, "");
        }
        else{
            console.log("Kindly enter the correct path");
            return;
        }
    }
}

function treeHelper(directoryPath, indent){
    // is file or not
    let isFile = fs.lstatSync(directoryPath).isFile();
    if(isFile == true){
        let fileName = path.basename(directoryPath);
        console.log(indent + "├──" + fileName);
    }
    else{
        let dirName = path.basename(directoryPath);
        console.log(indent + "└──" + dirName);
        let childrens = fs.readdirSync(directoryPath);
        for(let i = 0; i < childrens.length; i++){
            let childPath = path.join(directoryPath, childrens[i]);
            treeHelper(childPath, indent + "\t");
        }
    }
}

module.exports={
    treefcn: treefn,
}