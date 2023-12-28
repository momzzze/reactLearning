// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     sayName: function () {
//         return this.firstName + ' ' + this.lastName;
//     }
// }
// class User {
//     private firstName: string;
//     private lastName: string;

//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     // constructor(private firstName: string, private lastName: string) { }

//     public sayName(): string {
//         return this.firstName + ' ' + this.lastName;
//     }
// }
// let newUser = new User('John', 'Doe');
// // newUser.firstName='John';
// // newUser.lastName='Doe';
// console.log(newUser.sayName());

// const userOne = {
//     firstName: 'John',
//     lastName: 'Doe',
//     username: 'johndoe',
//     email: 'johnDoe@gmail.com'
// }

// const userTwo = {
//     firstName: 'Real',
//     lastName: 'Deal',
//     username: 'realdeal',
//     email: 'mainProblm@gmail.com'
// }

// const displayUser = (user: any) => {
//     console.log(user.firstName);
//     console.log(user.lastName);
//     console.log(user.username);
//     console.log(user.email);
//     console.log('-------------------');

// }

// displayUser(userOne);
// displayUser(userTwo);

// displayUser({ firstName: 'Davit', lastName: 'Tennant', username: 'dave', email: 'swag@gmail.com' });

class User {
    public username: string;
    public email: string;
    public firstName: string;
    public lastName: string;

    constructor(username: string, email: string, firstName: string, lastName: string) {
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

const userOne = new User('John', 'Doe', 'johndoe', 'johndoe@gmail.com');

const userTwo = new User('Real', 'Deal', 'realdeal', 'realdeal@gmail.com');

const displayUser = (user: User) => {
    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.username);
    console.log(user.email);
    console.log('-------------------');

}

displayUser(userOne);
displayUser(userTwo);

displayUser({ firstName: 'Davit', lastName: 'Tennant', username: 'dave', email: 'swag@gmail.com' });