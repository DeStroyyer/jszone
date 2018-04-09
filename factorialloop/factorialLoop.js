function factorialLoop(number, temp = 1) {
    for (let i = number; i > 1; i--) {
        temp = temp * i;
    }
    return temp;
}

console.log(factorialLoop(1));
console.log(factorialLoop(2));
console.log(factorialLoop(3));
console.log(factorialLoop(4));
console.log(factorialLoop(5));