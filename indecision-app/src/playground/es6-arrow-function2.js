// argument object= no longer bound with arrow function
const add = (a, b) => {
    return a + b;
}
console.log(add(55, 1, 1001));
// this keyword no longer bound with arrow func

const user = {
    name: 'Andrew',
    cities: ['Phily', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        return cityMessages
        // console.log(this.name);
        // console.log(this.cities);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
}
console.log(user.printPlacesLived());
//Chalenge

const multiplier = {
    //numbers-array
    numbersArr: [1, 5, 6],
    //multiplyBy-number
    multiplyBy: 2,
    //multiply return arr with numbers were the number have been multiplied
    multiply() {
        return this.numbersArr.map((number) => this.multiplyBy * number)
    }
}


console.log(multiplier.multiply());
