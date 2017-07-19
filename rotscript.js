
	
	
		document.getElementById("buttonidC").onclick=function(){
		var a = document.getElementById("numCube").value;
		var b = (2*a) + "s";
		
		document.getElementById("cube").style.animation='spin infinite linear';
		document.getElementById("cube").style.animationDuration = b;
		}

        document.getElementById("buttonidC1").onclick=function(){
		var a = document.getElementById("numCube").value;
		var b = (2*a) + "s";
		
		document.getElementById("cube").style.animation='spin1 infinite linear';
		document.getElementById("cube").style.animationDuration = b;
		}

		document.getElementById("buttonidC2").onclick=function(){
		var a = document.getElementById("numCube").value;
		var b = (2*a) + "s";
		
		document.getElementById("cube").style.animation='spin2 infinite linear';
		document.getElementById("cube").style.animationDuration = b;
		}

		document.getElementById("buttonidC3").onclick=function(){
		document.getElementById("cube").style.animation='spin2 infinite linear';
		document.getElementById("cube").style.animationDuration = 0;
		}

		
			document.getElementById("buttonidS").onclick=function(){
		var m = document.getElementById("numSphere").value;
		var n = (2*m) + "s";
		
		document.getElementById("earth").style.animation='rotate infinite linear';
		document.getElementById("earth").style.animationDuration = n;
		}

		document.getElementById("buttonidS1").onclick=function(){
		var m = document.getElementById("numSphere").value;
		var n = (2*m) + "s";
		
		document.getElementById("earth").style.animation='rotate1 infinite linear';
		document.getElementById("earth").style.animationDuration = n;
		}

		document.getElementById("buttonidS2").onclick=function(){
		var m = document.getElementById("numSphere").value;
		var n = (2*m) + "s";
		
		document.getElementById("earth").style.animation='rotate2 infinite linear';
		document.getElementById("earth").style.animationDuration = n;
		}

		document.getElementById("buttonidS3").onclick=function(){
		document.getElementById("earth").style.animation='rotate2 infinite linear';
		document.getElementById("earth").style.animationDuration = 0;
		}

	