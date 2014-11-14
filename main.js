var context;
var terrain;
var joueur;
var controle;
var dessiner;

function init (zoneDeJeu) {
	context=zoneDeJeu.getContext('2d');
	context.canvas.width=300;
	context.canvas.height=300;
	terrain=new Terrain();
	terrain.loadMap(mapPlan);
	joueur=new Player(20,20,"P1");
	controle=new Controller(38,40,39,37,32);
	controle.inputDroite=39;
	dessiner=new Dessiner(context);

	document.addEventListener('keydown', function(e){
		controle.keyDown(e);
	}, false);
	document.addEventListener('keyup', function(e){
		controle.keyUp(e);
	}, false);

	var time = setInterval(function(){
		loop();
	},50/3);
}

function loop(){
	if(controle.haut==true && joueur.y>0){
		joueur.haut();
	}
	else if(controle.bas==true && joueur.y<context.canvas.height-20){
		joueur.bas();
	}
	else if(controle.gauche==true && joueur.x>0){
		joueur.gauche();
	}
	else if(controle.droite==true && joueur.x<context.canvas.width-20){
		joueur.droite(); 	
	}
	dessiner.clearContext();
	for(rows in terrain.map){
		for(cell in rows){
			if(cell.contenue != null){
				dessiner.block(cell.contenue,cell.x,cell.y);
			}
			else{
				dessiner.vide(cell);
			}
		}
		dessiner.joueur(joueur);
	}
}