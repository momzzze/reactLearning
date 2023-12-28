let apples: number = 5
let seed: string = 'fast'
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//build in obj

let now: Date = new Date();


let color: string[] = ['red', 'blue', 'green'];
let myNumbers: number[] = [1, 2, 3, 4, 5]

class Car {

}
let car: Car = new Car();


//object literal

let point: { x: number, y: number } = {
    x: 10,
    y: 20
}

//function

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);

}

// поясненията се добавят при 3 случая:



// когато функцията връща тип any:

const json = '{"x":10,"y":20}';

const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

coordinates.saddasadadsads


// когато декларираме променлива на един ред и я инициализираме по-късно:

let words = ['red', 'green', 'blue'];

let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// когато променливата не може да бъде изведена правилно:
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}


