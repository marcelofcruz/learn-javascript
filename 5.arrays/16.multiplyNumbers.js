const multiplyNumbers = numbers => {
    let product = numbers.reduce((total, current) => {
        return total * current;
    });

    return product;
};