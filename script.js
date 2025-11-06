//Bloquear clic derecho
document.addEventListener('contextmenu', (e) => e.preventDefault());

//mostrar y ocultar secciones
function mostrarSeccion(id){
    document.getElementById('yo').style.display = 'none';
    document.getElementById('masdemi').style.display = 'none';

    //Mostrar la seccion seleccionada
    document.getElementById(id).style.display = 'block';

    //Ocultar o mostrar el aside
    const aside = document.getElementById('apartadolinks');
    aside.style.display = id === 'yo' ? 'block' : 'none';
}

const enlaceMasDeMi = document.querySelector('a[href="#masdemi"]');
const modal = document.getElementById('modal-password');
const btnAceptar = document.getElementById('btn-aceptar');
const btnCancelar = document.getElementById('btn-cancelar');
const passwordInput = document.getElementById('password-input');

if (enlaceMasDeMi) {
  enlaceMasDeMi.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    modal.style.display = 'flex'; // Muestra el modal
    passwordInput.value = ''; // Limpia el campo cada vez
  });
}

// Cuando el usuario hace clic en "Aceptar"
btnAceptar.addEventListener('click', () => {
  const password = passwordInput.value.trim();

  if (password === '') {
    alert('No ingresaste la contraseña');
    return;
  }

  if (password === 'brynine999') {
    modal.style.display = 'none';
    mostrarSeccion('masdemi');
  } else {
    alert('Contraseña incorrecta');
  }
});

// Cuando el usuario hace clic en "Cancelar"
btnCancelar.addEventListener('click', () => {
  modal.style.display = 'none';
});


function mostrarSeccion(id){

    document.getElementById('yo').style.display = 'none';
    document.getElementById('masdemi').style.display = 'none';
    
    document.getElementById(id).style.display = 'block';

    const aside = document.getElementById('apartadolinks');
    if (id === 'yo'){
        aside.style.display = 'block';

    }else {
        aside.style.display = 'none';
    }

}

function actualizarHora(){
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    const horaActual = `${horas}:${minutos}:${segundos}`;
    const reloj = document.getElementById('reloj');
    if(reloj) reloj.textContent = horaActual;
}

setInterval(actualizarHora, 1000);
actualizarHora();

function mostrarBienvenida() {
  alert('¡Bienvenido a mi página WRLD BryNine!');
}
window.onload = mostrarBienvenida;

function mostrarFecha() {
  const fecha = new Date();
  const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('fecha').textContent = fecha.toLocaleDateString('es-ES', opciones);
}
window.onload = mostrarFecha;

