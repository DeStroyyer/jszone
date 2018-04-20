function count() {
    return [...Array(999).keys()]
        .map(x => ++x)
        .filter((item) => {return item % 3 == 0 || item % 5 == 0})
        .reduce((sum, current) => {return sum + current;}, 0)
}

console.log(count());
