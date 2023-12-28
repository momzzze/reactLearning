

// const oldCivic = {
//     name: 'civic',
//     year: 2000,
//     broken: true
// };


// const printVehicle = (vehicle: { name: string; year: number; broken: boolean; }): void => {
//     console.log(`Name: ${vehicle.name}`);
//     console.log(`Year: ${vehicle.year}`);
//     console.log(`Broken: ${vehicle.broken}`);
// }

// printVehicle(oldCivic);


// interface Vehicle {
//     name: string;
//     year: number;
//     broken: boolean;
// }


// const oldCivic = {
//     name: 'civic',
//     year: 2000,
//     broken: true
// };

// const printVehicle = (vehicle: Vehicle): void => {
//     console.log(`Name: ${vehicle.name}`);
//     console.log(`Year: ${vehicle.year}`);
//     console.log(`Broken: ${vehicle.broken}`);
// }

// printVehicle(oldCivic);


interface Reportable {
    summary(): string
}


const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const drinkOne = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
}

const printSummary = (vehicle: Reportable): void => {
    console.log(vehicle.summary());
}

printSummary(oldCivic);
printSummary(drinkOne);


