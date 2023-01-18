// Prueba Diagnostico

// I Parte: Teoría

// 1. Respuesta pregunta 1

/** 
Number tanto los integer(valores enteros), como los float(valores con decimales 1.5 por ejemplo).

    let valInt = 5;
    let valFloat = 1.5; 

string o datos de entrada escritos, o letras, todo aquello que se reciba de una caja de recepcion de informacion,
o todo aquello que se exprese entre ' '.

    let text = 'hola mundo';

boolean o valores true and false.

    let beginin = true
    let end = false

undefined, dato no reconocido

    let val = '10'
    let num = 5
    let result = val - num

    result = undefined
*/ 

// ====================================================================================================

// 2. Respuesta pregunta 2

/**
Por medio de una funcion.

const casa = {
  terreno:'montañoso', 
  paredes: 'cemento',
  techo: 'zing',
  color: 'azul',
  cambiarTerreno: function (newterreno){
    this.terreno = newterreno
  },
  pintar: function (newcolor){
    this.color = newcolor
  },
  newtecho: function (newmaterial){
    this.techo = newmaterial
  }
};

console.log(casa.terreno);
casa.cambiarTerreno('arcilla');

console.log(casa.color);
casa.pintar('verde');

console.log(casa.techo);
casa.newtecho('valdosas');

 */

// ====================================================================================================

// 3. Respuesta pregunta 3

/**
La funcion de +=, es la de sumar, es una forma resumida de decir list = list + valor / texto.

el primer console.log imprime la suma de los valores ya quie son trtados como numeros.

el segundo console.log imprime la suma de los dos valores anterioes + el string proporcionado, se veria como 4465TextoDePrueba, ya que 
lo lee como unconcatenacion, al ser un string lo que se le esta sumando.
*/

// ====================================================================================================

//Explique qué hace el operador != y !==, en cada caso, y el resultado de cada línea que usa el operador.

// 4. Respuesta pregunta 4

/**
es un operador de desigualdad.
en el primer caso dice que flag = false 
y en flag != true es cierto ya que flag si es distinto de true aunque no se considere
extrictamente el tipo de dato y en flag !== true tambien es cierto, ya que flag es distinto true y si se considera
el tipo de dato extrictamente que en este caso seria un booleano.

y en el csegundo caso, sucederia lo mismo ya que sucede lo mismo que en el primer caso.
*/

// ====================================================================================================


// 5. Respuesta pregunta 5

// Colocar la respuesta acá

//no recuerdo haberlo visto

// ====================================================================================================


// 6. Respuesta pregunta 6

// Colocar la respuesta acá

// no comprendi bien la diferencia en el cuatri pasado

// ====================================================================================================


// 7. Respuesta pregunta 7

// Colocar la respuesta acá

//no lo recuerdo bien 

// ====================================================================================================


// 8. Respuesta pregunta 8

/**
llegar a su forma mas simple una opersacion o problema, y de esta forma lograr que una funcion se puede llamar asi misma para poder
llegar a una solucion.

ejemplo:

una sumatoria de un arreglo 
[1,2,3,4,5] = 15

1 [2,3,4,5]

3[3,4,5]

6[4,5]

10 [5]

15


*/

// ====================================================================================================


// II Parte: Ejercicios

// 1. Respuesta pregunta 1

let valList = [1,2,3,4,5,6,7,8,9,10];

function parImpar(values){
  let listPar = [];
  let listImPar = [];

  for(let i = 0; i < values.length; i++){
    if (values[i] % 2 === 0){
      listPar.push(values[i])
    }else{
      listImPar.push(values[i])
    }
  }
  console.log("Lista de valores pares: ",listPar)
  console.log("Lista de valores impares: ",listImPar)
}

parImpar(valList)

// ====================================================================================================


// 2. Respuesta pregunta 2

// Colocar el código acá

// ====================================================================================================


// function numeros(numbers) { 
 //   let pares = []; 
 //   let impares = []; 
  
 //   for (let i = 0; i < numbers.length; i++) { 
 //       if (numbers[i] % 2 === 0) { 
 //           pares.push(numbers[i]); 
 //       } else { 
 //           impares.push(numbers[i]); 
 //       } 
 //   } 
 //   console.log("numeros pares:", pares); 
 //   console.log("numeros impares:", impares); 
 // } 
  
 // let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
 // numeros(lista);