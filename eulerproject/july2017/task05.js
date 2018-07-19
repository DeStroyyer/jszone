function nod(a, b) {
    while (a != 0 && b !== 0) {
        if (a > b) {
            a = a % b;
        }
        else {
            b = b % a;
        }

    }
    return a + b;
}
let spn = 1;
for (let i = 1; i <= 20; i++) {
    spn = spn / nod(spn, i) * i;
}
console.log(spn);