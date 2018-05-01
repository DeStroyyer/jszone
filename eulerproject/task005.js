let num = 1;
function divider(a, b) {
    while (a != 0 && b != 0) {
        if (a > b) {
            a = a % b;
        }
        else {
            b = b % a;
        }
    }
    return a + b;
}

for (let i = 2; i <= 20; i++) {
    num = num / divider(num, i) * i;
}
console.log(num);