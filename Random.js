const Chance = require('chance');

const chance = new Chance();

// genera datos aleatorios utilizando Chance
const randomName = chance.name();
const randomAge = chance.age();
const randomEmail = chance.email();

// imprime los datos aleatorios en la consola
console.log('Nombre aleatorios:', randomName);
console.log('Edad aleatoria', randomAge);
console.log('Email aleatorio', randomEmail);
