function countSqueras(number) {
    if (number === 1) {
        return 1;
    }
    else return (number - 1) * 4 + countSqueras(number - 1);
}

console.log(countSqueras(1));
console.log(countSqueras(2));
console.log(countSqueras(3));
console.log(countSqueras(4));
console.log(countSqueras(5));
console.log(countSqueras(6));
console.log(countSqueras(7));
