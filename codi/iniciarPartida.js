//codi inicial, que demana els valors de la taula al usuari i després passa aquesta informació a iniciarTaulell()

function iniciarPartida() {
 
    //demanem i guardem les files i columnes
    let files = parseInt(prompt("Introdueix una quantitat de files"));
    let columnes = parseInt(prompt("Introdueix una quantitat de columnes"));

    //passar les dues variables per un test que comprova si tenen els tamanys correctes abans d'utilitzar-les
    esValid(files);
    esValid(columnes);

    //un cop s'han realitzat aquests procediments, es crida a iniciarTaulell() i se li passen les variables
    iniciarTaulell(files, columnes);

    alert("De moment tot bé");

}


function esValid(tamany) {

    //revisar que les variables tinguin valors aptes, i aplicar correcions en cas de que no
    //el valor mínim és 10, i el màxim és 30.
    if (tamany < 10) {      //en cas de que el tamany sigui menor que 10
        tamany = 10;        //se li assigna el valor 10
    } else if (tamany > 30) {   //en cas de que sigui major que 30
        tamany = 30             //se li assigna el valor 30
    }

    return tamany;
}