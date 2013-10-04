var DIRECTION = {
	"D"	: 0,
	"L"	: 1,
	"R"	: 2,
	"U"	: 3,
	"DL"	: 4,
	"DR"	: 5,
	"UL"	: 6,
	"UR"	: 7,
	"NUL"	: -1
};

function Character(url, x, y, z) {
	this.x = x; // (in px)
	this.y = y; // (in px)
	this.z = z; // (in level)
	this.direction = DIRECTION.NUL;
	this.previousDirection = DIRECTION.D;
	this.currentFrame = 0;
	
	// Chargement de l'image dans l'attribut image
	this.image = new Image();
	this.image.reference = this;
	this.image.onload = function() {
		if(!this.complete) 
			throw "Erreur de chargement du sprite nommé \"" + url + "\".";
		
		// Taille du personnage
		this.reference.width = this.width / 6;
		this.reference.height = this.height / 8;
	}
	this.image.src = "sprites/" + url;
}

Character.prototype.getHeight = function() {
	
	return this.height;
}


Character.prototype.newCoord = function(map) {

	switch(this.direction){
	
		case DIRECTION.U:
			if(this.y > 0) {
				this.y -= 1;
			}
			break;
	
		case DIRECTION.D:
			if(this.y < map.getPxHeight()) {
				this.y += 1;
			}
			break;
	
		case DIRECTION.L:
			if(this.x > 0) {
				this.x -= 1;
			}
			break;
	
		case DIRECTION.R:
			if(this.x < map.getPxWidth()) {
				this.x += 1;
			}
			break;
			
		case DIRECTION.UR:
			if(this.y > 0) {
				if (this.x < map.getPxWidth()) {
					this.x += 1;
					this.y -= 1;
				}
				else {
					this.y -= 1;
				}
			}
			else if (this.x < map.getPxWidth()) {
				this.x += 1;
			}
			break;
	
		case DIRECTION.UL:
			if(this.y > 0) {
				if (this.x > 0) {
					this.x -= 1;
					this.y -= 1;
				}
				else {
					this.y -= 1;
				}
			}
			else if (this.x > 0) {
				this.x -= 1;
			}
			break;
	
		case DIRECTION.DR:
			if(this.y < map.getPxHeight()) {
				if (this.x < map.getPxWidth()) {
					this.x += 1;
					this.y += 1;
				}
				else {
					this.y += 1;
				}
			}
			else if (this.x < map.getPxWidth()) {
				this.x += 1;
			}
			break;
	
		case DIRECTION.DL:
			if(this.y < map.getPxHeight()) {
				if (this.x > 0) {
					this.x -= 1;
					this.y += 1;
				}
				else {
					this.y += 1;
				}
			}
			else if (this.x >0) {
				this.x -= 1;
			}
			break;
		}
}


Character.prototype.drawCharacter = function(context,map) {
	
	if (this.direction != DIRECTION.NUL) {
		if (this.currentFrame == 5) {
			this.currentFrame = 0;
		}
		else {
			this.currentFrame++;
		}
		this.newCoord(map);
		var directionToUse = this.direction;
	}
	else {
		var directionToUse = this.previousDirection;
	}
	context.drawImage(
		this.image, 
		this.width * this.currentFrame, directionToUse * this.height, // Point d'origine du rectangle source à prendre dans notre image
		this.width, this.height, // Taille du rectangle source (c'est la taille du personnage)
		// Point de destination (dépend de la taille du personnage)
		this.x, this.y,
		this.width, this.height // Taille du rectangle destination (c'est la taille du personnage)
	);
}


Character.prototype.keyDown = function(direction) {

	switch(direction) {

	case DIRECTION.U:
		if(this.direction == DIRECTION.R) {
			this.direction = DIRECTION.UR;
		}
		else if(this.direction == DIRECTION.L) {
			this.direction = DIRECTION.UL;
		}
		else {
			this.direction = DIRECTION.U;
		}
		break;

	case DIRECTION.D:
		if(this.direction == DIRECTION.R) {
			this.direction = DIRECTION.DR;
		}
		else if(this.direction == DIRECTION.L) {
			this.direction = DIRECTION.DL;
		}
		else {
			this.direction = DIRECTION.D;
		}
		break;

	case DIRECTION.L:
		if(this.direction == DIRECTION.D) {
			this.direction = DIRECTION.DL;
		}
		else if(this.direction == DIRECTION.U) {
			this.direction = DIRECTION.UL;
		}
		else {
			this.direction = DIRECTION.L;
		}
		break;

	case DIRECTION.R:
		if(this.direction == DIRECTION.U) {
			this.direction = DIRECTION.UR;
		}
		else if(this.direction == DIRECTION.D) {
			this.direction = DIRECTION.DR;
		}
		else {
			this.direction = DIRECTION.R;
		}
		break;
	}
}

Character.prototype.keyUp = function(direction) {

	switch(direction) {

	case DIRECTION.U:
		if(this.direction == DIRECTION.U) {
			this.previousDirection = this.direction;
			this.direction = DIRECTION.NUL;
			this.currentFrame = 0;
		}
		else if(this.direction == DIRECTION.UR) {
			this.direction = DIRECTION.R;
		}
		else if(this.direction == DIRECTION.UL) {
			this.direction = DIRECTION.L;
		}
		break;

	case DIRECTION.D:
		if(this.direction == DIRECTION.D) {
			this.previousDirection = this.direction;
			this.direction = DIRECTION.NUL;
			this.currentFrame = 0;
		}
		else if(this.direction == DIRECTION.DR) {
			this.direction = DIRECTION.R;
		}
		else if(this.direction == DIRECTION.DL) {
			this.direction = DIRECTION.L;
		}
		break;

	case DIRECTION.L:
		if(this.direction == DIRECTION.L) {
			this.previousDirection = this.direction;
			this.direction = DIRECTION.NUL;
			this.currentFrame = 0;
		}
		else if(this.direction == DIRECTION.DL) {
			this.direction = DIRECTION.D;
		}
		else if(this.direction == DIRECTION.UL) {
			this.direction = DIRECTION.U;
		}
		break;

	case DIRECTION.R:
		if(this.direction == DIRECTION.R) {
			this.previousDirection = this.direction;
			this.direction = DIRECTION.NUL;
			this.currentFrame = 0;
		}
		else if(this.direction == DIRECTION.UR) {
			this.direction = DIRECTION.U;
		}
		else if(this.direction == DIRECTION.DR) {
			this.direction = DIRECTION.D;
		}
		break;

	}

}