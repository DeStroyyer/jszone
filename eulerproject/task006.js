let arr = [...Array(100).keys()].map(x => ++x);

function squares(x) {
    return x * x;
}

function sum(arr) {
    return arr.reduce((sum, current) => sum + current, 0)
}

let result = squares(sum(arr)) - sum(arr.map(squares));

console.log(result);