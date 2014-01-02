function gold(priceGramGoldUSD,marketCapBTC) // 
{

    // one m^3 of gold is 42509.53lb
    // one pound is 16 oz

    // market cap is bitcoin total times usd price

    var priceOfPoundOfGold = priceGramGoldUSD * 453.592; //

    var valueOfBlockOfGold = priceOfPoundOfGold * 42509.53 // how many pounds in a m^3

    var totalBlocksOfGold = marketCapBTC / valueOfBlockOfGold;

    var heightOfGoldStack = totalBlocksOfGold / 2;

    var widthOfGoldStack = totalBlocksOfGold / 2;

	var goldDrone = new Drone();

    this.fwd(10);
    this.right(9);
    this.down();
    // floors = floors; // default number of floors is 10
    this.chkpt('goldBase'); // saves the drone position so it can return there later

        // this.box(blocks.gold,20,1,20).up().box0(blocks.gold,20,3,20).up(3);

    	this.prism(blocks.gold,heightOfGoldStack,widthOfGoldStack); // tnt is money
    	// 
    return this.move('goldBase'); // return to where we started
};

load("../drone/drone.js");
Drone.extend('gold',gold);