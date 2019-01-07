/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */
function negativeFilter(input) {
    if (input.constructor.name != "Array") {
        return;
    } else {
        let output = [];

        function isPositive(num) {
            if (num >= 0) {
                return true;
            }
            else {
                return false;
            }
        }

        for (let i = 0; i < input.length; i++) {
            if (isPositive(input[i])) {
                output.push(input[i]);
            }
        }
        return output;
    }
}

module.exports = negativeFilter;
