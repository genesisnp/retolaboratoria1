var name = prompt('¿Cuál es tu Nombre');
var menu_bienvenido = document.getElementById('menu_bienvenidoHtml');
menu_bienvenido . innerHTML=' Bienvenido : ' + name.toUpperCase();

if(confirm(' Hola! ' + name.toUpperCase()  +'\n ¿Te Animas a Jugar? ')){
  alert ( ' Muy bien ' + name.toUpperCase() + ' entonces comencemos! \n POR FAVOR SELECCIONA QUE CATEGORIA QUIERES JUGAR: \n '+ '1.DEPORTES \n 2.CVULTURA GENERAL \n 3.TECNOLOGIA \n 4.PELICULAS');
  } else {
      alert (' Que lastima, visitanos pronto');
  }
  var pregunta1 = prompt('¿Brendan Eich desarrolló el lenguaje JavaScript?');
    var respuesta1 = "si"
    //JavaScript fue desarrollado originalmente por Brendan Eich.
    if (pregunta1 == respuesta1) {
          alert ('¡Genial! Respuesta correcta');
  }else{
    alert ('Respuesta incorrecta')};

    var pregunta2 = prompt('¿Es HTML un lenguaje de programación?');
    var respuesta2 = "no"
    //HTML es un lenguaje de marcado de hipertexto, que da estructura a un documento mediante etiquetas.
    if (pregunta2 == respuesta2) {
      alert ('¡Genial! Respuesta correcta')
  }else {
    alert ('Respuesta incorrecta');

  }
    var pregunta3 = prompt('¿Para declarar estilos en CSS necesitas usar Propiedades y valores?');
    var respuesta3 = "si"
    //El par formado por una propiedad y un valor se denomina declaración CSS.
    if (pregunta3 == respuesta3) { alert ('¡Genial! Respuesta correcta')
    }else {
      alert ('Respuesta incorrecta')
    };
