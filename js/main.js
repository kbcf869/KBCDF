// JavaScript Document

//para iniciar la programacion en js, es necesario iniciar con el $ 


// .ready, dar enter,  function() sale en automatico, entre parentesis sale una letra e, quitarla
$(document).ready(function() {
	
	//INICIO DEL CODIGO DEL MENU DESPLEGABLE//
	$('#btnmenu').click(function(){
		if($('#btnmenu').attr('class')=='fa fa-bars'){
			
			$('#btnmenu').removeClass('fa fa-bars').addClass('fa fa-times');
			$('.navegacion .menu').css({'left':'0px'});
			
			
			$('.navegacion').css({'width':'100%','background':'rgba(0,0,0,0.3)'});
		}
		else{
			$('#btnmenu').removeClass('fa fa-times').addClass('fa fa-bars');
			$('.navegacion .menu').css({'left':'-320px'});
			$('.navegacion .submenu').css({'left':'-320px'});
			
			$('.navegacion').css({'width':'0%', 'background':'rgba(0,0,0,0.0)'});
			
		}
	});
	
	//sub menus 
	
	$('.navegacion .menu> .itemsubmenu a').click(function(){
		var posmenu=$(this).parent().attr('vmenu');
		$('.itemsubmenu[vmenu='+posmenu+'] .submenu').css({'left':'0px'});
		console.log(posmenu);
    });
	   $('.navegacion .submenu li.regresar').click(function(){
	$(this).parent().css({'left':'-320px'});
	   });

	
	//FIN DEL CODIGO DEL MENU DESPLEGABLE//
	
	/*NOTA: Las VARIABLES por lo general se guardan al inicio del codigo de la funcion o codigo general*/
	var numeroimagenes=$('.slider li').length; /*LENGTH es para contar los codigos en HTML entodas las imagenes en SLIDER LI*/ /*en esta variable se guarda el número de imagenes*/
	var imgpos=1;
	
	// Esta SINTAXIS DE ABAJO, FOR, en cada lenguaje de programacion es diferente, no es para todos, la instruccion el FOR
	 // CICLO FOR: da la instruccion para dar un tope a o limite.  FOR(i=1;  i<=5,  i++)2,3... ELIMINE LOS CUATRO LI, correspondientes A LOS PUNTITOS BAJO LA IMAGEN en HTML
	for(i=1;i<=numeroimagenes;i++)//FOR es cuando las acciones se hacen de forma consecutiva
	{
		$('.paginacion').append('<li><span class="fa fa-circle"></span></li>');
	}
	
	console.log(numeroimagenes);
	
	$ ('.slider li') .hide(); //aqui es para desaparecer cada una de las imagenes de la pagina web de htlm      HIDE() significa desaparecer
	$('.slider li:first').show(); // aqui es para aparecer en la pagina web, la primer imagen, abajo circulitos y las flechas
	
	
	// alert('funciona'); 
	
	 //aqui arriba,  ALERT es un comando, escribir FUNCIONA entre comillas simples, es para verificar que  JAVASCRIPT enlazo o esta vinculado correctamente con la pagina web o con HTML, al actualizar la pagina web da... ESTA PAGINA DICE       funciona         DESPUES DE BORRA LA PALABRA FUNCIONA. todo esto es abajo y despues de (function()
	 
	 $('.paginacion li:first').css({'color':'#F60'}); // es para cambiar el color a naranja, al primer punto bajo la imagen
	 
	 
	 
  //subtitulo... EJECUTAR FUNCIONES
  
  $('.paginacion li').click(paginacion); //esta VARIABLE es para los puntitos bajo la imagen
  $('.derecha span').click(siguienteimg); //esta es una VARIABLE para dar accion a la flecha derecha
  $('.izquierda span').click(anteriorimg); //esta es una VARIABLE para dar accion a la flecha izquierda
  //CON LAS INDICACIONES ANTERIORES SE
  
  setInterval (function(){ //es para que cada imagen cambie cada 4 segundos//
	  siguienteimg();
  },4000);
  
  //INSTRUCCIONES DE CADA FUNCION
  
  function paginacion() //FUNCTION es funcion PARA LOS PUNTOS
  {
	  var paginacionpos=$(this).index()+1; //los INDEX o POSICIONES que regresan una computadora, siempre en lenguajes de programacion inician desde cero. 
	  console.log(paginacionpos);
	  $('.slider li').hide();
	  $('.slider li:nth-child('+paginacionpos+')').fadeIn(); //FADE IN hace que aparezca gradualmente un elemento
	  $('.paginacion li').css({'color':'#858585'}); //este es el color fijo GRIS de los puntos
	  $(this).css({'color':'#c06e2e'});//este es el color fijo NARANJA de los puntos que cambia
  }
  
  function siguienteimg (){/*esta instruccion es para avanzar con las imagenes en las flechas*/
  if(imgpos>=numeroimagenes){
      imgpos=1; 
  }
	  else{
		     imgpos++;
	      }
		  
		  
		  $('.paginacion li').css({'color':'#858585'});
		  
		  $('.paginacion li:nth-child('+imgpos+')').css({'color':'#c06e2e'});
  
	  $('.slider li').hide();//aqui es para desaparecer cada una de las imagenes de la pagina web de htlm      HIDE() significa desaparecer
	  $('.slider li:nth-child('+imgpos+')').fadeIn(); //FADE IN hace que aparezca gradualmente un elemento
  }
  
   function anteriorimg (){
	 if( imgpos<=1)  {
	 imgpos<=numeroimagenes;
       
  } else {
		     imgpos--;
	      }
		  
		  
		  $('.paginacion li').css({'color':'#858585'});
		  
		  $('.paginacion li:nth-child('+imgpos+')').css({'color':'#c06e2e'});
  
	  $('.slider li').hide();//aqui es para desaparecer cada una de las imagenes de la pagina web de htlm      HIDE() significa desaparecer
	  $('.slider li:nth-child('+imgpos+')').fadeIn(); //FADE IN hace que aparezca gradualmente un elemento   
   }
   
  });