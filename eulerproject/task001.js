function count() {
    return [...Array(999).keys()]
        .map(x => ++x)
        .filter((x) => {return x % 3 == 0 || x % 5 == 0})
        .reduce((sum, current) => {return sum + current;}, 0)
}

console.log(count());
