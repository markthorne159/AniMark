var CVS = document.getElementById("Main");

var PageContent = 

var Text = [" ","Line1"];
var y = 70

var ctx = CVS.getContext("2d");
ctx.fillStyle = "#EDEDED";
ctx.fillRect(0,0,700,3000);
ctx.fillStyle = "#000000";
ctx.font = "30px Verdana";
ctx.fillText("Getting started with GameMaker",10,30);
ctx.fillRect(10,40,500,5);
ctx.font = "15px Arial";
for(i = 0; i < Text.length; i++){
ctx.fillText(Text[i],10,y);
y +=30;
}

console.log($(window).height());
