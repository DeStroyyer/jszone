let sortedArray = ("abbdadertieteeeeebi").split("").sort();
let counter = 0;
for (let i = 1; i < sortedArray.length; i++) {
    if (sortedArray[counter] === sortedArray[i]) {
        continue;
    }
    else if ((i - counter) == 1) {
        console.log(sortedArray[counter]);
        break;
    }
    else counter = i;
}