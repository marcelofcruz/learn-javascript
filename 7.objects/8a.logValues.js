const logValues = course => {
    const keys = Object.keys(course);
    keys.map(key => console.log(course[key]));
};

logValues({id: 1, name: "Learn JavaScript", year: 2021}); // should log (separately): 1, "Learn JavaScript" and 2021