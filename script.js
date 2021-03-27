function menu(){
	document.getElementById("menuopen").classList.toggle("active");
	document.getElementById("menu").classList.toggle("active");
	document.getElementById("menuclose").classList.toggle("active");
}

for(let i=0;i<document.getElementsByClassName("menuheader").length;i++){
	document.getElementsByClassName("menuheader")[i].addEventListener("click",function(){
		for(let m=0;m<document.getElementsByClassName("submenu").length;m++){
			document.getElementsByClassName("submenu")[m].classList.remove("active");
		}
		document.getElementsByClassName("submenu")[i].classList.add("active");
	})
}