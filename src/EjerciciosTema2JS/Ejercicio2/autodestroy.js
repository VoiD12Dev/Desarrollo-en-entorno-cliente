const parrafo = document.querySelectorAll('.texto');

//Esto es matar moscas a cañonazos, es una chapuza, visto en clase.
// const hiddenP = e => {
//   const compruebaClase = e.target;
//   if (compruebaClase.classList.contains('texto')) {
//     if (!compruebaClase.classList.contains('hidden')) {
//       compruebaClase.classList.add('hidden');
//     }
//   }
// };

const deleteP = e => {
  e.preventDefault();
  const checkClase = e.target;
  if (checkClase.classList.contains('texto')) {
    checkClase.remove();
  }
};

//Esta es la forma correcta, asignando a cada parrafo un listener.
function hiddenP(e) {
  e.target.classList.add('hidden');
}
parrafo.forEach(x => {
  x.addEventListener('click', hiddenP);
});

const reappearsP = e => {
  const checkButton = e.target;
  if (checkButton.classList.contains('reaparecer')) {
    for (let texto of parrafo) {
      if (texto.classList.contains('hidden')) {
        texto.classList.remove('hidden');
      }
    }
  }
};

// const esconde = addEventListener('click', hiddenP);
const elimina = addEventListener('contextmenu', deleteP);
const reaparece = addEventListener('click', reappearsP);
