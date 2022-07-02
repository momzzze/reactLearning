'use strict';

// argument object= no longer bound with arrow function
var add = function add(a, b) {
    return a + b;
};
console.log(add(55, 1, 1001));
// this keyword no longer bound with arrow func

var user = {
    name: 'Andrew',
    cities: ['Phily', 'New York', 'Dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
        return cityMessages;
        // console.log(this.name);
        // console.log(this.cities);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};
console.log(user.printPlacesLived());
//Chalenge

var multiplier = {
    //numbers-array
    numbersArr: [1, 5, 6],
    //multiplyBy-number
    multiplyBy: 2,
    //multiply return arr with numbers were the number have been multiplied
    multiply: function multiply() {
        var _this2 = this;

        return this.numbersArr.map(function (number) {
            return _this2.multiplyBy * number;
        });
    }
};

console.log(multiplier.multiply());
