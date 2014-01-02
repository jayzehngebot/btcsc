function btc(structWidth,structHeight,structDepth,locX,locY)
{
    var btcDrone = new Drone(locX,locY);
    // floors = floors; // default number of floors is 10
    this.chkpt('btcBase'); // saves the drone position so it can return there later
    for (var i = 0; i < structHeight; i++)
    {
        // this.box(blocks.gold,20,1,20).up().box0(blocks.gold,20,3,20).up(3);

        // 2001 black obelisk that is 4 wide x 9 tall x 1 long in size.
        this.box(blocks.slab.stone,structWidth,1,structDepth).up(); //  bitcoin
        // 
    }
    return this.move('btcBase'); // return to where we started
};

load("../drone/drone.js");
Drone.extend('btc',btc);