function fib(number) {
    return (number <= 1) ? 1 : fib(number - 1) + fib(number - 2);
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
