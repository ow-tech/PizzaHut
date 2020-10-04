window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth'
  });  
// busines logic
let removeCartItemBtn = document.getElementsByClassName('btn-danger')
    for (let i = 0; i < removeCartItemBtn.length; i++){
        let btn = removeCartItemBtn[i]
        btn.addEventListener('click', removeCartItem )
    }
let quantityInputs =document.getElementsByClassName('quantity')

for (let i = 0; i < quantityInputs.length; i++){
    let quantityInput = quantityInputs[i]
    quantityInput.addEventListener('change', quantityChange)
}
function quantityChange(event){
    quantityInput = event.target
    if(isNaN(quantityInput.val)){
        quantityInput = 1
    }
    cartTotal()
    }
function cartTotal(){
    let itemsInCartContainer = document.getElementsByClassName('itemsInCart')[0]
    let cartRows = itemsInCartContainer.getElementsByClassName('cart-row')
    let grandTotal = 0
    let cartRowslength = cartRows.length
    for (let i = 1; i < cartRowslength; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('quantity')[0]
        let price = parseInt(priceElement.innerText.replace('Ksh.',''))
        let quantity = quantityElement.value
        grandTotal = grandTotal + (price * quantity)
    }
    document.getElementsByClassName('grandTotal')[0].innerText = 'Ksh. ' + grandTotal
    return grandTotal, cartRowslength
}
function removeCartItem(event){
    let btnClicked = event.target
    btnClicked.parentElement.parentElement.remove()
    cartTotal()
}
let addToCartBtn = document.getElementsByClassName('orderMe')
for (let i = 0; i < addToCartBtn.length; i++){
    let btn = addToCartBtn[i]
    btn.addEventListener('click', addToCartClicked)
    
}
function addToCartClicked(event){
    let btn = event.target
    pizzaOrdered = btn.parentElement.parentElement
    let image = pizzaOrdered.getElementsByClassName('imgBox')[0].src
    let pizzaName = pizzaOrdered.getElementsByClassName('pizzaName')[0].innerText
    let price = pizzaOrdered.getElementsByClassName('price')[0].innerText
    let quantity = 1
    addOrderedPizzaToCart(pizzaName, price, quantity)

}
function addOrderedPizzaToCart(pizzaName, price, quantity){
    
    let cartRow = document.createElement('tr')
    cartRow.classList.add('cart-row')
    let cartItems = document.getElementsByClassName('cart-row')[0]
    let cartRowContents =`
            <td scope="row">111##</th>
            <td><span>${pizzaName}</span></td>
            <td class='cart-price'>${ price}<span><span></td>
            <td>
            <input class='quantity' type="number" value='${quantity}' min='1' max='10'>
            <button type="button"  class="btn btn-danger btn-small">Remove</button>
            </td>
        `
    cartRow.innerHTML= cartRowContents
    cartItems.append(cartRow)
    swal({
        title: `${pizzaName} added to Cart`,
        text: `Your order needs to be checkedOut from Cart Tab`,
        icon: "info",
    })
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartTotal()
    document.getElementsByClassName('cartItemsPicked')[0].innerText= (cartTotal([1])-1)
    autoUpDateCartCount =  removeCartItem()
    autoUpDateCartCount.addEventListener('call', reduceCartCount)
}
function reduceCartCount(event){
    parsdocument.getElementsByClassName('cartItemsPicked')[0].innerText= event.target
    parseInt(document.getElementsByClassName('cartItemsPicked')[0].innerText)-=1
    
}

function ownOrder(){
    let pizzaName = $('.pizzaname').val();
    let psize =$(".psize[type='radio']:checked").val();
    let crust = $(".custom-select option:selected").val();
    let ptopping = [];
    $.each($("input[name='toppings']:checked"), function(){            
        ptopping.push($(this).val())
    });
    let quantity =$("#getnumber option:selected").val();
    let delivery= $(".delivered[type='checkbox']:checked ").val();
    let deliveryStatus = parseInt(delivery);
    let price= (parseInt(psize) + parseInt(crust))*parseInt(quantity);
    event.preventDefault();
    addOrderedPizzaToCart(pizzaName, price, quantity)
}
function checkOut(){
    let grandTotal = cartTotal()
    let location = prompt('Where is convenient location for Delivery');
    if (grandTotal <= 1 ||location == ''){
        swal({
            title: 'Must have Item on Cart and Set your Location',
            text:'Please Continue Shopping!!!\n By clicking ok Button Again',
            icon:'error'});
    }else{
        swal({
            title: "Good job!. Order Completed",
            text: `Your order will be delivered to ${location} in about 1 hour.\n Total Amount is ksh. ${grandTotal} inclusive of Delivery cost`,
            icon: "success",
          });}
}
cartTotal()