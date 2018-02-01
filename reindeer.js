var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var myNewColor = "";
for (var i = 0; i < reindeer.length; i++) {
     myNewColor += colors[i] + " : " + reindeer[i] + "<br>";
 console.log("hii");
}
 myNewColor = document.getElementById("reindeer").innerHTML= myNewColor;
