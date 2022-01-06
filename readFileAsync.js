const fs = require('fs');

const callbackReadFile = function(err, data) {
  if(err) console.error(err);
  console.log(data.toString());
}

fs.readFile('./file.txt', callbackReadFile);

console.log("Kết thúc chương trình");