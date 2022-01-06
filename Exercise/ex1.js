function count(arr, callback) {
  return arr.reduce((obj, item)=> {
    let result = callback(item);
    obj[result] ? (obj[result] = obj[result] + 1) : (obj[result] = 1);
    return obj;  
  }, Object.create(null))
}

console.log(count([1,2,3,4,5], function(num){
  if(num % 2 === 0) return 'even';
  else return 'odd';
}))