//* Se guarda la ruta de la api en una variable
const url = "https://api.nasa.gov/planetary/apod?api_key=3WQxHJWEpgeQMVaAFUWy020h9ku6kiJysPpPtnek&count=15" 
 

async function listaImagenes() {

    //* En el try hace la solicitud a la api
    try{
        let fetchImagen = await fetch(url) //* esperar a que conteste la api con await 
        let datosImagenes = await fetchImagen.json() //* Esperar a que los datos sean recividos en Json

        console.log(datosImagenes)

        const card = document.querySelector("[data-ul]")

        datosImagenes.forEach( elemento => {

            const contenido =
            `<li class="card">
                <img class="card__image" src="${elemento.url}" alt="imagen">
                <h3 class="card__title">${elemento.title}</h3>
            </li>
            `
            //* remplaza lo que hay seleccionado del Id por otra cosa
            card.innerHTML = card.innerHTML + contenido
        })
        
    }
    //* atrapa algun error
    catch(error){
        console.log(error)
    }
}

//* Se manda llamar la funcion
listaImagenes()



// Se crea una funcion asincrona
// despues el try v catch
// dentro de crea una variable donde va a esperar una url y los datos que van a pasarse en la variable como un json
// verificamos con el consol log para verioficar que es lo que devuelve
// seleccionamos por nombre del atributo en este caso son una lista
// y hacemos un foreach para  cada elemento de la lista  vamos a pintar un elemento que viene de la url 
// y un titulo que es lo unico que necesitamos (se puede agregar mas datos por ejempo un h3 con una descricion)

//! NOTA: Los corchetes [] se usan para indicar que se está buscando un elemento por su atributo,
//! en este caso, el atributo data-ul. Esto es útil cuando no se conoce el nombre exacto de la etiqueta HTML,
//! o cuando se quiere seleccionar un elemento de una manera más específica que solo por su etiqueta o clase.

//! Entonces, en resumen, los corchetes [] se utilizan en este ejemplo para seleccionar un elemento por su
//! atributo personalizado data-ul, en lugar de seleccionarlo por su etiqueta HTML o clase.




















//TODO: ejemplo de una promesa
// const solicitud = new Promise((resolve,reject) =>{
//     const response = "Resolve"

//     if (response == "Resolve") {
//         resolve("La promesa se cumplio")
//     }
//     else{
//         reject("Error, la promesa no se cumplio")
//     }
// })

// console.log(solicitud)