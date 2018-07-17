let myString = "ababcdab";
let map = new Map();
for (let i = 0; i < myString.length; i++) {
    if (map.has(myString[i])) {
        map.set(myString[i], map.get(myString[i]) + 1)
    }
    else map.set(myString[i], 0)
}
console.log(map);

map.forEach((value, key) => {
    if (value == 0) {
        console.log(key);
    }
});