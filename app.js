var name = prompt('¿Cuál es tu Nombre');
var menu_bienvenido = document.getElementById('menu_bienvenidoHtml');

menu_bienvenido.innerHTML=' Bienvenido : ' + name.toUpperCase();

if(confirm(' Hola! ' + name.toUpperCase()  +'\n ¿Te Animas a Jugar? ')){
  alert( ' Muy bien ' + name.toUpperCase() + ' Entonces Comencemos!');
  preguntas();
} else {
      alert (' Que lastima, visitanos pronto');
}

function preguntas(){
	var categoria =prompt('POR FAVOR SELECCIONA QUE CATEGORIA QUIERES JUGAR: \n '+ '1.DEPORTES \n 2.CULTURA GENERAL \n 3.TECNOLOGIA \n 4.PELICULAS');
	switch (categoria){
		case('1'):
			var pregunta1 = prompt('¿Brendan Eich desarrolló el lenguaje JavaScript?');
			var pregunta2 = prompt('¿Brendan Eich desarrolló el lenguaje JavaScript?');
			var pregunta3 = prompt('¿Brendan Eich desarrolló el lenguaje JavaScript?');
			var respuesta1 = "si",
				respuesta2 = "no",
				respuesta3 = "si",
				puntaje1	= 0 ;
			if (pregunta1 == respuesta1) {
	    		puntaje1++;
			}
			if(pregunta2 == respuesta2){
	    		puntaje1++;
			}
			if(pregunta3 == respuesta3){
	    		puntaje1++;
			}
			console.log(puntaje1);
			if(confirm("Desea seguir jugando?")){
				preguntas();
			}else{
				alert("adios");
				document.getElementById('btn_play').style.display="block";
				document.getElementsByClassName('categoria_uno_r')[0].innerHTML = "Puntos: "+puntaje1;
			}
			break;
		case('2'):
			var pregunta1 = prompt('¿Brendan Eich desarrolló el lenguaje JavaScript?');
			var pregunta2 = prompt('¿Brendan Eich desarrolló el lenguaje JavaScript?');
			var pregunta3 = prompt('¿Brendan Eich desarrolló el lenguaje JavaScript?');
			var respuesta1 = "si",
				respuesta2 = "no",
				respuesta3 = "si",
				puntaje2	   = 0 ;
			if (pregunta1 == respuesta1) {
	    		puntaje2++;
			}
			if(pregunta2 == respuesta2){
	    		puntaje2++;
			}
			if(pregunta3 == respuesta3){
	    		puntaje2++;
			}
			console.log(puntaje2);
			if(confirm("Desea seguir jugando?")){
				preguntas();
			}else{
				alert("adios");
				document.getElementById('btn_play').style.display="block";
				document.getElementsByClassName('categoria_dos_r')[0].innerHTML = "Puntos: "+puntaje2;
			}
			break;
		case('3'):
			var pregunta1 = prompt('¿Brendan Eich desarrolló el lenguaje JavaScript?');
			var pregunta2 = prompt('¿Brendan Eich desarrolló el lenguaje JavaScript?');
			var pregunta3 = prompt('¿Brendan Eich desarrolló el lenguaje JavaScript?');
			var respuesta1 = "si",
				respuesta2 = "no",
				respuesta3 = "si",
				puntaje3	   = 0 ;
			if (pregunta1 == respuesta1) {
	    		puntaje3++;
			}
			if(pregunta2 == respuesta2){
	    		puntaje3++;
			}
			if(pregunta3 == respuesta3){
	    		puntaje3++;
			}
			console.log(puntaje3);
			if(confirm("Desea seguir jugando?")){
				preguntas();
			}else{
				alert("adios");
				document.getElementById('btn_play').style.display="block";
				document.getElementsByClassName('categoria_tres_r')[0].innerHTML = "Puntos: "+puntaje3;
			}
			break;
		case('4'):
			var pregunta1 = prompt('¿Brendan Eich desarrolló el lenguaje JavaScript?');
			var pregunta2 = prompt('¿Brendan Eich desarrolló el lenguaje JavaScript?');
			var pregunta3 = prompt('¿Brendan Eich desarrolló el lenguaje JavaScript?');
			var respuesta1 = "si",
				respuesta2 = "no",
				respuesta3 = "si",
				puntaje4	   = 0 ;
			if (pregunta1 == respuesta1) {
	    		puntaje4++;
			}
			if(pregunta2 == respuesta2){
	    		puntaje4++;
			}
			if(pregunta3 == respuesta3){
	    		puntaje4++;
			}
			console.log(puntaje4);
			if(confirm("Desea seguir jugando?")){
				preguntas();
			}else{
				alert("adios");
				document.getElementById('btn_play').style.display="block";
				document.getElementsByClassName('categoria_cuatro_r')[0].innerHTML = "Puntos: "+puntaje4;
			}
			break;
		default:
			alert('Por favor ingresar Categoria válida');
			preguntas();
	}
}	    