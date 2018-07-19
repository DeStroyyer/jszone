//https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb
let max = 0;
for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
        let n = i * j;
        if (n.toString() === n.toString().split("").reverse().join("") && n > max) {
            max = n;
        }
    }
}
console.log(max);