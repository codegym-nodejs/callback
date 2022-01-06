const compute = (n1, n2, callback) => callback(n1,n2);

const sum = (n1, n2) => n1 + n2;

const sub = (n1, n2) => n1 - n2;

console.log(compute(1,2, sum));
console.log(compute(3,2, sub));
