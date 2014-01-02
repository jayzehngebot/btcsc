function coal(energy) // in MegaWatt/h
{


    var kwH = energy * 1000; // one mc block = 2058kw/h

    var totalCoalBlocks = kwH / 2058 

    var totalCoalWidth = 18

    var totalCoalDepth = 30

    var totalCoalHeight = (totalCoalBlocks/totalCoalWidth) / totalCoalDepth;

	var coalDrone = new Drone();

    this.fwd(70);
    this.left(3);
    this.down();
    // floors = floors; // default number of floors is 10
    this.chkpt('coalBase'); // saves the drone position so it can return there later
    for (var i = 0; i < totalCoalHeight; i++)
    {
        // this.box(blocks.gold,20,1,20).up().box0(blocks.gold,20,3,20).up(3);

        // 2001 black obelisk that is 4 wide x 9 tall x 1 long in size.
    	this.box(blocks.wool.black,totalCoalWidth,1,totalCoalDepth).up(); // tnt is money
    	// 
    }
    return this.move('coalBase'); // return to where we started
};

load("../drone/drone.js");
Drone.extend('coal',coal);