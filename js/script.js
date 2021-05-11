let boton = document.getElementById("boton");

let boton2 = document.getElementById("botonPalabra");



boton.addEventListener("click", comprobarletra);

boton2.addEventListener("click",generarArray);

var arrayAMostrar = [];
var arrayDeLetras = [];




function generarArray() { 
  var valorPalabra=document.getElementById("palabra").value;
  let palabra = valorPalabra;
  arrayDeLetras = palabra.split("");
  arrayDeLetras.forEach(function (character) {
    arrayAMostrar.push({ letra: character, adivinado: false });
  });
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
    }else{
      console.log("la letra no esta");
    }
  }
}






//Tenemos un array con objetos que marcan qué letra se adivinó
//El array se actualiza a medida que ingresás la letra

//TODO: Que la palabra sea random o ingresada por alguien
//TODO: Ir mostrando qué letras ya se adivinaron

//TODO: Ir mostrando qué letras tiró el usuario y falló
//TODO: Por cada falla, se agrega una im