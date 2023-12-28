const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};
// type alias
type Dring = [string, boolean, number];



const cola: [string, boolean, number] = ['brown', true, 40];
const pepsi: Dring = ['brown', true, 40];



const carSpecs: [number, number] = [400, 3354]  //hard to see for what are those number represent thats why we rarely use tuples

const carStats = {
    horsepower: 400,
    weight: 3353
}