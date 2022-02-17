const getUpperCasedValues = course => {
    const values = Object.values(course);
    return values.map(value => value.toUpperCase());
};

// Sample usage - do not modify
console.log(getUpperCasedValues({name: "Learn JavaScript"})); // ["LEARN JAVASCRIPT"]