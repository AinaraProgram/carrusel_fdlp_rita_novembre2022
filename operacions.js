function buscar(valor){//Dragon Ball
    let trobat = false;
    let index = -1;
    let i = 0;
    let voltes = imatges.length;//10

    while (i < voltes && !trobat){ //Dragon Ball
        if(valor == imatges[i].nom){//Dragon Ball
            index = i;//index = 4
            trobat = true;
        }
        i++;
    }
    return index;
}


function afegir(){
    let varNom = prompt("Indica el nom de la imatge: ", "Best Anime");
    let index = buscar(varNom);

    if (index <= 0){
        let varImatge = prompt("Indica el nom de la imatge png (sense l'extensió): ", "best_anime") + ".png";
        let varNom = prompt("Indica el nom que li posaràs a la imatge: ", "Best Anime");
        let varAutor = prompt("Indica l'autor de la imatge: ", "Horikoshi Kōhei");
        let varDescripcio = prompt("Escriu una breu descripció: ", "Boku no Hero Academia és un manga molt popular tant al Japó com a la resta del món.");

        const imatgeInsercio = 
        {
            imatge: varImatge,
            nom: varNom,
            autor: varAutor,
            descripcio: varDescripcio,
        }
        imatges.push(imatgeInsercio);
        posicioActual = imatges.length -1;
        mostraImatge();
    } else {
        alert("La imatge ja existeix!");
        posicioActual = index;
        mostraImatge();
    }
}


function esborrar(){
    let imatgeEliminar = prompt("Quina imatge vols eliminar? "); //nom de la imatge = Dragon Ball
    let index = buscar(imatgeEliminar);

    if(index >= 0){
        posicioActual = index;
        mostraImatge();

        let confirmar = confirm("N'estàs del tot segur/a que vols eliminar-la?");
        if(confirmar){
            imatges.splice(index, 1);
            mostraImatge();
        }
    } else {
        alert ("Aquesta imatge no existeix!");
    }
}


function modificar(){
    let imatgeModificar = prompt("Quina imatge vols modificar? ");//Dragon Ball.
    let index = buscar(imatgeModificar);

    if(index >=0){
        posicioActual = index;
        mostraImatge();

        let confirmar = confirm("Vols modificar la imatge? ");
        if (confirmar){
            console.log(imatges);
             let imatgeNova = prompt("Quina imatge vols ara? ", imatges[index].imatge);//6 posició de l'array
             let nomNou = prompt("Quin nom li posem? ", imatges[index].nom);
             let subnomNou = prompt("Com s'escriu el títol en japonès? ", imatges[index].subnom);
             let autorNou = prompt("Quina autor ha fet l'obra? ", imatges[index].autor);
             let descripcioNova = prompt("Escriu una breu descripció ", imatges[index].descripcio);

             const totNou = {
                imatge: imatgeNova,
                nom: nomNou,
                subnom: subnomNou,
                autor: autorNou,
                descripcio: descripcioNova
             }
            //posicioActual = imatgeNova;
            imatges.splice(index, 1, totNou);//el machacador
            mostraImatge();

        }
    } else {
        alert ("Aquesta imatge no existeix!");
    }
}

