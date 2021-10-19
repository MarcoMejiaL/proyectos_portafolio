const secontHand =document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourand = document.querySelector('.hour-hand');

function setDate(){
    const now =new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60) * 360)+90;
    secontHand.style.transform= `rotate(${secondsDegrees}deg)`;
    console.log(seconds);
    
    const mins = now.getMinutes();
    const minDegrees = ((mins/60) * 360)+90;
    minHand.style.transform=`rotate(${minDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour/12) * 360)+90; 
    hourand.style.backgroundColor='red';
    hourand.style.transform =`rotate(${hourDegrees}deg)`;
}
setInterval(setDate,1000)