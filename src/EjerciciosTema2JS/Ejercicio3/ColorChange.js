const colorElements = document.querySelectorAll('.color');

const consigueColor = e => {
  const checkColor = e.target;
  let color;
  if (checkColor.classList.contains('color')) {
    color = checkColor.style.backgroundColor;
    console.log(color);
  }

  // Esta vale
  //   checkColor.parentElement.style.backgroundColor = color;

  // Esta es que se da en clase
  checkColor.parentElement.setAttribute('style', `background-color: ${color}`);
};

const muestraColor = addEventListener('click', consigueColor);
