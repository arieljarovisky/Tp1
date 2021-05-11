let boton = document.getElementById("boton");

let boton2 = document.getElementById("botonPalabra");

boton.addEventListener("click", comprobarletra);

boton2.addEventListener("click", generarArray);

var arrayAMostrar = [];
var arrayDeLetras = [];
var parteAdivinada = "";

function generarArray() {
  inicializar();

  var valorPalabra = document.getElementById("palabra").value;
  let palabra = valorPalabra;
  arrayDeLetras = palabra.split("");
  arrayDeLetras.forEach(function(character) {
    arrayAMostrar.push({ letra: character, adivinado: false });
  });
}

function mostrarAdivinado() {
  arrayAMostrar.forEach(function(letraObj){
    if (letraObj.adivinado) {
      parteAdivinada = parteAdivinada + letraObj.letra;
    } else {
      parteAdivinada = parteAdivinada + " _ ";
    }
  });
  document.getElementById("adivinar").innerText = parteAdivinada;
}

function comprobarletra() {
  let valor = document.getElementById("letra").value;

  for (i = 0; i < arrayDeLetras.length; i++) {
    if (arrayDeLetras[i] === valor) {
      arrayAMostrar.forEach(function (objetoLetra) {
        if (objetoLetra.letra === valor) {
          objetoLetra.adivinado = true;
        }
      });
      console.log("Así quedó el array:", arrayAMostrar);
    } else {
      console.log("la letra no esta");
    }
  }

  mostrarAdivinado();
}

function inicializar() {
  arrayAMostrar = [];
  arrayDeLetras = [];
  parteAdivinada = "";
}

//TODO: Ir mostrando qué letras tiró el usuario y falló
//TODO: Por cada falla, se agrega una imagen

/* const myObj = {
  name: 'Skip',
  age: 2,
  favoriteFood: 'Steak'
};

const myObjStr = JSON.stringify(myObj);

console.log(myObjStr);
// "{"name":"Sammy","age":6,"favoriteFood":"Tofu"}"

console.log(JSON.parse(myObjStr));
// Object {name:"Sammy",age:6,favoriteFood:"Tofu"} */
