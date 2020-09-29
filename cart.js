let removeCartItem = document.getElementsByClassName('btn-danger')
for (let i = 0; i < removeCartItem.length; ++i){
    let btn = removeCartItem[i];
    btn.addEventListener('click', function(event){
        let btnClicked = event.target
        btnClicked.parentElement.parentElement.remove()
    })
}

let addToCartBtn = document.getElementsByClassName('btn-unique')
for (let i = 0; i < addToCartBtn.length; ++i){
    let btn = addToCartBtn[i]
    btn.addEventListener('click', addToCartClicked)
};

function addToCartClicked(event){
    let btn = event.target
    pizzaOrdered = btn.parentElement.parentElement
    btn.parentElement.parentElement
}