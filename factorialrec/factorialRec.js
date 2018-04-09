function fuctorialRec(number) {
    return (number <= 1) ? 1 : fuctorialRec(number - 1) * number;
}

console.log(fuctorialRec(1));
console.log(fuctorialRec(2));
console.log(fuctorialRec(3));
console.log(fuctorialRec(4));
console.log(fuctorialRec(5));
