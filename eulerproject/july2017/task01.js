/**
 * Created by tvoloshenko on 7/17/18.
 */
// let iter = 3
// let sum = 0;
// let total = 1000;
// while (iter < total) {
//     if (iter % 3 == 0 || iter % 5 == 0) {
//         sum += iter;
//     }
//     iter++;
// }
// console.log(sum);

function res(total, a, b) {
    return [...Array(total).keys()]
        .map(x => ++x)
        .filter((x) => {return x % a == 0 || x % b == 0})
        .reduce((sum, iter) => {return sum + iter}, 0)
}
console.log(res(999, 3, 5));