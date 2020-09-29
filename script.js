// user interface

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
        let location = prompt('Where is convenient location for Delivery');
        if (location == ''){
            swal({
                title: 'Location is a Must',
                text:'Please Enter Your Location !!!\n By clicking ok Button Again',
                icon:'error'});
        }else{
            swal({
                title: "Good job!. Order Completed",
                text: `Your order will be delivered to ${location} in about 1 hour.\n Total Amount is ksh. ${total+deliveryStatus} inclusive of Delivery cost`,
                icon: "success",
                });}
            // let addToCartBtn = {
            //     price:total,
            //     number:number,
            //     toppings:ptopping,
            // }
        });

        let removeCartItemBtn = document.getElementsByClassName('btn-danger')
        for (let i = 0; i < removeCartItemBtn.length; ++i){
            let btn = removeCartItemBtn[i];
            btn.addEventListener('click', removeCartItem )
        }
        
        function removeCartItem(event){
            let btnClicked = event.target
            btnClicked.parentElement.parentElement.remove()
        }
        let addToCartBtn = document.getElementsByClassName('orderMe')
        for (let i = 0; i < addToCartBtn.length; ++i){
            let btn = addToCartBtn[i]
            btn.addEventListener('click', addToCartClicked)
           
        }
        
        function addToCartClicked(event){
            let btn = event.target
            pizzaOrdered = btn.parentElement.parentElement
            let image = pizzaOrdered.getElementsByClassName('imgBox')[0].src
            let pizzaName = pizzaOrdered.getElementsByClassName('pizzaName')[0].innerText
            let price = pizzaOrdered.getElementsByClassName('price')[0].innerText
            addOrderedPizzaToCart(pizzaName, price, image)
        }
        function addOrderedPizzaToCart(pizzaName, price, image){
            let cartRow = document.createElement('tr')
            cartRow.classList.add('cart-row')
            let cartItems = document.getElementsByClassName('cart-row')[0]
            let cartRowContents =`
              <th scope="row">111##</th>
              <td><img src=${image} width="75" height="50"><span>${pizzaName}</span></td>
              <td>${ price}</td>
              <td>
                <button type="button"  class="btn btn-danger">Remove</button>
              </td>
            `
            cartRow.innerHTML= cartRowContents
            cartItems.append(cartRow)
            cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
        }

        
});


// cart js
// removing item from cart
// loop through available buttons.
// set a container to store the clicked button
// add addEventListener to the clicked button



// ASsumption. there are several items in the cart. we need to get the grand total
// zz
