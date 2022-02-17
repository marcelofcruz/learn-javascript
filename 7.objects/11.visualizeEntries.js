const visualizeEntries = course => {
    return Object.entries(course);
};

console.log(visualizeEntries({id: 1, name: "Learn JavaScript", year: 2021}));
console.log(visualizeEntries({name: "Learn JavaScript", category: "Programming"}));
console.log(visualizeEntries({}));