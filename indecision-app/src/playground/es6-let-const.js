var nameVar = 'Nikola';
var nameVar = 'Mike';

console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie'
console.log('nameLet', nameLet);


const nameConst = 'Frankie';
console.log('nameConst', nameConst);


function getPetName() {
    let petname = 'Halo'
    return petname;
}

getPetName();

// block scoping
var fullName = 'Andrew Mead';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);