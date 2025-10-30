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

//contrasena para la seccion mas de mi
const enlaceMasDeMi = document.querySelector('a[href="#masdemi"]');
if (enlaceMasDeMi) {
  enlaceMasDeMi.addEventListener('click', (e) => {

    e.preventDefault();
    e.stopPropagation();

    const password = prompt('Sección privada, ingresa la contraseña: ');

    if (password === null) {
      return;
    } 

    if (password.trim() === ''){
        alert('No ingresaste la contraseña');
        return;
    }

    if (password === 'brynine999'){
        mostrarSeccion('masdemi');

    }else {
        alert('contraseña incorrecta')
    }
  });
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