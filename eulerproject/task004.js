let temp;
let max = 0;
function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}

function reverseString2(str) {
    return String(str).split("").reverse().join("");
}

for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
        temp = i * j;
        if ((reverseString2(String(temp))) == temp) {
            if (temp >= max) {
                max = temp;
            }
        }
    }
}
console.log(max);