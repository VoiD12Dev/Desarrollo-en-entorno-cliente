/*
6.EJERCICIO 6: ALUMNOS DE PRIMERO Y SEGUNDO
Tienes una estructura que contiene los alumnos matriculados en cada uno de los módulos de un
ciclo de formación profesional. La estructura tiene el siguiente formato:
const modulos = [
 {
 nombre: 'Sistemas informáticos',
 curso: 1,
 alumnos: [
 'Don Pepito', 'Perico', 'Don José'
 ]
 },
 ...
 {
 nombre: 'Desarrollo Web en entorno cliente',
 curso: 2,
 asignatura: '',
 alumnos: [
 'Juan', 'Perico', 'Andrés', 'Don Pepito'
 ]
 },
 ...
]
Construye un programa que imprima los alumnos que están matriculados a la vez en asignaturas
de primer y segundo curso.
Con los datos visibles en el ejemplo anterior debería imprimir: 'Perico' y 'Don Pepito'
Ten en cuenta que la estructura puede contener más asignaturas de primero y segundo, y no
tienen por qué estar en orden.

*/

function alumnosRedundantes(registro) {
  let alumnosPrimero = new Array();
  let alumnosSegundo = new Array();
  let alumnosCoincidentes = new Array();

  for (const key in registro) {
    if (registro[key].hasOwnProperty('curso') && registro[key].curso === 1) {
      for (let i = 0; i < registro[key].alumnos.length; i++) {
        if (!alumnosPrimero.includes(registro[key].alumnos[i])) {
          alumnosPrimero.push(registro[key].alumnos[i]);
        }
      }
    }

    if (registro[key].hasOwnProperty('curso') && registro[key].curso === 2) {
      for (let i = 0; i < registro[key].alumnos.length; i++) {
        if (!alumnosSegundo.includes(registro[key].alumnos[i])) {
          alumnosSegundo.push(registro[key].alumnos[i]);
        }
      }
    }
  }

  for (let i = 0; i < alumnosPrimero.length; i++) {
    if (alumnosSegundo.includes(alumnosPrimero[i])) {
      alumnosCoincidentes.push(alumnosPrimero[i]);
    }
  }

  return alumnosCoincidentes;
}

const modulos = [
  {
    nombre: 'Sistemas informáticos',
    curso: 1,
    alumnos: ['Don Pepito', 'Perico', 'Don José', 'Jose', 'Alejando'],
  },
  {
    nombre: 'Desarrollo Web en entorno cliente',
    curso: 2,
    asignatura: '',
    alumnos: ['Juan', 'Perico', 'Andrés', 'Don Pepito'],
  },
  {
    nombre: 'Desarrollo Web en entorno servidor',
    curso: 2,
    asignatura: '',
    alumnos: ['Camila', 'Isabella', 'Lucas', 'Mateo', 'Nicolas', 'Valeria'],
  },
  {
    nombre: 'Lenguajes de Marcas',
    curso: 1,
    alumnos: ['Jose', 'Lucas', 'Sofia', 'Alejandro', 'Valeria', 'Mateo'],
  },
];

console.log(alumnosRedundantes(modulos));
