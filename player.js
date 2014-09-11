function Player(origineX,origineY,nomJoueur){
	this.x = OrigineX;
	this.y = OrigineY;
	this.nom =NomJoueur;
	this.direction=2; //1=haut 2=droite 3=bas 4=gauche
	this.poseBombeMax=5;
	this.bombePose=0;
	this.mP=5;

	this.haut=function(){
		this.x=this.x-this.mP;
	}
	this.bas=function(){
		this.x=this.x+this.mP;
	}
	this.gauche=function(){
		this.y=this.y-this.mP;
	}
	this.droite=function(){
		this.y=this.y+this.mP;
	}
	this.poserUneBombe=function(){
		var bombe=null;
		switch(this.direction){
			case Direction.droite:
				bombe=new Bombe(Math.floor((this.x+20)/20),Math.floor(this.y/20),this);
			break;
			case Direction.gauche:
				bombe=new Bombe(Math.floor((this.x-20)/20),Math.floor(this.y/20),this);
			break;
			case Direction.haut:
				bombe=new Bombe(Math.floor(this.x/20),Math.floor((this.y-20)/20),this);
			break;
			case Direction.bas:
				bombe=new Bombe(Math.floor(this.x/20),Math.floor((this.y+20)/20),this);
			break;
		}
		return bombe;
	}

}
var Direction={
	haut:1,
	droite:2,
	bas:3,
	gauche:4
};