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
	if(controle.haut==true && joueur.y>0 && terrain.map[Math.floor((joueur.y-joueur.mP)/20)][Math.floor(joueur.x/20)].contenue === null && terrain.map[Math.floor((joueur.y-joueur.mP)/20)][Math.floor((joueur.x+15)/20)].contenue === null){
		joueur.haut();
	}
	else if(controle.bas==true && joueur.y<context.canvas.height-20 && terrain.map[Math.floor((joueur.y+15+joueur.mP)/20)][Math.floor(joueur.x/20)].contenue === null && terrain.map[Math.floor((joueur.y+15+joueur.mP)/20)][Math.floor((joueur.x+15)/20)].contenue === null ){
		joueur.bas();
	}
	else if(controle.gauche==true && joueur.x>0 && terrain.map[Math.floor(joueur.y/20)][Math.floor((joueur.x-joueur.mP)/20)].contenue === null && terrain.map[Math.floor((joueur.y+15)/20)][Math.floor((joueur.x-joueur.mP)/20)].contenue === null){
		joueur.gauche();
	}
	else if(controle.droite==true && joueur.x<context.canvas.width-20 && terrain.map[Math.floor((joueur.y)/20)][Math.floor((joueur.x+15+joueur.mP)/20)].contenue === null && terrain.map[Math.floor((joueur.y+15)/20)][Math.floor((joueur.x+15+joueur.mP)/20)].contenue === null){
		joueur.droite(); 	
	}
	if(controle.bombe==true){
		var bombe=joueur.poserUneBombe();
		if(terrain.map[bombe.y][bombe.x].contenue==null){
			terrain.map[bombe.y][bombe.x].contenue=bombe;	
		}

	}
	dessiner.clearContext();
	for(rows in terrain.map){
		for(cell in terrain.map[rows]){
			if(terrain.map[rows][cell].contenue != null){
				dessiner.block(terrain.map[rows][cell].contenue,terrain.map[rows][cell].x,terrain.map[rows][cell].y);
			}
			else{
				dessiner.vide(terrain.map[rows][cell]);
			}
		}
		dessiner.joueur(joueur);
	}
}