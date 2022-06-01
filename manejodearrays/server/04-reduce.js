const totals  =[1,2,3,4];


function solution(datos){
    const suma = datos.reduce((sum,item)=>sum + item ,0)
    return suma
}
/* const reducir = totals.reduce((sum, item)=> sum+ item,0);
console.log(reducir); */
console.log(solution(totals));
console.log(totals);

