/*
2.DIAMANTE
Crea una función diamante que cree un diamante con todas las letras hasta la letra pasada como
parámetro. Es suficiente con que funcione con letras mayúsculas. No hace falta que hagas
validaciones sobre parámetros.
Por ejemplo:
diamante('C')
--A--
-B-B
C---C
-B-B-
--A--
*/

function letrasEnArray(letter) {
  const charsOn = [];
  const valorAsci = letter.toUpperCase().charCodeAt(0);

  for (let i = 65; i <= valorAsci; i++) {
    charsOn.push(String.fromCharCode(i));
  }

  for (let i = charsOn.length - 2; i >= 0; i--) {
    charsOn.push(charsOn[i]);
  }

  return charsOn;
}

function numeroGuiones(letter) {
  let dimensiones = letter.toUpperCase().charCodeAt(0) - 64;
  return dimensiones + (dimensiones - 1);
}

function diamante(letter) {
  const diamante = [];
  const arrayGuiones = new Array(numeroGuiones(letter)).fill('-');
  const primeraPosicion = Math.ceil(arrayGuiones.length / 2 - 1);
  const arrayLetras = letrasEnArray(letter);

  for (let i = 0; i < arrayGuiones.length; i++) {
    const arrayAMostrar = [...arrayGuiones];

    if (primeraPosicion + i < arrayGuiones.length) {
      if (i === 0) {
        arrayAMostrar.splice(primeraPosicion, 1, arrayLetras[i]);
      } else {
        arrayAMostrar.splice(primeraPosicion + i, 1, arrayLetras[i]);
        arrayAMostrar.splice(primeraPosicion - i, 1, arrayLetras[i]);
      }
    } else {
      const j = arrayGuiones.length - i - 1;
      arrayAMostrar.splice(primeraPosicion + j, 1, arrayLetras[i]);
      arrayAMostrar.splice(primeraPosicion - j, 1, arrayLetras[i]);
    }

    diamante.push(arrayAMostrar.join(' '));
  }

  return diamante;
}

const resultado = diamante('g');
resultado.forEach(linea => console.log(linea));
