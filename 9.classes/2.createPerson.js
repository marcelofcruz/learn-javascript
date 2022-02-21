class Person {
    constructor(fName, lName){
        this.fName = fName;
        this.lName = lName;
    }
}

const createPerson = (fName, lName) => {
    return new Person(fName, lName);
};

console.log(createPerson("Sam", "Doe"));