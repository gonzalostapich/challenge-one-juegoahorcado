let palabras = ["sol", "barco", "azucar", "broche","sal", "mesa","elefante","ventana","luz","secreto","gato","jirafa","lampara","sapo","sueño"];
let palabraSecreta = "";
var errores = 6;
let palabraCorrecta = [];
let letrasIngresadas = [];
let letras = [];

let entrada = document.querySelector("#entrada");
let  inputTeclado= document.querySelector("#input-teclado");

let botonIniciar = document.getElementById("btnIniciar").onclick = function(){
  document.getElementById("inicio").style.display="none";
  document.getElementById("juego").style.display="flex";
  iniciarJuego();
}


function escojerPalabra(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra.toUpperCase();
    
}

function validarLetra(letra) {
  if (( letra.codePointAt() >= 65 && letra.codePointAt() <= 90) || letra.codePointAt() === 209) {
  return true;
  } else {
    return false;
  }
}



function contieneLetra(elemento, lista) {
  return lista.includes(elemento);
}

function ganador() {
  if (palabraCorrecta.length == palabraSecreta.length) {

    return true;
    
  }
}


function palabraValida(nuevaPalabra){
  for (let i = 0; i < nuevaPalabra.length; i++) {
    if((nuevaPalabra[i].charCodeAt(i) < 65 || nuevaPalabra[i].charCodeAt(i) > 90) && nuevaPalabra[i].charCodeAt(i) != 209){
      return false
    }
    else{
      return true
    }
    
  }

}

function agregarPalabra(){
  let nuevaPalabra = entrada.value.toUpperCase();
  if (nuevaPalabra !="" && nuevaPalabra.length <= 8){
    if(palabraValida(nuevaPalabra)){ 
      palabras.push(nuevaPalabra);
      alert('La palabra fue guardada');
      entrada.value="";
      document.getElementById("nuevaPalabra").style.display="none";
      document.getElementById("juego").style.display="flex";
      iniciarJuego();
    }
    else{
      alert("Error la palabra ingresada no es valida")
      entrada.value="";
    }
  
  }
  else{
    alert("Error la palabra ingresada no es valida")
    entrada.value="";
  }
}




function iniciarJuego(){
    
    escojerPalabra();
    dibujarHorca();
    dibujarLinea();
    inputTeclado.focus();
    inputTeclado.addEventListener("input", function () {
        let letra = inputTeclado.value.toUpperCase();
        inputTeclado.value = "";
        if (errores > 0){
          if ( validarLetra(letra)){
            if (!contieneLetra(letra, letrasIngresadas)) {
              letrasIngresadas.push(letra);
              letrasIngresadas.sort();
                if (palabraSecreta.includes(letra)) {
                  for (let i = 0; i < palabraSecreta.length; i++) {
                    if (palabraSecreta[i] === letra) {
                        palabraCorrecta += palabraSecreta[i];
                        escribirLetraCorrecta(i);
                        if (ganador()) {

                          ganaste();
                          
                        }
                      
                    }
                  }
                }
                else{
                    errores -= 1
                    if (errores > 0 && !ganador()){
                      dibujarAhorcado();
                      escribirLetraIncorrecta(letra, errores);
                    }
                    else{
                      dibujarAhorcado();
                      escribirLetraIncorrecta(letra, errores);
                      perdiste();
                    }  
                
                }
              }
            }
          } 
            else{
              perdiste();
            }  

      });   
      
}

function recargarJuego(){
    limpiarPantalla();
    palabraSecreta = "";
    errores = 6;
    palabraCorrecta = "";
    letrasIngresadas = [];
    letras = [];
    iniciarJuego();

}

function reload(){
  location.reload();
}

btnAgregar.onclick = function(){
  document.getElementById("inicio").style.display="none";
  document.getElementById("nuevaPalabra").style.display="block";
  entrada.focus();
}
nuevoJuego.onclick = recargarJuego;
desistir.onclick = reload;
cancelar.onclick = reload;
guardar.onclick = agregarPalabra;