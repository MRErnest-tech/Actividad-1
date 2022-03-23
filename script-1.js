var img = document.getElementById("imagen");
var fotoImage1 = document.getElementById("gatito");
var fotoImage2 = document.getElementById("gatote");

fotoImage1.onclick = function(){
    img.src = "img/image-1.jpeg";
    document.getElementById("card").style.background = "linear-gradient(90deg, #c5a609, #fcd926, #ffe149)";
}

fotoImage2.onclick = function(){
    img.src = "img/image-2.jpeg";
    document.getElementById("card").style.background = "linear-gradient(90deg, #298b02, #3acf00, #68ff2d)";
}
