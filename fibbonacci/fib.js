function fib(number) {
    try {
        if (number > 21) {
            throw new Error("Number is greater then 21")
        }
        else {
            let array = [];
            let first = 1;
            let second = 2;
            if (number >= 1) {
                array.push(first);
            }
            if (number >= 2) {
                array.push(second);
            }
            let temp;
            for (let i = 3; i <= number; i++) {
                temp = second;
                second = temp + first;
                first = temp;
                array.push(second);
            }
            return array;
        }
    }
    catch (err) {
        console.log("error: " + err.message);
    }
}


console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(22));
