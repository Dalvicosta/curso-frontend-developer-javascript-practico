const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.product-detail');
const cartIcon = document.querySelector('.navbar-shopping-cart');

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