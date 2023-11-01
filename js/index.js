/*-----------------------------------------------------------------------------------------------------------------
                                                VARIABLES
-----------------------------------------------------------------------------------------------------------------*/

const contenedorFecha = document.getElementById('contenedorFecha');
const reloj = document.getElementById('reloj');


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

const horaActual = () => {
  let h = new Date();
  hora = h.toLocaleTimeString();

  reloj.innerHTML = `<p id="relojDigital">${hora}</p>`
};

setInterval(() => {
  horaActual()
}, 1000);

// Funcion para la barra de progreso en el index

const barraProgreso = () => {
  let scroll = document.documentElement.scrollTop;
  let largo = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let progreso = (scroll/largo) * 100;
  document.getElementsByClassName("barra")[0].style.width = progreso + "%";
} 


/*-----------------------------------------------------------------------------------------------------------------
                                                EVENTOS
-----------------------------------------------------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
  fecha();
});

window.addEventListener("scroll", () => {
  barraProgreso();
})