function Controller(toucheHaut, toucheBas, toucheDroite, toucheGauche, toucheAction){
	this.haut = false;
	this.bas = false;
	this.droite = false;
	this.gauche = false;
	this.bombe = false;

	this.inputHaut = toucheHaut;
	this.inputBas = toucheBas;
	this.inputGauche = toucheGauche;
	this.inputDroite = toucheDroite;
	this.inputBombe = toucheAction;

	this.event = {};
	this.event.keyDown = function(e){
		console.log(e.keyCode);
		console.log(this.inputDroite);
		console.log(e.keyCode==39);
		if(e.keyCode == this.inputHaut){
			this.haut = true;
			this.bas = false;
			this.droite = false;
			this.gauche = false;
		}
		else if(e.keyCode == 39){
			console.log("droite");
			this.haut = false;
			this.bas = false;
			this.droite = true;
			this.gauche = false;
			console.log(this.droite);
		}
		else if(e.keyCode == this.inputGauche){
			this.haut = false;
			this.bas = false;
			this.droite = false;
			this.gauche = true;
		}
		else if(e.keyCode == this.inputBas){
			this.haut = false;
			this.bas = true;
			this.droite = false;
			this.gauche = false;
		}

		if(e.keyCode == this.inputBombe){
			this.bombe = true;
		}
	}

	this.event.keyUp = function(e){
		if(e.keyCode == this.inputHaut){
			this.haut = false;
		}
		if(e.keyCode == this.inputBas){
			this.bas = false;
		}
		if(e.keyCode == this.inputGauche){
			this.gauche = false;
		}
		if(e.keyCode == this.inputDroite){
			this.droite = false;
		}
		if(e.keyCode == this.inputBombe){
			this.bombe = false;
		}
	}
}