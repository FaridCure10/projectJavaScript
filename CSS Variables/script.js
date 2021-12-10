const inputs = document.querySelectorAll('.container input');

inputs.forEach( input => input.addEventListener('change',changeValue));
inputs.forEach( input => input.addEventListener('mousemove',changeValue));


function changeValue(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}