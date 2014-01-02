function test(forwardMovement,rightMovement,leftMovement)
{
	var testDrone = new Drone();
    this.fwd(forwardMovement);
    this.right(rightMovement);
    this.left(leftMovement);
    this.down();
    // floors = floors; // default number of floors is 10
    this.chkpt('processorsBase'); // saves the drone position so it can return there later
    for (var i = 0; i < 2; i++)
    {
        // X wide x Y tall x 1 long in size.

    	this.box(6).up(); // 
    	// 
    }
    return this.move('processorsBase'); // return to where we started
};

load("../drone/drone.js");
Drone.extend('test',test);