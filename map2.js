let course = [ 
  'JS',
  'PHP',
  'Python'
]

Array.prototype.map2 = function (callback) {
  let n = this.length;
  let output = [];
  for(let i = 0 ; i < n ; i++ ){
    output.push(callback(this[i], i));
  }

  return output;
}

let myJS = course.map2((value, index) => {
   return value + ' CodeGym';
});


console.log(myJS);
