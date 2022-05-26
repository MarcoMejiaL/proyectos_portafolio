const matriz = [
    [1,2,3,4],
    [5,6,7,8,[1,2, [3,4]]],
    [9,10,11,12]
]
/* const newArray = [];
for (let i =0; i <matriz.length; i++){
    const array = matriz[i];
        for(let j =0; j< array.length; j++){
            const element = matriz[i][j]
            newArray.push(element);
        }
} */

/* console.log(newArray); */


function profundidad (list){
    let newList = []
    if(typeof list != "object") return [list];
    list.forEach(element =>{
        newList = newList.concat(profundidad(element));
    })
    return newList
}

const newArray = profundidad(matriz);
console.log(newArray);
