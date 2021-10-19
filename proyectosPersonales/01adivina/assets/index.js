 let randomNumber = Math.floor(Math.random() *100)+1; 
 console.log(randomNumber);

 const parrafo = document.getElementById("resultado")
    let intentoss = document.getElementById("intentos")
    let numeroOne = document.getElementById("numberOne");
    let msg = document.getElementById("mensaje");
const boton = document.getElementById('button')
    
    let nintentos=1;
const result=()=>{
    console.log(nintentos);
    let p = parseInt(numeroOne.value); 
    
    
   
   intentoss.innerHTML +=  p +', '
   /* contador.innerHTML += nintentos */
   
   if(p === randomNumber){
        parrafo.innerHTML = 'Acertaste'
        parrafo.style.backgroundColor = 'green';
        gameOver()
   } else if (nintentos===10){
       parrafo.innerHTML= 'intentos agotados, fin del juego'
       gameOver();
   }else{
       parrafo.innerHTML='incorrecto vuelve a intentarlo'
       parrafo.style.backgroundColor='red'
       if(p>randomNumber){
        msg.innerHTML = 'el numero es muy grande'
       }else{
           msg.innerHTML = 'el numero es muy chico'
       }
   }


   
    nintentos++
    numeroOne.value= '';
    numeroOne.focus();


    
}


const gameOver=()=>{
    boton.disabled=true;
    numeroOne.disabled=true;
    resetButton = document.createElement('buttonDos');
    resetButton.textContent = 'Iniciar nuevo juego';
    document.body.append(resetButton);
    resetButton.addEventListener('click',resetGame);
}
function resetGame() {
    nintentos = 1;
    intentoss.innerHTML='numeros usados: '
    
  
    resetButton.parentNode.removeChild(resetButton);
  
    numeroOne.disabled = false;
    boton.disabled = false;
    numeroOne.value = '';
    numeroOne.focus();
  
    parrafo.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }