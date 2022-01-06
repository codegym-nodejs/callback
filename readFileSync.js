const fs = require('fs');

const fileData = fs.readFileSync('./file.txt');

console.log(fileData.toLocaleString());

console.log("Kết thúc chương trình");