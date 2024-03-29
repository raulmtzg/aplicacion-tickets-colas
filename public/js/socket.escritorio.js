// Comando para establer la conexion
var socket = io();


//Los ON son para escuchar
socket.on('connect', function(){
    console.log('conectado al servidor');
});

//Funcion para identificar el momento en que se pierde la conexion con el servidor
socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor');
});


var searchParams = new URLSearchParams( window.location.search);

if ( !searchParams.has('escritorio') ){
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
var label = $('small');

console.log(escritorio);
$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function(){

    socket.emit('atenderTicket', {escritorio: escritorio}, function( resp ){
        console.log(resp);
        if( resp === 'No hay tickets'){
            label.text(resp);
            alert(resp);
            return;
        }
        label.text(resp.numero);
    });

});