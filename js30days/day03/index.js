const inputs = document.querySelectorAll('.controls input');


function update (){
     const sufix =this.dataset.sizing || '';
     document.documentElement.style.setProperty(`--${this.name}`,this.value + sufix)
}
inputs.forEach(input => input.addEventListener('change', update));
inputs.forEach(input => input.addEventListener('mousemove', update));