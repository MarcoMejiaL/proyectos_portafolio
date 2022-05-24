

const personas = [
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
console.log(app);



const mostar=()=>    
{ 
    const app = document.querySelector('div ul');
    personas.map(item=>{

    app.innerHTML += `<li> ${item.name} ${item.total} ${item.delivered} </li>`  
    
}
)
}
/* */

