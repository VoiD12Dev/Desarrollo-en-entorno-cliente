/*3. EJERCICIO 3
Crea un programa que calcule el cambio a devolver. El programa tendrá como entrada una lista de
monedas/billetes disponibles y la cantidad a devolver. Como salida, devolverá el cambio a utilizar
(puedes hacer que lo devuelva como texto o como cualquier estructura de datos que consideres)
Por ejemplo:
Entrada
----------------
Monedas disponibles: [ 0.10, 0.50, 1, 2, 5]
Cambio a devolver: 9.50
Resultado: 0.50x1, 2x2, 1x5
Debe devolver el cambio con la menor cantidad posible de monedas y billetes. En el ejemplo
anterior, la solución 0.10x5, 4x1, 1x5 sería incorrecta ya que se usan 11 monedas, al contrario que
en la solución del ejemplo en la que se utilizan 4.*/

function countCoins(change, dispCoins) {
  let tenCent = 0,
    fiftyCent = 0,
    oneDolar = 0,
    twoDolars = 0,
    fiveDolars = 0;
  let i = dispCoins.length - 1;

  while (i >= 0) {
    if (change >= dispCoins[i]) {
      switch (dispCoins[i]) {
        case 5:
          fiveDolars++;
          break;
        case 2:
          twoDolars++;
          break;
        case 1:
          oneDolar++;
          break;
        case 0.5:
          fiftyCent++;
          break;
        case 0.1:
          tenCent++;
          break;
      }
      change = change - dispCoins[i];
    } else {
      i--;
    }
  }

  return `Ten cents: ${tenCent}\nFifty cents: ${fiftyCent}\nOne dollar: ${oneDolar}\nTwo dollars: ${twoDolars}\nFive dollars: ${fiveDolars}`;
}

let coins = [0.1, 0.5, 1, 2, 5];

console.log(countCoins(11.8, coins));
