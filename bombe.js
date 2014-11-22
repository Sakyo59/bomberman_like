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

		zone.push([]);
		for(var i=1 ; i <= this.porte ; i++ ){
			zone[zone.length-1].push(new Case(this.x + i, this.y));
		}
		zone.push([]);
		for(var i=1 ; i<= this.porte ; i++){
			zone[zone.length-1].push(new Case(this.x - i, this.y));
		}
		zone.push([]);
		for(var i=1 ; i<= this.porte ; i++){
			zone[zone.length-1].push(new Case(this.x, this.y + i));
		}
		zone.push([]);
		for(var i=1 ; i<= this.porte ; i++){
			zone[zone.length-1].push(new Case(this.x, this.y - i));
		}
		return new Explosion(zone);
	}
}