function count() {
    return [...Array(1000).keys()].filter(function (item) {
        return item % 3 == 0 || item % 5 == 0
    }).reduce(function (sum, current) {
        return sum + current;
    }, 0)
}

console.log(count());
