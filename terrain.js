function terrain(){
	this.map=[];

	this.loadMap=function(mapPlan){
		for(var indexY in mapPlan){
			this.map.push([]);
			for(var indexX in mapPLan[indexY]){
				switch(mapPlan[indexY][indexX]){
					case 0:
						this.map[this.map.length-1].push(new Case(indexX, indexY, new Block(true, 1)));
						break;
					case 1:
						this.map[this.map.length-1].push(new Case(indexX, indexY, new Block(false, 1)));
						break;
					case 2:
						this.map[this.map.length-1].push(new Case(indexX, indexY, new Block(false, 2)));
						break;
					case 3:
						this.map[this.map.length-1].push(new Case(indexX, indexY, new Block(false, 3)));
						break;
					case 4:
						this.map[this.map.length-1].push(new Case(indexX, indexY, new Block(false, 4)));
						break;
					case 5:
						this.map[this.map.length-1].push(new Case(indexX, indexY, new Block(false, 5)));
						break;
					case 6:
						this.map[this.map.length-1].push(new Case(indexX, indexY, new Block(false, 6)));
						break;
					case 7:
						this.map[this.map.length-1].push(new Case(indexX, indexY, new Block(false, 7)));
						break;
					case 8:
						this.map[this.map.length-1].push(new Case(indexX, indexY, new Block(false, 8)));
						break;
					case 9:
						this.map[this.map.length-1].push(new Case(indexX, indexY, new Block(false, 9)));
						break;
					case "n":
						this.map[this.map.length-1].push(new Case(indexX, indexY,null));
						break;
					case "a":
						this.map[this.map.length-1].push(new Case(indexX, indexY,null));
						break;
					case "b":
						this.map[this.map.length-1].push(new Case(indexX, indexY,null));
						break;
					case"c":
						this.map[this.map.length-1].push(new Case(indexX, indexY,null));
						break;
					case"d":
						this.map[this.map.length-1].push(new Case(indexX, indexY,null));
						break;
					case "x":
						this.map[this.map.length-1].push(new Case(indexX, indexY,null));
						break;
					case"y":
						this.map[this.map.length-1].push(new Case(indexX, indexY,null));
						break;
					case"z":
						this.map[this.map.length-1].push(new Case(indexX, indexY,null));
						break;
					default:
						this.map[this.map.length-1].push(new Case(indexX, indexY,null));
						break;
				}
			}
		}
	}
}