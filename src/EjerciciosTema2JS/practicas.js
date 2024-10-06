let coordX = document.querySelector('.Xnumber');
let coordY = document.querySelector('.YNumber');

contenidoCoordX = coordX.innerHTML;
contenidoCoordY = coordY.textContent;

let leeCoordX = document.createElement('p');
let leeCoordY = document.createElement('p');

leeCoordX.textContent = '30';
leeCoordY.textContent = '40';

coordX.appendChild(leeCoordX);
coordY.appendChild(leeCoordY);

console.log(contenidoCoordY);
