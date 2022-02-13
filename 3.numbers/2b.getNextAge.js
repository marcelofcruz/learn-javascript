function getNextAge(age) {
    if (isNaN(age)) {
        return 0;
    } else {
        return age + 1;
    }
}
console.log(getNextAge(25));