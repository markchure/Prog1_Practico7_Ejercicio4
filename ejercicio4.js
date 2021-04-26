/*Implementar una función que dado 3 parámetros numéricos, retorne verdadero si el
último dígito de cada uno de los números ingresados son iguales.*/

function lastDigitEqual(param1, param2, param3) {
  let ultimoDigito1 = param1.charAt(param1.length - 1);
  let ultimoDigito2 = param2.charAt(param2.length - 1);
  let ultimoDigito3 = param3.charAt(param3.length - 1);

  let isValid = false;

  if (ultimoDigito1 == ultimoDigito2) {
    isValid = true;

    if (isValid && ultimoDigito1 == ultimoDigito3) {
      isValid = true;

      if (isValid && ultimoDigito2 == ultimoDigito3) {
        isValid = true;
      } else {
        isValid = false;
      }
    } else {
      isValid = false;
    }
  }

  return isValid;
}

let param1 = prompt("Ingrese parametro1: ");
let param2 = prompt("Ingrese parametro2: ");
let param3 = prompt("Ingrese parametro3: ");

console.log(lastDigitEqual(param1, param2, param3));
