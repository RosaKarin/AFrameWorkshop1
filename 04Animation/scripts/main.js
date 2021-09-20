// // changing individual properties with code and using setInterval
 var rotationSpeed = 0.03;
 var myOtherBox = document.getElementById('myOtherBox');
 var myBox = document.getElementById('myBox');

 function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeed;
 	console.log(myOtherBox.object3D.rotation.x);
	 
	myOtherBox.object3D.rotation.y += rotationSpeed;
 	console.log(myOtherBox.object3D.rotation.y);
	 
	 myBox.object3D.rotation.x += rotationSpeed;
 	console.log(myBox.object3D.rotation.x);
	 
	myBox.object3D.rotation.y += rotationSpeed;
 	console.log(myBox.object3D.rotation.y);
 }

 setInterval(spin, 16); //equivalent to 60 fps
