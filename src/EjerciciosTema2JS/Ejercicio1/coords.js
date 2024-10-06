let coordX = document.querySelector('.Xnumber');
let coordY = document.querySelector('.YNumber');

document.addEventListener('mousemove', event => {
  let x = event.clientX;
  let y = event.clientY;

  coordX.textContent = `X: ${x}`;
  coordY.textContent = `Y: ${y}`;
});
