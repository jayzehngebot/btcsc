function sc(dollars,tHash,marketCap,goldinGrams,energy){

	var satoshiX = 0;
	var satoshiY = 0;

	var btcscMasterDrone = new Drone(satoshiX,satoshiY);
	this.chkpt('satoshiPoint');


	// render dollar stacks
	// width / height / depth / locX / locY 
	dol(marketCap);
	this.move('satoshiPoint');

	// render gpus
	gpu(tHash);
	this.move('satoshiPoint');

//gold(priceGramGoldUSD,marketCapBTC)
	gold(goldinGrams,marketCap);
	this.move('satoshiPoint');

	piz(dollars);
	this.move('satoshiPoint');

	coal(energy);
	return this.move('satoshiPoint');



};

load("../drone/drone.js");
Drone.extend('sc',sc);

