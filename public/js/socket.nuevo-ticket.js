
// Comando para establer la conexion
var socket = io();

var label = $('#lblNuevoTicket');

//Los ON son para escuchar
socket.on('connect', function(){
    console.log('conectado al servidor');
});

//Funcion para identificar el momento en que se pierde la conexion con el servidor
socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor');
});


// on 'estadoActual'
socket.on('estadoActual', function(estadoActual){
    
    label.text(estadoActual.actual);
});

//Establecer un listener al boton para que este atento cada que hagan clic en el
$('button').on('click', function(){

    socket.emit('siguienteTicket', null, function(siguienteTicket){

        label.text(siguienteTicket);

    });


});