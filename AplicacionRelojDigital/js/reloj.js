const mostrarReloj = () => {

    console.log("ENTRE");

    let fecha = new Date();

    let hora = formatoHora(fecha.getHours());

    let minutos = formatoHora(fecha.getMinutes());

    let segundos = formatoHora(fecha.getSeconds());

    document.getElementById("hora").innerHTML = `${hora}:${minutos}:${segundos}`;

    const meses = ['Enero', 'Febrero', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  
    const dias = [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];


    document.getElementById("fecha").innerHTML = `${dias[fecha.getDay()]} de 
                ${fecha.getDate()}, ${meses[fecha.getMonth()]} del ${fecha.getFullYear()}`

    document.getElementById("contenedor").classList.toggle('animar');

}


setInterval(mostrarReloj,1000);


const formatoHora = function(hora){

    if(hora < 10) hora = '0' + hora;

    return hora

}