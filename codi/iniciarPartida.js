//codi inicial, que demana els valors de la taula al usuari i després passa aquesta informació a iniciarTaulell()

function iniciarPartida() {
 
    //demanem i guardem les files i columnes
    let files = parseInt(prompt("Introdueix una quantitat de files"));
    let columnes = parseInt(prompt("Introdueix una quantitat de columnes"));

    //passar les dues variables per un test que comprova si tenen els tamanys correctes abans d'utilitzar-les
    files = esValid(files);
    columnes = esValid(columnes);

    //un cop s'han realitzat aquests procediments, es crida a iniciarTaulell() i se li passen les variables
    iniciarTaulell(files, columnes);

}