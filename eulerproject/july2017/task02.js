// function fib(n) {
//     if (n == 2) return 2;
//     else return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
// }
// console.log(fib(4));
let total = 4000000;
let a = 1;
let b = 2;
let temp;
let sum = 0;
while (b < total) {
    if (b % 2 == 0) {
        sum += b;
    }
    temp = b;
    b = a + b;
    a = temp;
}
console.log();