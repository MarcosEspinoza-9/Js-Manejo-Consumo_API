
function uno () {
    console.log("uno")
    setTimeout(dos,2000);
}
function dos () {
    console.log("dos")
    
}

//TODO: Recive otra funcion a ejecutar con un tiempo de espera
//? Espera 5 segundos para ejecutar la funcion
// setTimeout(uno, 2000)
// dos() // se ejecuta primero la dos y luego la uno

//! FORMA PARA LLEVAR UN ORDEN EN LAS FUNCIONES
setTimeout(() => uno (dos),2000)



//* FUNCIOPN ANONIMA
const nombre = function () {
    console.log("Marco")
}
//* Se manda llamar la funcion "nombre"
nombre();

//TODO: ARROW FUNCTION
const persona = ( ) => console.log("Marquitos");
//* Mando llamar la funcion persona
// persona();

//todo: OTRA FORMA DE ESCRIBIR UNA FUNCION ARROW FUNCTION
() => console.log("Juan");








