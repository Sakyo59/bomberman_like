function init (zoneDeJeu) {
	var context=zoneDeJeu.getContext('2d');
	context.canvas.width=300;
	context.canvas.height=300;
	var terrain=new Terrain();
	terrain.loadMap(mapPlan);
	var joueur=new Player(20,20,"P1");
	var controle=new Controller(38,40,39,37,32);

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

}