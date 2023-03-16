const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

navbar_email.addEventListener('click' , toggleshowDesktopMenu)

function toggleshowDesktopMenu(desktop_menu){
    desktop_menu.classList.toggle('inactive');
}

