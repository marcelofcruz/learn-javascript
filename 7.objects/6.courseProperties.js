const getCountProperties = course => {
    let keys = Object.keys(course);
    return keys.length;
};


console.log(getCountProperties({id: 1, name: "Learn JavaScript", year: 2021, category: "Programming"})); // 4
console.log(getCountProperties({name: "Learn JavaScript", category: "Programming"})); // 2
console.log(getCountProperties({})); // 0