import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

// inicializaciones
const jugar = document.getElementById('jugar');
const carta = document.getElementById('carta');
const button = document.getElementById('button');
const ingreso = document.getElementById('ingreso');
let alertas = document.getElementById('alertas');
let numeroVictoria = document.getElementById('numeroVictoria');
let numeroIntento = document.getElementById('numeroIntento');
let intentos = 0;
let victorias = 0;
let numeroMagico = 0;
//selecciono elementos
alertas.innerHTML = `<p>Tienes que acertar el numero que elige la computadora al momento de comenzar a jugar, te ire dando pistas para ayudarte a encontrar cual es el <span class="text-primary">Numero Magico</span>. </p>`;
jugar.addEventListener('click', () => {
    intentos = 0;
    mostrarIntendos(intentos);
    alertas.innerHTML = 'Empesaste a Jugar! adivina que numero Estoy Pensando....';
    carta.innerHTML = ``
    numeroMagico = Math.floor(Math.random() * 100);
    carta.innerHTML = `<h1 id="numeroMagico"><i class="fa-solid fa-star text-warning display-1"></i></h1>`
    button.className = 'btn btn-outline-info mt-2';
});
const mostrarIntendos = (intento) => {
    numeroIntento.innerHTML = `<h4 class="mb-5">Intentos: <span class="border border-primary rounded p-3">${intento}</span></h4>`
}
const mostrarVictoria = (victoria) => {
        numeroVictoria.innerHTML = `<h4 class="mb-5">Victorias: <span class="border border-success rounded p-3">${victoria}</span></h4>`

    }
    //trabajo la logica

button.addEventListener('click', (e) => {
    e.preventDefault();
    let numeroIngresado = document.getElementById('numeroIngresado').value;
    if (numeroMagico === '') {
        alertas.innerHTML = 'para comenzar, oprime el boton jugar'
    } else if (numeroIngresado === '') {
        alertas.innerHTML = `ingresa un numero!`;
    } else if (parseInt(numeroIngresado) < parseInt(numeroMagico) && numeroIngresado != '') {
        intentos++;
        alertas.innerHTML = `casi, el numero magico es MAYOR! al numero que ingresaste ${numeroIngresado}`;
    } else if (parseInt(numeroIngresado) > parseInt(numeroMagico) && numeroIngresado != '') {
        intentos++;
        alertas.innerHTML = `vamos sigue intentando, el numero magico es MENOR al numero que ingresaste ${numeroIngresado}`;
    } else if (parseInt(numeroIngresado) === parseInt(numeroMagico) && numeroIngresado != '') {
        victorias++;
        intentos++;
        alertas.innerHTML = `Felicidades acertaste el numero magico!!!`;
        button.className = 'btn btn-outline-info mt-2 disabled'
    }

    mostrarIntendos(intentos);
    mostrarVictoria(victorias);
    document.getElementById('ingreso').reset();
})
mostrarVictoria(victorias);
mostrarIntendos(intentos);



// revicion para limpieza