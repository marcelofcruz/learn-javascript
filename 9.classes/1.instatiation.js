class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
}

const makeSquare = (width, height) => {
    return new Rectangle(width, height);
};

console.log(makeSquare(10, 10));