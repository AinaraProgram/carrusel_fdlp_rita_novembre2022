function agregar(){
    let varNom = prompt("Indica el nom de la imatge: ", "Boku no Hero");
    let index = buscar(varNom);

    if (index < 0){
        let varImatge = prompt("Indica el nom de la imatge jpg (sense l'extensió): ", "boku no hero");
        let varNom = prompt("Indica el nom que li posaràs a la imatge: ", "Boku no Hero Academia");
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
    }
}

function buscar(valor){
    let trobat = false;
    let index = -1;
    let i = 0;
    let voltes = imatges.length;

    while (i < voltes && !trobat){
        if(valor == imatges[i].nom){
            index = i;
            trobat = true;
        }
        i++;
    }
    return index;
}