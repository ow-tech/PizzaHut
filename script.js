// user interface
window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
  });

$(document).ready(function(){
    $('.card').hover(function(){
        $('.details', this).toggle(1000)
    })
});




function myPizza(pizzaType, psize, crust, toppings, number, deliveryStatus){
    this.pizzaType=pizzaType;
    this.psize=psize;
	this.crust=crust;
	this.toppings=toppings;
	this.number=number;
	this.deliveryStatus=deliveryStatus;
}

// cart js
// removing item from cart
// loop through available buttons.
// set a container to store the clicked button
// add addEventListener to the clicked button



// ASsumption. there are several items in the cart. we need to get the grand total
// zz
