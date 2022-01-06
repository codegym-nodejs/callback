const fs = require('fs');

const dir = './Code';

/*
Callback hell problem

function printFilesInfo(path){
  fs.readdir(path, (err, files) => {
    if(err) console.error(err);
    
    files.forEach((filename) => {
      let filePath = `${path}/${filename}`;
      
      fs.lstat(filePath, (err, stat) => {
        if(err) console.error(err);
        // sort birthtime
        let fileByCreatedData = [];
        stat.sort();
        return fileByCreatedData
      })
    
    })

  })
}
*/

function printFileInfo(filePath) {
  fs.lstat(filePath, (err, stat) => {
    if(err) console.error(err);
    console.log(stat);
  })
}

function loopOverFile(files, basePath) {
  files.forEach(fileName => {
    let filePath = `${basePath}/${fileName}`;
    printFileInfo(filePath);
  });
}

function listFiles(path) {
  fs.readdir(path , (err, files) => {
    if(err) console.error(err);

    loopOverFile(files, path);
  })
}

listFiles(dir);