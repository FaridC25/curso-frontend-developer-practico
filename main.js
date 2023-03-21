const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const mobile_menu = document.querySelector('.mobile-menu');
const menu_hamburgesa = document.querySelector('.menu');

navbar_email.addEventListener('click' , toggleshowDesktopMenu)

menu_hamburgesa.addEventListener('click', toggleshowpMobileMenu)


function toggleshowpMobileMenu(){

    mobile_menu.classList.toggle('inactive-mobile');
    console.log('verga')
}

function toggleshowDesktopMenu(){

    desktop_menu.classList.toggle('inactive');
}

