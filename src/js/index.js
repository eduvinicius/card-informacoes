var sobre = document.querySelector('#sobre');
var minhasRedes = document.querySelector('#minhasRedes');
var sobreContainer = document.querySelector('#sobreContainer');
var minhasRedesContainer = document.querySelector('#minhasRedesContainer');

const mudarAbaRedes = () => {
    minhasRedesContainer.classList.add('selecionado');
    sobreContainer.classList.remove('selecionado');
}

const mudarAbaSobre = () => {
    sobreContainer.classList.add('selecionado');
    minhasRedesContainer.classList.remove('selecionado');
}

minhasRedes.addEventListener('click', mudarAbaRedes);
sobre.addEventListener('click', mudarAbaSobre);