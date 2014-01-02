function nuclear(structWidth,structHeight,structDepth)
{
	var nuclearDrone = new Drone();
    // floors = floors; // default number of floors is 10
    this.chkpt('nuclearDrone'); // saves the drone position so it can return there later
    for (var i = 0; i < structHeight; i++)
    {
        // X wide x Y tall x 1 long in size.
    	this.box(blocks.air,structWidth,1,structDepth).up(); // cactus are computers
    	// 
    }
    return this.move('nuclearDrone'); // return to where we started
};

load("../drone/drone.js");
Drone.extend('nuclear',nuclear);