function skyscraper(floors)
{
    floors = floors; // default number of floors is 10
    this.chkpt('skyscraper'); // saves the drone position so it can return there later
    for (var i = 0; i < floors; i++)
    {
        // this.box(blocks.gold,20,1,20).up().box0(blocks.gold,20,3,20).up(3);
    	this.box(blocks.gold,20,1,20).up().box0(blocks.glass_pane,20,3,20).up();
    }
    return this.move('skyscraper'); // return to where we started
};

load("../drone/drone.js");
Drone.extend('skyscraper',skyscraper);