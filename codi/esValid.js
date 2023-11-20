//funció que comprova que els tamanys introduits per l'usuari siguin vàlids, i els modifica en cas de que no ho siguin
function esValid(tamany) {

    //revisar que les variables tinguin valors aptes, i aplicar correcions en cas de que no
    //el valor mínim és 10, i el màxim és 30.
    if (tamany < 10) {      //en cas de que el tamany sigui menor que 10
        tamany = 10;        //se li assigna el valor 10
    } else if (tamany > 30) {   //en cas de que sigui major que 30
        tamany = 30             //se li assigna el valor 30
    }

    alert("els valors s'han convertit correctament");
    //torna el resultat per que iniciarPartida() pugui seguir treballant amb ell
    return tamany;  
}