var map = new Map("seconde");

var player = new Character("actor.png", 100, 50, 1);
map.addCharacter(player);

window.onload = function() {
 var canvas = document.getElementById('canvas');
 var ctx = canvas.getContext('2d');
 
 canvas.width  = (map.getWidth() - 1) * 64;
 canvas.height = (map.getHeight() - 3) * 16;

 setInterval(function() {
  map.drawMap(ctx);
 }, 40);
 
 // Gestion du clavier
 window.onkeydown = function(event) {
	  // On récupère le code de la touche
	  var e = event || window.event;
	  var key = e.which || e.keyCode;
	  
	  switch(key) {
	   case 38 : case 122 : case 119 : case 90 : case 87 :
	    player.keyDown(DIRECTION.U);
	    break;
	   case 40 : case 115 : case 83 :
	    player.keyDown(DIRECTION.D);
	    break;
	   case 37 : case 113 : case 97 : case 81 : case 65 :
	    player.keyDown(DIRECTION.L);
	    break;
	   case 39 : case 100 : case 68 :
	    player.keyDown(DIRECTION.R);
	    break;
	   default : 
	    return true;
	  }
	  
	  return false;
	 }
 
 window.onkeyup = function(event) {
	  // On récupère le code de la touche
	  var e = event || window.event;
	  var key = e.which || e.keyCode;
	  
	  switch(key) {
	   case 38 : case 122 : case 119 : case 90 : case 87 :
	    player.keyUp(DIRECTION.U);
	    break;
	   case 40 : case 115 : case 83 :
	    player.keyUp(DIRECTION.D);
	    break;
	   case 37 : case 113 : case 97 : case 81 : case 65 :
	    player.keyUp(DIRECTION.L);
	    break;
	   case 39 : case 100 : case 68 :
	    player.keyUp(DIRECTION.R);
	    break;
	   default : 
	    return true;
	  }
	  
	  return false;
	 }
}