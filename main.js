//Escriba una function que escriba un número a la inversa

function invert(val){
  let reverse = val.toString().split("").reverse().join("");
  return Number(reverse);
}

console.log(invert(123));


function mayuscula(palabra){
  let wordMayus = palabra[0].toUpperCase() + palabra.substring(1)
  console.log(wordMayus)
}

mayuscula("olas");