let pantalla = document.getElementById("pantalla");
let pincel = pantalla.getContext("2d");


function limpiarPantalla() {
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
}


function dibujarHorca(){

    pincel.strokeStyle = "brown";
    pincel.lineWidth = 8;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";


    pincel.beginPath();
    pincel.moveTo(300,350);
    pincel.lineTo(500,350);
    pincel.moveTo(360,350);
    pincel.lineTo(360,50);
    pincel.moveTo(360,50);
    pincel.lineTo(470,50);
    pincel.moveTo(470,50);
    pincel.lineTo(470,80);
    pincel.stroke();
    pincel.closePath();

}

function dibujarLinea(){
    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#F3F5F6";
    pincel.strokeStyle = "brown";

    let anchura = 500/palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++){
        
        pincel.moveTo(100 + (anchura*i), 450);
        pincel.lineTo(150 + (anchura*i), 450);
    }

    pincel.stroke();
    pincel.closePath();
}

function escribirLetraCorrecta(index) {
    pincel.font = 'bold 52px Inter';
    pincel.lineWidth=6;
    pincel.lineCap="round";
    pincel.lineJoin="round";
    pincel.fillStyle= "#123F11";
    let anchura=500/palabraSecreta.length;
    pincel.fillText(palabraSecreta[index],105+(anchura*index),430);
    pincel.stroke();
}

function escribirLetraIncorrecta(letra, errorsLeft) {
    pincel.lineWidth=6;
    pincel.font = 'bold 40px Inter';
    pincel.lineCap="round";
    pincel.lineJoin="round";
    pincel.fillStyle="#495057";
    pincel.fillText(letra,50+(40*(10-errorsLeft)), 500,40);
  }

function dibujarAhorcado() {
    pincel.beginPath();
    pincel.lineWidth = 6;
    pincel.fillStyle= "black";
    pincel.strokeStyle = "black";
    pincel.lineCap = "round";
    pincel.lineJoin = "round";

    if (errores === 5) {
    pincel.arc(470,107,20,0,2*3.14);
    }


    if (errores === 4){
    pincel.moveTo(470,130);
    pincel.lineTo(470,220);
    }

    if (errores === 3) {
    pincel.moveTo(470,130);
    pincel.lineTo(500,170);
    }

    if (errores === 2){
    pincel.moveTo(470,130);
    pincel.lineTo(440,170);
    }

    if (errores === 1){
    pincel.moveTo(470,220);
    pincel.lineTo(500,290);
    pincel.stroke();
    }

    if (errores === 0){
    pincel.moveTo(470,220);
    pincel.lineTo(440,290);
    pincel.stroke();
    /*perdiste();*/
    }

    pincel.stroke();
    pincel.closePath();
}

function ganaste(){
    pincel.clearRect(0, 0, 800, 360);
    pincel.font = 'bold 100px Inter';
    pincel.lineWidth=10;
    pincel.lineCap="round";
    pincel.lineJoin="round";
    pincel.fillStyle="green";
    pincel.fillText("Ganaste!",170,200);
    pincel.fillText("Felicidades!",150,300);
    /*setTimeout( recargar , 10000) */  
}

function perdiste(){
    pincel.font = 'bold 40px Inter';
    pincel.lineWidth=6;
    pincel.lineCap="round";
    pincel.lineJoin="round";
    pincel.fillStyle="red";
    pincel.fillText("Perdiste!",170,50);
    pincel.font = 'bold 30px Inter';
    pincel.fillText("La palabra era "+ palabraSecreta,180,380);

}


function recargar(){
    location.reload(); 
}
