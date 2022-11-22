//Variables
let posicioActual = 0;
document.getElementById("tema").innerHTML = TEMA;
mostraImatge();


//Funcions
function mostraImatge(){
    let imatgeMostrar = RUTA + imatges[posicioActual].imatge;
    let nom = imatges[posicioActual].nom;
    let autor = imatges[posicioActual].autor;
    let desc = imatges[posicioActual].descripcio;

    document.getElementById("imatge").src = imatgeMostrar;
    document.getElementById("autor").autor = autor;
    document.getElementById("imatge").desc = desc;
    document.getElementById("imatge").alt = nom;
    document.getElementById("nom").innerHTML = nom;
    document.getElementById("desc").innerHTML = desc;
}

function avança(){
    if(posicioActual >= imatges.length-1 && posicioActual >= text.length-1 && posicioActual >= autor.length-1){
        posicioActual = 0;
    } else {
        posicioActual++;
    }
    mostraImatge();
}

function retrocedeix(){
    if(posicioActual == 0){
        posicioActual = imatges.length-1 && text.length-1;
    } else {
        posicioActual--;
    }
    mostraImatge();
}



