function dol(marketCap)
{

    var totalNumberOfBlocksOfUSD = marketCap / 117888888;
    var blocksHeight = (totalNumberOfBlocksOfUSD / 5) / 6;
	var dollarDrone = new Drone();
    this.fwd(22);
    this.left(30);
    this.down();
    // floors = floors; // default number of floors is 10
    this.chkpt('dollarbillsBase'); // saves the drone position so it can return there later
    for (var i = 0; i < blocksHeight; i++)
    {
        // this.box(blocks.gold,20,1,20).up().box0(blocks.gold,20,3,20).up(3);

        // 2001 black obelisk that is 4 wide x 9 tall x 1 long in size.
    	this.box(blocks.tnt,5,1,6).up(); // tnt is money
    	// 
    }
    return this.move('dollarbillsBase'); // return to where we started
};

load("../drone/drone.js");
Drone.extend('dol',dol);