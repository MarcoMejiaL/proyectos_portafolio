/**
 * @name querySelector
 * 
 * @description se utiliza para poder llamar una selector dentro del html en este caso la etiqueta P
 * tambien se puede usar para todos o para algo en especifico como es el caso de getElementeById que trae
 * el elemento que tenga el id seleccionado
 * 
 * @nota para que una funcion se puede ejecutar es necesario poner el evento en la etiqueta html y enlazarla con el nombre de la funcion que desea ejecutar
 * 
 */



function verde(){
    const p = document.querySelector('p');//toma la primer etiqueta P
    p.style.color='green'
    p.style.fontSize='50px'
}



console.log('%c yo soy paquito', 'font-size:40px');//%c al principo para agregar un estilo al clg

/* waring */
console.warn('nooooo')
/* error */
console.error('error')
/* info */
console.info('info')
//testin
const p = document.querySelector('p')

//Clear
console.clear();

//ver DOM Elements

console.log(p);
console.dir(p)