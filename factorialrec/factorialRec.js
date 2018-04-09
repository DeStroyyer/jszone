function fuctorialRec(number) {
    if (number<=1) return 1;
    else return fuctorialRec(number-1)*number;
}

console.log(fuctorialRec(1));
console.log(fuctorialRec(2));
console.log(fuctorialRec(3));
console.log(fuctorialRec(4));
console.log(fuctorialRec(5));
