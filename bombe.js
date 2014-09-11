function Bombe(bombeX, bombeY, proprio){
	this.x = bombeX;
	this.y = bombeY;
	this.proprietaire =  proprio
	this.porte = 3;
	this.timer = 0;
	this.timerBeforeEplosion = 120;

	this.explose = function(){
		var zone = [];
		zone.push(new Case(this.x, this.y));

		for(var i = 1; i <= porte ; i++){
			zone.push(this.x + i, this.y);
			zone.push(this.x - i; this.y);
			zone.push(this.x, this.y + i);
			zone.push(this.x, this.y - i);
		}

		return zone;
	}
}