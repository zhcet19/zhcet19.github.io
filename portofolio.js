
var x = document.getElementById("lead");
var isBlue=false;
setInterval(function(){
	if(isBlue)
	{
		x.style.color="red";
	}
	else{
		x.style.color="blue";
	}
isBlue=!isBlue;
},1000)