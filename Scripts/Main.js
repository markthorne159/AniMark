function Load(Id){
	if(Id == "OpE"){
		e = document.getElementById(Id);
		e.style.color = "blue";
		console.log("OpE clicked!");
		location.replace("https://markthorne159.github.io/AniMark/ProgrammingDict/index.html");
	}
	else {
		console.log("Different option.");
	}
}

//Change the colour of the element back to normal when mouse is released.
function MainColour(Id){
	e = document.getElementById(Id);
		e.style.color = "white";
}
