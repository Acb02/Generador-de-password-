/*variables*/
let cantidad = document.getElementById('cantidad');
let botonGenerar = document.getElementById('generar');
let botonLimpiar = document.getElementById('limpiar');
let contrasena = document.getElementById('contrasena');

const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeros = "0123456789";
const caracteresEspeciales = "!@#$%&*/?";

/*funciones*/
function generar() {
    let numeroDigitado = parseInt(cantidad.value);

    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor a 8");
        return;
    }

    let password = '';
    password += letrasMayusculas[Math.floor(Math.random() * letrasMayusculas.length)];
    password += letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)];
    password += numeros[Math.floor(Math.random() * numeros.length)];
    password += caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)];

    let todosCaracteres = letrasMinusculas + letrasMayusculas + numeros + caracteresEspeciales;

    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = todosCaracteres[Math.floor(Math.random() * todosCaracteres.length)];
        password += caracterAleatorio;
    }

    contrasena.textContent = password;
}

/*Función para limpiar los campos*/
function limpiar() {
    cantidad.value = '';
    contrasena.textContent= '';
}

botonGenerar.addEventListener('click', generar);
botonLimpiar.addEventListener('click', limpiar);
