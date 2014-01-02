				
function piz(bitcoinUSD)
{

    var eqivalence = bitcoinUSD * 10000; //

    var totalPizzas = eqivalence / 12.5; // $25 for two pizzas, divided by 2 (/12.5)

	var pizzaHeight = (totalPizzas/15)/15;

    // surface = surface || 10; // default block surface is 10
    var pizzaDrone = new Drone();
    this.fwd(20);
    this.left(13);
    this.chkpt('pizzas'); // saves the drone position so it can return there later


    // width, height, depth
     for (var i = 0; i < pizzaHeight; i++){
        this.box(blocks.cake,15,1,15).up();

    // for (var i = 0; i < surface; i++)
    // {
    //     // this.box(blocks.gold,20,1,20).up().box0(blocks.gold,20,3,20).up(3);
    	
    // 	// wide, tall, long
    }
    return this.move('pizzas'); // return to where we started
};

load("../drone/drone.js");
Drone.extend('piz',piz);