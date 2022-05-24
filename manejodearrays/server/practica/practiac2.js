const data = [1,2,3,4,5,6,7,8,9];

const entre = (x,min,max) => x >=min && x<=max;

const rango = data.reduce(
    (dat,item)=>{
    if(entre(item,1,5)) dat["1-5"] +=1;
    if(entre(item,6,8)) dat["6-8"] +=1;
    if(entre(item,9,10)) dat["9-10"] +=1;
    return dat;
},
{"1-5":0, "6-8":0, "9-10":0}
)

console.log(rango);