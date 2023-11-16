//codi inicial, que demana els valors de la taula al usuari i després passa aquesta informació a iniciarTaulell()

function iniciarPartida() {
 
    //demanem i guardem les files i columnes
    let files = parseInt(prompt("Introdueix una quantitat de files"));
    let columnes = parseInt(prompt("Introdueix una quantitat de columnes"));

    //revisar que les variables tinguin valors aptes, i aplicar correcions en cas de que no
    //el valor mínim és 10, i el màxim és 30.
    if (files < 10) {   //en cas de que files sigui menor que 10
        files = 10;     //se li assigna el valor 10
    } else if (files > 30) {    //en cas de que sigui major que 30
        files = 30              //se li assigna el valor 30
    }

    //a la variable columnes s'apliquen els mateixos procediments que a la variable files
    if (columnes < 10) {
        columnes = 10;
    } else if (columnes > 30) {
        columnes = 30
    }

    //un cop s'han realitzat aquests procediments, es crida a iniciarTaulell() i se li passen les variables
    iniciarTaulell(files, columnes);

}