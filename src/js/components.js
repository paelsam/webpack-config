import '../css/componets.css';

export const grettings = ( name ) => {

    console.log("Creando etiqueta h1 para HTML");

    const h1 = document.createElement('h1'),
        h2 = document.createElement('h2')
    h1.innerText = `Hello ${ name }`
    h2.innerText = `Ya es Septiembre, ya se siente DICIEMBRE`

    document.body.appendChild( h1 );
    document.body.appendChild( h2 );
}
