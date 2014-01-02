function gpu(tHash)
{

    var gHash = tHash * 1000;
    var totalGPUs = gHash / 5;
    var numberOfRows = 22;

	var gpuDrone = new Drone();
    this.fwd(37);
    this.left(62 + numberOfRows);
    this.down();
    // floors = floors; // default number of floors is 10
    this.chkpt('processorsBase'); // saves the drone position so it can return there later

    // make rows this time
    for (var i = 0; i < numberOfRows; i++)

    {
        // X wide x Y tall x 1 long in size.
        this.box(blocks.hay,1,5,40).right(); // fans
    	this.box(blocks.cactus,1,5,40).right().right();
         // cactus are computers
    	// 
    }
    return this.move('processorsBase'); // return to where we started
};

load("../drone/drone.js");
Drone.extend('gpu',gpu);