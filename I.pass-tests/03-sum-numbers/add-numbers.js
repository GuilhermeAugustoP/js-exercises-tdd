function addNumbers(numbers) {
    const init = 0;
    const sum = numbers.reduce((sum, num) => sum + num , init)
        return sum;
}

module.exports = addNumbers;
