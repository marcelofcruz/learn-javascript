function sumOddNumbers(numbers) {
    let total = 0;
    numbers.forEach(number => {
        if (number % 2 != 0) {
            total += number;
        }
    });
    return total;
}
