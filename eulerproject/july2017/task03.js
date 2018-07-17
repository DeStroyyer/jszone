let max = 0;
let data = 600851475143;
function isPrime(n) {
    for (let i = n - 1; i > 1; i--) {
        if (n % i == 0) {
            return false;
        }
        else continue;
    }
    return true;
}

for (let i = 1; i <= data; i++) {
    if (isPrime(i) && data % i == 0 && max < +i) {
        max = i;
        data /= i;
    }
}
console.log(max);