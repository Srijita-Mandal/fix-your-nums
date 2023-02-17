var icon = document.getElementById("icon");
	icon.onclick = function(){
		document.body.classList.toggle("dark-mode");
		if (document.body.classList.contains("dark-mode")){
			icon.src="Image/sun.png";
		}
		else {
			icon.src="Image/moon.png";
		}
	}



