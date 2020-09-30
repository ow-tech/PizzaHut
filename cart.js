
function getLocation(){
    let location = prompt('Where is convenient location for Delivery');
    if (location == ''){
        swal({
            title: 'Location is a Must',
            text:'Please Enter Your Location !!!\n By clicking ok Button Again',
            icon:'error'});
    }else{
        swal({
            title: "Good job!. Order Completed",
            text: `Your order will be delivered to ${location} in about 1 hour. inclusive of Delivery cost`,
            icon: "success",
            });}

}


// busines logic
if(document.readyState =='loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready(){
    let removeCartItemBtn = document.getElementsByClassName('btn-danger')
        for (let i = 0; i < removeCartItemBtn.length; i++){
            let btn = removeCartItemBtn[i]
            btn.addEventListener('click', removeCartItem )
        }
    
    let quantityInputs =document.getElementsByClassName('quantity')
    for (let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChange)
    }

}
function cartTotal(){
    let itemsInCartContainer = document.getElementsByClassName('itemsInCart')[0]
    let cartRows = itemsInCartContainer.getElementsByClassName('cart-row')
    let grandTotal = 0
    for (let i = 1; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('quantity')[0]
        let price = parseInt(priceElement.innerText.replace('Ksh.',''))
        let quantity = quantityElement.value
        console.log(price, quantity)
        grandTotal = grandTotal + (price * quantity)
    }
    document.getElementsByClassName('grandTotal')[0].innerText = 'Ksh. ' + grandTotal
}


        
function removeCartItem(event){
    let btnClicked = event.target
    btnClicked.parentElement.parentElement.remove()
    cartTotal()
}

function quantityChange(event){
    let input = event.target
    if(isNaN(input.value) || input.value <=0){
        input.value=1
    }
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
    addOrderedPizzaToCart(pizzaName, price, image)

    swal({
        title: `${pizzaName} added to Cart`,
        text: `Your order needs to be checkedOut from Cart Tab`,
        icon: "info",
    })
}
function addOrderedPizzaToCart(pizzaName, price, image){
    let cartRow = document.createElement('tr')
    cartRow.classList.add('cart-row')
    let cartItems = document.getElementsByClassName('cart-row')[0]
    let cartRowContents =`
            <td scope="row">111##</th>
            <td><img src=${image} width="75" height="50"><span>${pizzaName}</span></td>
            <td class='cart-price'>${ price}</td>
            <td>
            <input class='quantity'type="number" value='1' min="1" max="5">
                <button type="button"  class="btn btn-danger btn-small">Remove</button>
            </td>
        `
    cartRow.innerHTML= cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartTotal()
}