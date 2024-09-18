const prueba = [1, 2, , 4, 5, 6, , 8];

console.log(prueba.flat());

const prueba1 = new Array(6);

console.log(prueba1);

prueba1.push(1);

console.log(prueba1);

console.log(prueba1.flat());

if (prueba1 !== prueba) {
  console.log('Hola weon');
}

console.log(caputen(3, 4));

function parametrosRest(a, b, ...masParametros) {
  console.log(a + b + masParametros);
}

parametrosRest(1, 2, 3, 4, 5, 6, 7);
console.log(1 + 2 + 3 + 4 + 5 + 6 + 7);
