/* const letters = ['a', 'b', 'c'];

const mapeo = letters.map(item=>item + '++')
console.log(mapeo);
 */


const arreglo = [
    {
        name: 'marco',
        total: 120,
        delivered: false
     
    },
    {
        name: 'yadira',
        total: 140,
        delivered: true
     
    },
    {
        name: 'barbara',
        total: 200,
        delivered: false
     
    },
    {
        name: 'elizabeth',
        total: 80,
        delivered: true
     
    },
]


function objeto(array){
   return array.map(item =>  item.name);
   
}
console.log(objeto(arreglo));
