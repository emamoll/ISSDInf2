/*-----------------------------------------------------------------------------------------------------------------
                                                VARIABLES
-----------------------------------------------------------------------------------------------------------------*/

const contenedorFecha = document.getElementById('contenedorFecha');
const reloj = document.getElementById('reloj');
const usuario = [];
const formularioRegistro = document.getElementById('formularioRegistro');
const emailNuevo = document.getElementById('emailNuevo');
const claveNueva = document.getElementById('claveNueva');
const confirmarClave = document.getElementById('confirmarClave');
const mensajeRegistroExitoso = document.getElementById('mensajeRegistroExitoso');
const mensajeErrorClaveRegistro = document.getElementById('mensajeErrorClaveRegistro');
const mensajeErrorEmailRegistro = document.getElementById('mensajeErrorEmailRegistro');
const formularioInicioSesion = document.getElementById('formularioInicioSesion');
const email = document.getElementById('email');
const password = document.getElementById('password');
const mensajeSesionIniciada = document.getElementById('mensajeSesionIniciada');
const mensajeErrorIniciarSesion = document.getElementById('mensajeErrorIniciarSesion');
const contenedorSeccionHombre = document.querySelector('.contenedorSeccionHombre');
const seccionHombre = document.querySelector('.seccionHombre');
const contenedorSeccionMujer = document.querySelector('.contenedorSeccionMujer');
const seccionMujer = document.querySelector('.seccionMujer');


/*-----------------------------------------------------------------------------------------------------------------
                                                FUNCIONES
-----------------------------------------------------------------------------------------------------------------*/

// Funcion que indica la fecha en el index

const fecha = () => {
  let f = new Date();
  semana = f.getDay()
  dia = f.getDate();
  meses = f.getMonth();
  anio = f.getFullYear();

  let diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
  let diaFecha = diasDeLaSemana[semana];

  let mesesDelAnio = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  let mes = mesesDelAnio[meses];

  contenedorFecha.innerHTML = `<span id="fechaIndex">${diaFecha}, ${dia} de ${mes} de ${anio}</span>`
};

// Funcion que marca la hora en la seccion de contacto

if (reloj) {
  const horaActual = () => {
    let h = new Date();
    hora = h.toLocaleTimeString();

    reloj.innerHTML = `<p id="relojDigital">${hora}</p>`
  };

  setInterval(() => {
    horaActual()
  }, 1000);
}



// Funcion para la barra de progreso en el index

const barraProgreso = () => {
  let scroll = document.documentElement.scrollTop;
  let largo = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let progreso = (scroll / largo) * 100;
  document.getElementsByClassName("barra")[0].style.width = progreso + "%";
};

// Funcion para el formulario de registro

const formRegistro = (e) => {
  e.preventDefault();

  emailRegistro = emailNuevo.value;
  claveNuevaRegistro = claveNueva.value;
  confClaveNuevaRegistro = confirmarClave.value;

  if (emailRegistro == "") {
    mensajeErrorEmailRegistro.style.display = 'block';
  } else if (claveNuevaRegistro == "") {
    mensajeErrorEmailRegistro.style.display = 'none';
    mensajeErrorClaveRegistro.style.display = 'block';
  } else if (claveNuevaRegistro != confClaveNuevaRegistro) {
    mensajeErrorClaveRegistro.style.display = 'block';
  } else {
    mensajeErrorEmailRegistro.style.display = 'none';
    mensajeErrorClaveRegistro.style.display = 'none';
    mensajeRegistroExitoso.style.display = 'block';

    usuario.push({ email: emailRegistro, clave: claveNuevaRegistro });

    sessionStorage.setItem("usuario", JSON.stringify(usuario));

    emailNuevo.value = "";
    claveNueva.value = "";
    confirmarClave.value = "";

  }
}

// Funcion para el formulario de inicio de sesion

const formInicioSesion = (e) => {
  e.preventDefault();


  let usuarioRegistrado = JSON.parse(sessionStorage.getItem("usuario"));

  emailInicio = email.value;
  claveInicio = clave.value;

  if (emailInicio == '' || claveInicio == '') {
    mensajeErrorIniciarSesion.style.display = 'block'
  } else if (emailInicio != usuarioRegistrado[0].email || claveInicio != usuarioRegistrado[0].clave) {
    mensajeErrorIniciarSesion.style.display = 'block';
  } else {
    mensajeErrorIniciarSesion.style.display = 'none';
    mensajeSesionIniciada.style.display = 'block';

    email.value = "";
    clave.value = "";
  }
}

// Funcion para el menu seccion hombre

const abrirSecHombre = () => {
  if (seccionMujer.classList.contains("activo")) {
    seccionMujer.classList.toggle("activo");
    seccionHombre.classList.toggle("activo");
  } else seccionHombre.classList.toggle("activo");
}

// Funcion para el menu seccion mujer

const abrirSecMujer = () => {
  if (seccionHombre.classList.contains("activo")) {
    seccionHombre.classList.toggle("activo");
    seccionMujer.classList.toggle("activo");
  } else seccionMujer.classList.toggle("activo");
}

/*-----------------------------------------------------------------------------------------------------------------
                                                EVENTOS
-----------------------------------------------------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
  if (contenedorFecha) fecha();
});

if (document.getElementsByClassName("barra")) {
  window.addEventListener("scroll", () => {
    barraProgreso();
  })
}

if (formularioRegistro) {
  formularioRegistro.addEventListener("submit", (e) => {
    formRegistro(e);
  })
}

if (formularioInicioSesion) {
  formularioInicioSesion.addEventListener("submit", (e) => {
    formInicioSesion(e);
  })
}

contenedorSeccionHombre.onclick = () => {
  abrirSecHombre();
};

contenedorSeccionMujer.onclick = () => {
  abrirSecMujer();
};

