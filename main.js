const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.product-detail');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleMenuCarrito)

function toggleDesktopMenu(){

    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive');

    if (!isMenuCarritoClosed) {
        menuCarrito.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive');

    if (!isMenuCarritoClosed) {
        menuCarrito.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
}

function toggleMenuCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    menuCarrito.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Pantalla',
    price: 360,
    image: 'https://i.blogs.es/69de7a/samsung-odyssey-g9-3/450_1000.jpg',
})

productList.push({
    name: 'Computadora',
    price: 1000,
    image: 'https://http2.mlstatic.com/D_NQ_NP_692301-MLV49575270633_042022-O.webp',
})

productList.push({
    name: 'Computadora',
    price: 1000,
    image: 'https://http2.mlstatic.com/D_NQ_NP_692301-MLV49575270633_042022-O.webp',
})

productList.push({
    name: 'Computadora',
    price: 1000,
    image: 'https://http2.mlstatic.com/D_NQ_NP_692301-MLV49575270633_042022-O.webp',
})

productList.push({
    name: 'Computadora',
    price: 1000,
    image: 'https://http2.mlstatic.com/D_NQ_NP_692301-MLV49575270633_042022-O.webp',
})

function renderProducts (arr) {
    for(product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')

    const productInfoDiv = document.createElement('div');

     const productPrice = document.createElement('p');
     productPrice.innerText = '$' + product.price;
     const productName = document.createElement('p');
     productName.innerText = product.name;

     productInfoDiv.appendChild(productPrice);
     productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
 }
}

renderProducts(productList);