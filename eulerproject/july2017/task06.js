// let minus;
// let n = 100;
// let arr = [...Array(n).keys()].map(x => ++x);
// function sum(arr) {
//     return arr.reduce((acc, a) => acc + a, 0);
// }
//
// function sqr(n) {
//     return n * n;
// }
//
// minus = sqr(sum(arr)) - sum(arr.map(sqr));
// console.log(minus);
let minus;
let n = 100;

let sum = 0;
let sumOfScurares = 0;
let squaresOfSum;
for (let i = 1; i <= n; i++) {
    sum += i;
    sumOfScurares += i * i;
}
squaresOfSum = sum * sum;
minus = squaresOfSum - sumOfScurares;
console.log(minus);
