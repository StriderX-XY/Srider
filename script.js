// Ajouter produit au panier
let addToCartBtn = document.getElementById('addToCart');
if(addToCartBtn){
    addToCartBtn.addEventListener('click',()=>{
        let productName = document.getElementById('productName').innerText;
        let productPrice = document.getElementById('productPrice').innerText;
        let size = document.getElementById('sizeSelect').value;
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({name:productName,price:productPrice,size:size});
        localStorage.setItem('cart',JSON.stringify(cart));
        alert(productName + " ajouté au panier !");
    });
}

// Afficher le panier
let cartContainer = document.getElementById('cartItems');
let totalPriceEl = document.getElementById('totalPrice');
if(cartContainer){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    cart.forEach((item,index)=>{
        let div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `<h3>${item.name} (Taille ${item.size}) - ${item.price}</h3>`;
        cartContainer.appendChild(div);
        total += parseInt(item.price.replace('€',''));
    });
    if(totalPriceEl) totalPriceEl.innerText = "Total : " + total + "€";
}

// Vider le panier
let clearBtn = document.getElementById('clearCart');
if(clearBtn){
    clearBtn.addEventListener('click',()=>{
        localStorage.removeItem('cart');
        location.reload();
    });
}