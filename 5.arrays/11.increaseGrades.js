const shouldAdjustGrades = grades => {
    return grades.some(grade => grade < 10);
};

console.log(shouldAdjustGrades([10, 12, 10, 14])); // false
console.log(shouldAdjustGrades([12, 8, 17])); // true