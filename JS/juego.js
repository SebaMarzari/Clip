let btn = document.getElementById("btnGame");
let textIngresado = document.getElementById("errorImp");
let label = document.createElement("txt");
let cantidadIntentos = 0;
let listaIntentos = [];
let resultado = ""
let rta = "Al inicio de la impresión no imprime"
let pista = ""
console.log("Llego al game.js")
function adivina(text){

    cantidadIntentos++;
    console.log(text)
    listaIntentos.push(text);
    if (text === rta) {
        console.log(listaIntentos)
        alert("felicitaciones adivino el error y ahora obtendrá un descuento!")
    }
    if (text != rta){
        alert("Ups no tuvimos suerte \n A seguie pensando...")
    }
    console.log(cantidadIntentos)
    if (cantidadIntentos == 1){
        pista = "El extrusor no saca plástico al comenzar la impresión \n Quedan 4 intentos"
        return;
        }
    if (cantidadIntentos == 2){
        pista = "El nozzle está demasiado cerca de la cama caliente \n Quedan 3 intentos"
        return;
    }
    if (cantidadIntentos == 4){
        pista = "El extrusor está obstruido \n Queda 1 intento"
        return;
    }
    if (cantidadIntentos == 5){
        alert("La respuesta era 'Al inicio de la impresión no imprime'");
        return;
    }
}

function mostrar (numero){
    document.getElementById("resultado").innerHTML = numero;

}

function estado (est){
    document.getElementById("estado").innerHTML = est;
}

btnGame.addEventListener("click", function(){
    let x = textIngresado.value;
    adivina(x)
    mostrar(listaIntentos)
    estado(cantidadIntentos)
    
});