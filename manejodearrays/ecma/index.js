function newFunction(name,age,country){
    var name = name || 'marco';
    var age = age || '32';
    var country = country || 'temoac';
    console.log(name, age,country);
}

function funcion2 (name='marco', age=32, country='temoac'){
    console.log(name, age, country);
}
funcion2()
funcion2('barby', 11, 'atla')




/**
 * @name tipo flecha
 * 
 * 
 * 
 */

const names = [{name:'marco', age:32},
{name:'yadi', age:33}]

let listOfNames =names.map(item=>
    console.log(item.name)
    )
/* const listOfNames2 = (name,age,country)=>{
    ...variable
} */

/* const listOfNames3 = name=>{
    ...funcion2
}
 */
const square = num => num *num;


/**
 * @name promesas
 * @description hay taquitos de pollo
 * @author yo merengues
 *
 */
const hello = ()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('taquitos de pollo')
        }
        else{
            reject('no hay taquitos')
        }
    })
}

hello().then(response=>console.log(response)).then(error=>console.log(error))


/**
 * 
 * 
 * 
 *  */ 
 class calculator {
     constructor(){
         this.valueA=0;
         this.valueB=0
     }
     sum(valueA,valueB){
         this.valueA=valueA;
         this.valueB=valueB;
         return this.valueA + this.valueB
     }
 }

 const calc = new calculator();
 console.log(calc.sum(2,2));