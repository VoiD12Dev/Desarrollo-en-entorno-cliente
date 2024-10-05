/**
 * Crea un programa que, dado un número, imprima en pantalla una representación de ese número
en un display LCD utilizando los caracteres — y |.
lcd(3):
 —
  |
 —
  |
 —
lcd(45)
       —
 | | |
  —   —
   |   |
      —
 */

const conversionNumber = date => {
  const numberConverted = [];

  for (let number of date) {
    switch (number) {
      case '0':
        numberConverted.push([[' ===='], ['|   |'], ['|   |'], ['|   |'], [' ====']]);
        break;
      case '1':
        numberConverted.push([['   ||'], ['  | |'], ['    |'], ['    |'], ['    |']]);
        break;
      case '2':
        numberConverted.push([[' ===='], ['    |'], [' ===='], ['|    '], [' ====']]);
        break;
      case '3':
        numberConverted.push([[' ===='], ['    |'], [' ===='], ['    |'], [' ====']]);
        break;
      case '4':
        numberConverted.push([['|   |'], ['|   |'], [' ===='], ['    |'], ['    |']]);
        break;
      case '5':
        numberConverted.push([[' ===='], ['|    '], [' ===='], ['    |'], [' ====']]);
        break;
      case '6':
        numberConverted.push([[' ===='], ['|    '], [' ===='], ['|   |'], [' ====']]);
        break;
      case '7':
        numberConverted.push([[' ===='], ['    |'], ['    |'], ['    |'], ['    |']]);
        break;
      case '8':
        numberConverted.push([[' ===='], ['|   |'], [' ===='], ['|   |'], [' ====']]);
        break;
      case '9':
        numberConverted.push([[' ===='], ['|   |'], [' ===='], ['    |'], [' ====']]);
        break;
    }
  }
  return numberConverted;
};

function lcd(num) {
  const numStr = num.toString().split('');
  const converted = conversionNumber(numStr);
  let agrupadoNumeros = [];
  let mostrarLcd = [];

  for (let i = 0; i <= 4; i++) {
    for (let j = 0; j < numStr.length; j++) {
      agrupadoNumeros.push(converted[j][i].join(''));
    }
  }

  for (let i = 0; i < agrupadoNumeros.length; i += numStr.length) {
    mostrarLcd.push(agrupadoNumeros.slice(i, i + numStr.length));
  }

  return mostrarLcd;
}

lcd(2342432).forEach(linea => {
  console.log(linea.join('  '));
});
