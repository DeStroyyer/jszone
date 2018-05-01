let max = 0;
let data = 600851475143;
function isPrime(num) {
    for (let i = num - 1; i > 1; i--) {
        if (num % i == 0) {
            return false
        }
        else continue;
    }
    return true;
}

for (let i = 1; i <= Math.sqrt(data); i++) {
    if (data % i == 0 && isPrime(i)) {
        if (i >= max) {
            max = i;
        }
    }
}
console.log(max);