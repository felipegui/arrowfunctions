/*
    Arrow Functions, também conhecida com função anônima, é uma forma reduzida de se criar funções
*/

//Forma normal de criar uma function
/*
function teste( A, B) {
    return A + B;
}
console.log(teste(10, 10));
*/

//Usando uma arrow function
/*
let teste = (A, B) => {
    return A + B;
};
console.log(teste(30, 30));
*/

//Usando arrow function mais reduzida ainda
let teste = (A, B) => A + B;

console.log(teste(40, 40));