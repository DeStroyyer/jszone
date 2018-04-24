function count() {

    function fib(arr) {
        return arr[arr.length - 1] + arr[arr.length - 2];
    }

    function generator(array = [1, 2]) {
        while (array[array.length - 1] < 4e+6) {array.push(fib(array));}
            return array;
    }

    return generator()
        .filter((x) => {return x % 2 == 0})
        .reduce((sum, current) => {return sum + current;}, 0)
};

console.log(count());