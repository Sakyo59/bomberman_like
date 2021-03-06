function Dessiner(context){
	this.ctx=context;
	var unbreakableBlock=new Image();
	unbreakableBlock.src="bloc-incassable.png";
	var breakableBlock=new Image();
	breakableBlock.src="bloc-cassable.png";
	this.joueur=function(player){
		context.beginPath();
		context.fillStyle="rgb(0,0,255)";
		context.fillRect(player.x,player.y,15,15);
		context.closePath();
	}
	this.block=function(block,x,y){
		context.beginPath();
		if(block.unbreakable){
			context.drawImage(unbreakableBlock,x*20,y*20,20,20);
		}
		else{
			context.drawImage(breakableBlock,x*20,y*20,20,20);
		}

		context.closePath();
	}
	this.vide=function(cellule){
		context.beginPath();
		context.fillStyle="rgb(51,153,0)";
		context.fillRect(cellule.x*20,cellule.y*20,20,20);
		context.closePath();
	}
	this.bombe=function(bombe){
		context.beginPath();
		context.fillStyle="rgb(204,0,0)";
		context.fillRect(bombe.x*20,bombe.y*20,20,20);
		context.closePath();
	}
	this.clearContext=function(){
		context.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
	}
}