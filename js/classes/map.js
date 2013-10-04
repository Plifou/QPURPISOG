function Map(names) {
	var xmlHttpRequest = getXMLHttpRequest();
	xmlHttpRequest.open("GET", './maps/' + names + '.json', false);
	xmlHttpRequest.send(null);
	if(xmlHttpRequest.readyState != 4 || (xmlHttpRequest.status != 200 && xmlHttpRequest.status != 0)) // Code == 0 local
		throw new Error("Impossible to load map \"" + names + "\" ( HTTP code : " + xmlHttpRequest.status + ").");
	var mapJsonData = xmlHttpRequest.responseText;
	var mapData = JSON.parse(mapJsonData);
	this.tileset = new Tileset(mapData.tileset);
	this.terrain = mapData.terrain;
	this.characters = new Array();
}

Map.prototype.getHeight = function() {
	return this.terrain[0].length;
}
Map.prototype.getWidth = function() {
	return this.terrain[0][0].length;
}

Map.prototype.addCharacter = function(character) {
	this.characters.push(character);
}

Map.prototype.drawMap = function (context) {
    for(var currentFloorMap = 0, floorMap = this.terrain.length; currentFloorMap < floorMap; currentFloorMap++) {
        for(var currentNumLine = 0, numLine = this.terrain[currentFloorMap].length; currentNumLine < numLine; currentNumLine++) {
            var line = this.terrain[currentFloorMap][currentNumLine];
            var height = currentNumLine * 16 - 48 - (currentFloorMap * 32);
            for(var currentNumColumn = 0, numColumn = line.length; currentNumColumn < numColumn; currentNumColumn++) {
                if(currentNumLine % 2 == 0) {
                    this.tileset.dessinerTile(line[currentNumColumn], context, currentNumColumn * 64 - 32, height);
                } else {
                    this.tileset.dessinerTile(line[currentNumColumn], context, currentNumColumn * 64, height);
                }
            }
        }
    }
	for(var i = 0, l = this.characters.length ; i < l ; i++) {
		this.characters[i].dessinerPersonnage(context);
	}
}















