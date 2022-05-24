const items  =[1,2,2,2,4,1,2,3,4];
const data = [
    {
        name:'marco',
        level:'hight'
    },
    {
        name:'yadira',
        level:'medium'
    },
    {
        name:'barbara',
        level:'low'
    },
    {
        name:'elizabeth',
        level:'hight'
    },
]


const rta =items.reduce((obj,item)=>{
    if(!obj[item]){
        obj[item]=1;

    }else{
        obj[item] = obj[item] +1
    }
    return obj
},{})
console.log(rta);


const reducir = data.map(item=> item.level)
.reduce((obj,item)=>{
    if(!obj[item]){
        obj[item]=1;

    }else{
        obj[item] = obj[item] +1
    }
    return obj
},{})
console.log(reducir);