const shouldCancelExam = grades => {
    return grades.every(grade => grade >= 18);
};