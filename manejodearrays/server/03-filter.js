const words = ['sprat', 'limit', 'elite', 'exuberant'];

const rta= words.filter(item => item.length>=6)
console.log(rta);


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

const rta2 = arreglo.filter(item=>{
    if (item.delivered ==true){
        console.log(item.name);
    }
})

/* console.log(rta2); */
const search = (query)=>{
        return arreglo.filter(item=>{
            return item.name.includes(query)
        })
}
console.log(search('liza'));