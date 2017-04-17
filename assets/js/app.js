

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementsByClassName('imagen');
	console.log(img);
	var longitud=img.length;
	console.log(longitud)
	for(var i=0;i<longitud; i++){
		img[i].addEventListener( 'click', openModal);
	}
	function openModal(){
		console.log("clic")
		document.getElementById('myModal').style.display="block";

		document.getElementById("imagensota").src= this.src;	
	}
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
		document.getElementById("myModal").style.display = "none";
	}