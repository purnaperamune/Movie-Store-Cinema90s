var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText //title of the item
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText //price of the item
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src //image of the item
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}