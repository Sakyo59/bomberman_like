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

	for(rows in terrain.map){
		for(cell in terrain.map[rows]){
			if(terrain.map[rows][cell].contenue != null){
				if(typeof(terrain.map[rows][cell].contenue.unbreakable)=="undefined"){
					terrain.map[rows][cell].contenue.timer++;

					if(terrain.map[rows][cell].contenue.timer == terrain.map[rows][cell].contenue.timerBeforeEplosion){
						terrain.explosion.push(terrain.map[rows][cell].contenue.explose());
						for(index in terrain.explosion[terrain.explosion.length - 1].aoe){
							if(Array.isArray(terrain.explosion[terrain.explosion.length - 1].aoe[index])){
								for(indexRow in terrain.explosion[terrain.explosion.length - 1].aoe[index]){
									if(Math.floor(joueur.x/20)==terrain.explosion[terrain.explosion.length - 1].aoe[index][indexRow].x && Math.floor(joueur.y/20)==terrain.explosion[terrain.explosion.length - 1].aoe[index][indexRow].y){
										alert("Vous êtes mort =D");
									}
									if(terrain.explosion[terrain.explosion.length - 1].aoe[index][indexRow].y >= 0 && terrain.explosion[terrain.explosion.length - 1].aoe[index][indexRow].y <= terrain.map.length - 1 && terrain.explosion[terrain.explosion.length - 1].aoe[index][indexRow].x>=0 && terrain.explosion[terrain.explosion.length - 1].aoe[index][indexRow].x<= terrain.map[terrain.explosion[terrain.explosion.length - 1].aoe[index][indexRow].y].length -1 && terrain.map[terrain.explosion[terrain.explosion.length - 1].aoe[index][indexRow].y][terrain.explosion[terrain.explosion.length - 1].aoe[index][indexRow].x].contenue != null){
										if (terrain.map[terrain.explosion[terrain.explosion.length - 1].aoe[index][indexRow].y][terrain.explosion[terrain.explosion.length - 1].aoe[index][indexRow].x].contenue.unbreakable==false) {
											terrain.map[terrain.explosion[terrain.explosion.length - 1].aoe[index][indexRow].y][terrain.explosion[terrain.explosion.length - 1].aoe[index][indexRow].x].contenue=null;
										}
										else{
											break;
										}
									}
								}
							}
							else{
								if(Math.floor(joueur.x/20)==terrain.explosion[terrain.explosion.length - 1].aoe[index].x && Math.floor(joueur.y/20)==terrain.explosion[terrain.explosion.length - 1].aoe[index].y){
									alert("Vous êtes mort =D");
								}
								if(terrain.explosion[terrain.explosion.length - 1].aoe[index].y >= 0 && terrain.explosion[terrain.explosion.length - 1].aoe[index].y <= terrain.map.length - 1 && terrain.explosion[terrain.explosion.length - 1].aoe[index].x>=0 && terrain.explosion[terrain.explosion.length - 1].aoe[index].x<= terrain.map[terrain.explosion[terrain.explosion.length - 1].aoe[index].y].length -1 && terrain.map[terrain.explosion[terrain.explosion.length - 1].aoe[index].y][terrain.explosion[terrain.explosion.length - 1].aoe[index].x].contenue != null && terrain.map[terrain.explosion[terrain.explosion.length - 1].aoe[index].y][terrain.explosion[terrain.explosion.length - 1].aoe[index].x].contenue.unbreakable==false){
									terrain.map[terrain.explosion[terrain.explosion.length - 1].aoe[index].y][terrain.explosion[terrain.explosion.length - 1].aoe[index].x].contenue=null;
								}
							}





							
						}
						terrain.map[rows][cell].contenue = null;
					}
				}
			}
		}
	}




	dessiner.clearContext();
	for(rows in terrain.map){
		for(cell in terrain.map[rows]){
			if(terrain.map[rows][cell].contenue != null){
				if(typeof(terrain.map[rows][cell].contenue.unbreakable)=="undefined"){
					dessiner.bombe(terrain.map[rows][cell].contenue);
				}
				else{
					dessiner.block(terrain.map[rows][cell].contenue,terrain.map[rows][cell].x,terrain.map[rows][cell].y);
				}
			}
			else{
				dessiner.vide(terrain.map[rows][cell]);
			}
		}
		dessiner.joueur(joueur);
	}
}