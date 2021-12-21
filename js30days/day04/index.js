const familia = [
    {primerN: 'marco', apellido:'mejia', cumple:1990},
    {primerN: 'yadi', apellido:'coronado', cumple:1989},
    {primerN: 'barbara', apellido:'mejia', cumple:2010},
    {primerN: 'elizabeth', apellido:'mejia', cumple:2017},
]



const people = ['marco, mejia', 'barbara, mejia', 'elizabeth, mejia', 'yadira, coronado', 'brenda, mejia', 'alma, lopez', 'marco, aragon'];


/**
 * @author Marco
 * 
 * @function age 
 * 
 * con el metodo filter filtra el dato que se encuentre dentro de  la funcion que se encuentre dentro de los parenteses 
 * @sintaxis cosnt nombre = nombre_del_array.filter(function (dato){ return dato}) 
 */

const age = familia.filter(function(cumple){
    if(cumple.cumple > 2009){
        return true;
    }else{
        return false;
    }
});
console.table(age);


/**
 * @author Marco
 * 
 * @function nombres
 * 
 * con la funcion map hace un recorrido dentro del array retornando el valor que se dio por medio de una funcion ya sea normal de flecha o anonima
 * 
 * @sintaxis const nombre = nombre_del_objeto.map(parametro o dato => dato.datoDelObjeto) y despues de hace el llamado a la funcion para entregar el resultado (es como una busqueda)
 */
const nombres = familia.map( nombres => ` ${nombres.primerN} ${nombres.apellido}`)
console.table(nombres);


/**
 * @author Marco
 * 
 * @function orden
 * 
 * ordena los valores dentro de un array reciviendo 2 datos como parametro
 * 
 * @sintaxis const nombre = array.sort(function)
 */

const orden = familia.sort( function(a,b){
    if (a.cumple > b.cumple){
        return 1
    }else{
        return -1
    }

});

const ordenDos = familia.sort((a,b)=>a.cumple > b.cumple? 1:-1)//if ternario es: condicion ? true : false
console.log(orden);
console.log(ordenDos);

/**
 * @author Marco
 * 
 * @function edad
 * 
 * retorna que edad tienen todos los miembros del array
 */

const edad = familia.reduce((total,edad)=>{
    const currentYear = 2021;
    return total +(edad.cumple - currentYear);
},0)
console.table(edad)

const masViejo = familia.sort(function (a,b){
    const currentYear = 2021;
    const uno = a.edad -currentYear;
    const dos =b.edad - currentYear;
    return (a.cumple - currentYear)> (b.cumple -currentYear) ? 1 : -1
  /*   if (uno>dos){
        return 1
    }else{
        return -1
    } */

})
console.table(masViejo);