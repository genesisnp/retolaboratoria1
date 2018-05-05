
	var name = prompt('¿Cuál es tu Nombre');
	var menu_bienvenido = document.getElementById('menu_bienvenidoHtml');
	menu_bienvenido.innerHTML=' Bienvenido : ' + name.toUpperCase();
	//CONFIRMACION AL JUEGO
	if(confirm(' Hola! ' + name.toUpperCase()  +'\n ¿Te Animas a Jugar? ')){
	  alert( ' Muy bien ' + name.toUpperCase() + ' Entonces Comencemos!');
	  preguntas();
	} else {
	      alert (' Que lastima, visitanos pronto');
	}
	//PREGUNTAS PARA CADA CATEGORIA
	function preguntas(){
		var categoria =prompt('POR FAVOR SELECCIONA QUE CATEGORIA QUIERES JUGAR: \n '+ '1.DEPORTES \n 2.CULTURA GENERAL \n 3.TECNOLOGIA \n 4.PELICULAS');
		var aciertos1=0,aciertos2=0,aciertos3=0,aciertos4=0;
		switch (categoria){
			case('1'):
				var pregunta1 = prompt('¿En qué País fueron las Olimpiada 2016?');
				var pregunta2 = prompt('¿En que año Peú participó por última vez en un Mundial de Fútbol?');
				var pregunta3 = prompt('¿Apellido del actual DT del equipo de Peú?');
				var respuesta1 = "brasil";
				var respuesta2 = "1982";
				var respuesta3 = "gareca";
				if (pregunta1 == respuesta1) {
		    		aciertos1++;
				}
				if(pregunta2 == respuesta2){
		    		aciertos1++;
				}
				if(pregunta3 == respuesta3){
		    		aciertos1++;
				}
				if(confirm("Desea seguir jugando?")){
					document.getElementsByClassName('categoria_uno_r')[0].innerHTML = "ACIERTOS: "+aciertos1;
					preguntas();
				}else{
					alert("adios");
					document.getElementById('btn_play').style.display="block";
					document.getElementsByClassName('categoria_uno_r')[0].innerHTML = "ACIERTOS: "+aciertos1;
				}
				break;
			case('2'):
				var pregunta1 = prompt('¿En que País se encuentra el TajMahal?');
				var pregunta2 = prompt('¿Quién escribió la Odisea?');
				var pregunta3 = prompt('¿Cuál es la moneda del Reino Unido?');
				var respuesta1 = "india";
				var respuesta2 = "homero";
				var respuesta3 = "libra";

				if (pregunta1 == respuesta1) {
		    		aciertos2++;
				}
				if(pregunta2 == respuesta2){
		    		aciertos2++;
				}
				if(pregunta3 == respuesta3){
		    		aciertos2++;
				}
				if(confirm("Desea seguir jugando?")){
					document.getElementsByClassName('categoria_dos_r')[0].innerHTML = "ACIERTOS: "+aciertos2;
					preguntas();
				}else{
					alert("adios");
					document.getElementById('btn_play').style.display="block";
					document.getElementsByClassName('categoria_dos_r')[0].innerHTML = "ACIERTOS: "+aciertos2;
				}
				break;
			case('3'):
				var pregunta1 = prompt('¿Cuál fue el primer Viode Juego?');
				var pregunta2 = prompt('¿En qué año fue lanzado IPAD?');
				var pregunta3 = prompt('¿Quién desarrolló el lenguaje JavaScript?');
				var respuesta1 = "pong";
				var respuesta2 = "2010";
			  	var respuesta3 = "brendan eich";

				if (pregunta1 == respuesta1) {
		    		aciertos3++;
				}
				if(pregunta2 == respuesta2){
		    		aciertos3++;
				}
				if(pregunta3 == respuesta3){
		    		aciertos3++;
				}
				if(confirm("Desea seguir jugando?")){
					document.getElementsByClassName('categoria_tres_r')[0].innerHTML = "ACIERTOS: "+aciertos3;
					preguntas();
				}else{
					alert("adios");
					document.getElementById('btn_play').style.display="block";
					document.getElementsByClassName('categoria_tres_r')[0].innerHTML = "ACIERTOS: "+aciertos3;
				}
				break;
			case('4'):
				var pregunta1 = prompt('¿La película "The Shape of water" la forma del agua, ganó el Oscar el 2017?');
				var pregunta2 = prompt('¿Fue Jhony Deep el actor protagonista en la película Moonligh');
				var pregunta3 = prompt('¿Es Birdman una película del género Comedia dramática');
				var respuesta1 = "si";
				var respuesta2 = "no";
				var respuesta3 = "si";

				if (pregunta1 == respuesta1) {
		    		aciertos4++;
				}
				if(pregunta2 == respuesta2){
		    		aciertos4++;
				}
				if(pregunta3 == respuesta3){
		    		aciertos4++;
				}
				if(confirm("Desea seguir jugando?")){
					document.getElementsByClassName('categoria_cuatro_r')[0].innerHTML = "ACIERTOS: "+aciertos4;
					preguntas();
				}else{
					alert("adios");
					document.getElementById('btn_play').style.display="block";
					document.getElementsByClassName('categoria_cuatro_r')[0].innerHTML = "ACIERTOS: "+aciertos4;
				}
				break;
			case(null):
				document.getElementById('btn_play').style.display="block";
				console.log('caso nada');
				return false;

				break;
			default:
	    			alert('Por favor ingresar Categoria válida');
				preguntas();
		}
		
	}

