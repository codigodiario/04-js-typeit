// A $( document ).ready() block.
$( document ).ready(function() {
	// Navbar
	$('#myTabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});

	//Texto simple en una línea
	$('#ejemplo1').typeIt();
	$('#button1').click(function () {
		$('#ejemplo1').typeIt();
	}); 

	//Texto simple con un enter y en varias líneas
	$('#button2').click(function () {
		$('#ejemplo2').typeIt({
	     strings: ["Esto es una línea de texto", "Se puede escribir en más de una línea."],
	     speed: 50
		}); 
	});

	//Texto que se escribe y se borra para ser reemplazado por otro
	$('#button3').click(function () {
		$('#ejemplo3').typeIt({
		     strings: ["Texto que se escribe para ser...", "borrado y reemplazado por otro texto!"],
		     speed: 50,
		     breakLines: false
		});
	});


	//Texto con markups htm
	$('#button4').click(function () {
		$('#ejemplo4').typeIt({
	     strings: ["Se pueden personalizar como queramos <span class='just-a-class'>, yuhuu!</span> &spades; &hearts; &clubs; &diams;"],
	     speed: 100 });
	});


    

   
 });

		
