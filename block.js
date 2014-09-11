function Block(unbreakable,hitBoforeBreak){
	this.unbreakable=unbreakable;//booleen
	this.pv=hitBoforeBreak;

		this.takeDommage=function(degatSubis){
			if(unbreakable==false){
				this.pv=this.pv-degatSubis;
			}
		}
}
	