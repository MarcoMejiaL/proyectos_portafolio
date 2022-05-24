const solution=['amor', 'sol', 'piedra', 'día'];


const respuesta = solution.filter(item =>{
    if (item.length >=4){
        return item
    }

});

console.log(respuesta);