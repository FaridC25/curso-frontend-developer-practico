const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const mobile_menu = document.querySelector('.mobile-menu');
const menu_hamburgesa = document.querySelector('.menu');
const navbar_shopping_cart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cards_container = document.querySelector('.cards-container');
const ProductDetail = document.querySelector('#ProductDetail');
const product_detail_close = document.querySelector('.product-detail-close');

navbar_email.addEventListener('click' , toggleshowDesktopMenu)

menu_hamburgesa.addEventListener('click', toggleshowpMobileMenu)

navbar_shopping_cart.addEventListener('click', toggleshowpshoppingcart)

product_detail_close.addEventListener('click',closeproductdetail)





function toggleshowpshoppingcart(){

   const carroinactivo =  shoppingCartContainer.classList.toggle('inactive')
   

   if( !carroinactivo ) {

       mobile_menu.classList.add('inactive');

       desktop_menu.classList.add('inactive');
       
       ProductDetail.classList.add('inactive')

        
   }
   
   
}

function toggleshowpMobileMenu(){

    const hamburgesa_inactiva = mobile_menu.classList.toggle('inactive');

    if(!hamburgesa_inactiva) {

        shoppingCartContainer.classList.add('inactive')

        ProductDetail.classList.add('inactive')

    }

}

function toggleshowDesktopMenu(){

    const menu_desktop = desktop_menu.classList.toggle('inactive');

    if( !menu_desktop) {

        shoppingCartContainer.classList.add('inactive')

        ProductDetail.classList.add('inactive')
          
    }
}

function activate_product_detail(){

    ProductDetail.classList.remove('inactive');
    
    desktop_menu.classList.add('inactive')

    shoppingCartContainer.classList.add('inactive')

}

function closeproductdetail() {
    
    ProductDetail.classList.add('inactive')

}



const product_list = [];

product_list.push({
    name: 'Bike',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

product_list.push({
    name: 'TV',
    price: 600,
    Image: 'https://i0.wp.com/towncenter.co/wp-content/uploads/2022/07/Televisor-LG-32%E2%80%B3-Smart-TV-HD.webp?fit=800%2C800&ssl=1',
});

product_list.push({
    name: 'PC GAMER',
    price: 1000,
    Image: 'https://exitocol.vtexassets.com/arquivos/ids/11640443/computador-pc-de-escritorio-torre-gamer-power-group-amd-ryzen-5-3500-ssd-240gb-ram-8gb-led-22-full-hd.jpg?v=637786563587930000',
});


product_list.push({
    name: 'Sound Equipment ',
    price: 300,
    Image: 'https://i.pinimg.com/236x/c5/c4/c2/c5c4c23313b8dcbe69e130437b426c5a--sony-product-design.jpg',
});


product_list.push({
    name: 'XBOX SERIES X',
    price: 300,
    Image: 'https://falabella.scene7.com/is/image/FalabellaCO/9390605_1?wid=800&hei=800&qlt=70',
});

product_list.push({
    name: 'PS5',
    price: 300,
    Image: 'https://falabella.scene7.com/is/image/FalabellaCO/61897888_1?wid=800&hei=800&qlt=70',
});


function renderizar_productos(array){

for ( product of array) {

    const product_card = document.createElement('div');
    product_card.classList.add('product-card');

    const product_img = document.createElement('img');
    product_img.setAttribute('src',product.Image);


    const product_info = document.createElement('div');
    product_info.classList.add('product-info');

    const product_div = document.createElement('div');
    const product_price = document.createElement('p');
    product_price.innerText='$'+product.price;
    
    const product_name = document.createElement('p');
    product_name.innerText=product.name;

    product_div.append(product_price,product_name);
    

    const product_figure = document.createElement('figure');
    const img_figure = document.createElement('img');
    img_figure.setAttribute('src','./icons/bt_add_to_cart.svg');
    img_figure.classList.add('push-detail');

    product_figure.append(img_figure)
    

    product_info.append(product_div,product_figure);
    

    product_card.append(product_img,product_info);
    
    
    cards_container.append(product_card);
    product_img.addEventListener('click', activate_product_detail);
  
}
};



renderizar_productos(product_list);