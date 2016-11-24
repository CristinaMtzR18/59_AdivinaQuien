
$(document).ready(function(){
  //Para mi select
	$("select").material_select();
  //Variables para el select
  var randomMexico, valSedes;
  //Variable de puntaje
  var puntaje = 0;
  //Variable contar errores
  var contadorError = 0;
  //Mi arreglo de objetos alumnas que contiene el nombre de la fotografia y el nombre de la alumna
  var alumnasMexico = [{
              imagen: "adrianaGonzalez.jpg",
              name: "Adriana"
            },
            {
              imagen: "adrianaVenegas.jpg",
              name: "Adriana"
            },
            {
              imagen: "alejandraDuran.jpg",
              name: "Alejandra"
            },
            {
              imagen: "alejandraEscobar.jpg",
              name: "Alejandra"
            },
            {
              imagen: "anaIsola.jpg",
              name: "Isola"
            },
            {
              imagen: "anaPaola.jpg",
              name: "Paola"
            },
            {
              imagen: "berenice.jpg",
              name: "Berenice"
            },
            {
              imagen: "brenda.jpg",
              name: "Brenda"
            },
            {
              imagen: "claudia.jpg",
              name: "Claudia"
            },
            {
              imagen: "cristina.jpg",
              name: "Cristina"
            },
            {
              imagen: "flor.jpg",
              name: "Flor"
            },
            {
              imagen: "iana.jpg",
              name: "Iana"
            },
            {
              imagen: "irene.jpg",
              name: "Irene"
            },
            {
              imagen: "irma.jpg",
              name: "Irma"
            },
            {
              imagen: "isabel.jpg",
              name: "Isabel"
            },
            {
              imagen: "jacqueline.jpg",
              name: "Jacqueline"
            },
            {
              imagen: "karem.jpg",
              name: "Karem"
            },
            {
              imagen: "karen.jpg",
              name: "Karen"
            },
            {
              imagen: "lauraPaola.jpg",
              name: "Paola"
            },
            {
              imagen: "liliana.jpg",
              name: "Liliana"
            },
            {
              imagen: "linda.jpg",
              name: "Linda"
            },
            {
              imagen: "lizbeth.jpg",
              name: "Lizbeth"
            },
            {
              imagen: "carmen.jpg",
              name: "Carmen"
            },
            {
              imagen: "marianaDiaz.jpg",
              name: "Mariana"
            },
            {
              imagen: "marianaPacheco.jpg",
              name: "Mariana"
            },
            {
              imagen: "monica.jpg",
              name: "Monica"
            },
            {
              imagen: "montserrat.jpg",
              name: "Montserrat"
            },
            {
              imagen: "natasha.jpg",
              name: "Natasha"
            },
            {
              imagen: "nayeli.jpg",
              name: "Nayeli"
            },
            {
              imagen: "okaidy.jpg",
              name: "Okaidy"
            },
            {
              imagen: "oliva.jpg",
              name: "Oliva"
            },
            {
              imagen: "oriana.jpg",
              name: "Oriana"
            },
            {
              imagen: "sandra.jpg",
              name: "Sandra"
            },
            {
              imagen: "shantal.jpg",
              name: "Shan"
            },
            {
              imagen: "tania.jpg",
              name: "Tania"
            },
            {
              imagen: "valeria.jpg",
              name: "Valeria"
            },
            {
              imagen: "vannia.jpg",
              name: "Vannia"
            },
            {
              imagen: "variana.jpg",
              name: "Variana"
            },
            {
              imagen: "veronica.jpg",
              name: "Veronica"
            },
            {
              imagen: "yaredi.jpg",
              name: "Yaredi"
            },
            {
              imagen: "yasury.jpg",
              name: "Yasury"
            },
            {
              imagen: "yesenia.jpg",
              name: "Yesenia"
            }
            ];
  // Funcion para elegir una alumna al azar
  function obtenerAlumna(){
    randomMexico = Math.floor(Math.random() * alumnasMexico.length);
    return randomMexico;
  };
    //Primera alumna elegida
   var alumnaElegida = obtenerAlumna();

   //Primera alumana elegida
  $(".sedes").change(function() {
    valSedes = $(this).val();
      console.log(alumnaElegida); 
    //Muestra primera alumna
    if (valSedes=="valMexico") {
      //Entre a la opcion México
      console.log("Entre a México");
      $('.imgFoto').css({'background-image': "url('img/fotos/" + alumnasMexico[alumnaElegida].imagen + "')"});
      //Comprobacion de mi Alumna elegida
      console.log(alumnasMexico[alumnaElegida].imagen);
      console.log(alumnasMexico[alumnaElegida].name);
      //Si entro a Lima me dice que no hay nada
    }else if(valSedes=="valLima") {
      //Entre a la opcion de Lima
      console.log("Estoy en Lima");
      alert("No hay datos para esta sede");
    }
    
  });
  //Comprobacion de que la alumna elegida siga existiendo
  console.log("Indice del array: " + alumnaElegida);
  //Compruebo el nombre
  $("#btnComprobar").click(function(){
    //variable para comparar nombre del input
    var alumnaNombre = $("#boxNombre").val();
    //Inicia comparacion
    //*** Acierto ***
    if(alumnasMexico[alumnaElegida].name == alumnaNombre){
      console.log("Ando aquiiiii");
      //Sube el puntuaje
      puntaje += 5;
      //actualiza mi puntuaje
      $("#puntos").html(puntaje);
      //Escribo mi mensaje
      $("#mensajeJuego").html("Excelente Acertaste").fadeOut(2000);
      //Siguiente alumna
      alumnaElegida = obtenerAlumna();
      //comprobacion de la siguiente alumna
      console.log(alumnaElegida);
      console.log(alumnasMexico[alumnaElegida].name);
      //Carga nueva alumna
      $('.imgFoto').css({'background-image': "url('img/fotos/" + alumnasMexico[alumnaElegida].imagen + "')"});
      $("#boxNombre").val("");
    //*** Acierto ***
    }else{
      //cuento los errores
      contadorError ++;
      console.log(contadorError);
      //muestro mensaje
      $("#mensajeJuego").show();
      $("#mensajeJuego").html("Sigue intentando").fadeOut(2000);
      $("#boxNombre").val("");
      //Para descontar puntos es a los 5 errores
      if(contadorError == 5){
        //nueva alumna
        alumnaElegida = obtenerAlumna();
        //compruebo informaciond e la nueva alumna
        console.log(alumnaElegida);
        console.log(alumnasMexico[alumnaElegida].name);
        //cargo nueva fotografia
        $('.imgFoto').css({'background-image': "url('img/fotos/" + alumnasMexico[alumnaElegida].imagen + "')"});
        $("#boxNombre").val("");
        //Mensaje de cambio
        $("#mensajeJuego").show();
        $("#mensajeJuego").html("Cambio de Alumna").fadeOut(2000);
        $("#boxNombre").val("");
        //Reinicio mi contador de errores
        contadorError = 0;
        //Resto un punto
        puntaje += -1;
        $("#puntos").html(puntaje);
      }
    }
  });

  
});