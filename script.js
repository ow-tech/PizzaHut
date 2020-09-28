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

$(document).ready(function(){
    $('#makeOrder').click(function(){
        let pizzaType = $('input[type="radio"]:checked').val();
        let psize =$(".psize[type='radio']:checked").val();
        let crust = $(".custom-select option:selected").val();
        let toppings =$ ("input[type='checkbox']:checked").val();
		let number =$("#getnumber option:selected").val();
        let deliveryStatus = $(".delivered").val();
        
        let total= (parseInt(psize) + parseInt(crust) + parseInt(toppings))*parseInt(number);
        event.preventDefault();
        if (deliveryStatus ==='200'){
            let location = prompt('Where is convenient location for Delivery')
            if (location == ''){
                swal({
                    title: 'Location is a Must',
                    text:'Please Enter Your Location !!!\n By clicking ok Button Again',
                    icon:'error'
                })
                // alert('Please Enter Your Location !!!\n By clicking Yes Button Again')
            } else{
                swal({
                    title: "Good job!. Order Completed",
                    text: `Your order will be delivered to ${location} in about 1 hour.\n Total Amount is ksh. ${total} + Delivery ${deliveryStatus}`,
                    icon: "success",
                  })}
        }
        else{
            swal({
                title: "Good job!. Order Completed",
                text: `Your order will be delivered to ${location}  in about 1 hour.\n Total Amount is ksh. ${total} + Delivery ${deliveryStatus}`,
                icon: "success",})}
    })
});
