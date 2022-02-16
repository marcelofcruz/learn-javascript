const sumNumbers = numbers => {
    let result = numbers.reduce((total, current) => {
        return total + current;
    }, 0);

    return result;
};

console.log(sumNumbers([10, 20, 30])); // 60