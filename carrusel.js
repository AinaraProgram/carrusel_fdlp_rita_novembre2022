//Variables
let posicioActual = 0;
document.getElementById("tema").innerHTML = TEMA;
mostraImatge();
mostraTitol();


//Funcions
function mostraImatge(){
    let imatgeMostrar = RUTA + imatges[posicioActual];
    document.getElementById("imatge").src = imatgeMostrar;
}

function mostraTitol(){
    let textos = text[posicioActual];
    document.getElementById("nomImatge").innerHTML = textos;
}

function avança(){
    if(posicioActual >= imatges.length-1 && posicioActual >= text.length-1){
        posicioActual = 0;
    } else {
        posicioActual++;
    }
    mostraImatge();
    mostraTitol();
}

function retrocedeix(){
    if(posicioActual == 0){
        posicioActual = imatges.length-1 && text.length-1;
    } else {
        posicioActual--;
    }
    mostraImatge();
    mostraTitol();

}