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
	dessiner=new Dessiner(context);

	document.addEventListener('keyDown', function(e){
		controle.event.keyDown(e);
	}, false);
	document.addEventListener('keyUp', function(e){
		controle.event.keyUp(e);
	}, false);

	var time = setInterval(function(){
		loop();
	},50/3);
}

function loop(){
	if(controle.haut==true){
		joueur.haut;
	}
	else if(controle.bas==true){
		joueur.bas;
	}
	else if(controle.gauche==true){
		joueur.gauche;
	}
	else if(controle.droite==true){
		joueur.droite;
	}
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