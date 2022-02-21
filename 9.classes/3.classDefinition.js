class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

const user = (firstName, lastName, age) => {
    return new User(firstName, lastName, age);
};

console.log(user('Marcelo', 'Cruz', 24));