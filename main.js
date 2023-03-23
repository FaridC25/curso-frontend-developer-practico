const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const mobile_menu = document.querySelector('.mobile-menu');
const menu_hamburgesa = document.querySelector('.menu');
const navbar_shopping_cart = document.querySelector('.navbar-shopping-cart');
const product_detail = document.querySelector('.product-detail');

navbar_email.addEventListener('click' , toggleshowDesktopMenu)

menu_hamburgesa.addEventListener('click', toggleshowpMobileMenu)

navbar_shopping_cart.addEventListener('click', toggleshowpshoppingcart)


function toggleshowpshoppingcart(){

   const carroinactivo =  product_detail.classList.toggle('inactive')
   

   if( !carroinactivo ) {

       mobile_menu.classList.add('inactive');

       desktop_menu.classList.add('inactive');
        
   }
   
   
}

function toggleshowpMobileMenu(){

    const hamburgesa_inactiva = mobile_menu.classList.toggle('inactive');

    if(!hamburgesa_inactiva) {

        product_detail.classList.add('inactive')

    }

}

function toggleshowDesktopMenu(){

    const menu_desktop = desktop_menu.classList.toggle('inactive');

    if( !menu_desktop) {

        product_detail.classList.add('inactive')
          
    }
}

