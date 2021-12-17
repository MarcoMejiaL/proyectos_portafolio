const people =[
    {name: 'wes', year:1998},
    {name:'kait', year:1986},
    {name:'irv', year: 1970},
    {name: 'lux', year:2015}
];

const comments = [
    {
        text: 'love this', id:523423
    },
    {
        text:'super good', id:823423
    },
    {
        text: 'you are the best', id: 2039842
    },
    {
        text: 'ramen', id: 123456
    },
    {
        text: 'nice', id: 542328
    }

]


/**
 * @name SOME
 * @description el metodo SOME lo que hace es comprobar si en alguno de los elementos del array
 * cumple con la condicion en la cual se esta preguntando 
 * sintaxis: nombreConstante.some(Condicion)
 * 
 * 
 * 
 */



const isAdult = people.some(person =>((new Date()).getFullYear())
     - person.year>=19)
     console.log({isAdult});


     /**
      * @name EVERY
      * @description el metodo EVERY lo que es es comprobar si "todos" los emementos del array cumplen 
      * la condicion arrojando un dato a diferencia del metodo SOME que busca alguno
      */
      const allAdult = people.every(person =>((new Date()).getFullYear())
      - person.year>=19)
      console.log(allAdult);

      /**
       * 
       * @name FIND
       * 
       * @description el metodo FIND busca entre el array lo que cumpla la condicion establecida retornando otro array
       * 
       * @returns un array con la respuesta
       */

      const comment = comments.find(comentario => comentario.id ===123456)
        console.log(comment);


        /**
         * @name findIndex
         * 
         * @description el metodo FINDINDEX muestra la posicion en que se encuentra dentro del array
         * 
         * 
         * @returns el indice del elemento que se sesta solicitando
         * 
         * 
         */

        const index = comments.findIndex(comentario => comentario.id ===123456)

        console.log(index);