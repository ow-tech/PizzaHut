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


// Business logic

function myPizza(pizzaType, psize, crust, toppings, number, deliveryStatus){
    this.pizzaType=pizzaType;
    this.psize=psize;
	this.crust=crust;
	this.toppings=toppings;
	this.number=number;
	this.deliveryStatus=deliveryStatus;
}
$(document).ready(function(){
    $('#makeOrder').click(function(){
        let pizzaType = $('input').val();
        let psize =$(".psize[type='radio']:checked").val();
        let crust = $(".custom-select option:selected").val();
        let ptopping = [];
        $.each($("input[name='toppings']:checked"), function(){            
            ptopping.push($(this).val())
        });
        let number =$("#getnumber option:selected").val();
        let delivery= $(".delivered[type='checkbox']:checked ").val();
        let deliveryStatus = parseInt(delivery);
        let total= (parseInt(psize) + parseInt(crust))*parseInt(number);
        event.preventDefault();
  



});


// cart js
// removing item from cart
// loop through available buttons.
// set a container to store the clicked button
// add addEventListener to the clicked button



// ASsumption. there are several items in the cart. we need to get the grand total
// zz
