// user interface

$(document).ready(function(){
    $('.card').hover(function(){
        $('.details', this).toggle(2000)
    });
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

function startOrder(){
    
    // swal({
    //     title: "Finalize Your Order; If Delivery, Cost's 200 more",
    //     content:{
    //         element: "select",
    //         attribute:
    //     }
    //     text: "Once deleted, you will not be able to recover this imaginary file!",
        
    //     icon: "info",
    //     buttons: true,
    //   })
    //   .then((willDelete) => {
    //     if (willDelete) {
    //       swal("Poof! Your imaginary file has been deleted!", {
    //         icon: "success",
    //       });
    //     } else {
    //       swal("Your imaginary file is safe!");
    //     }
    //   });
}
