const openMenu = () => {
    if (document.querySelector('#menu-icon-hamburger').className == "menu-icon") {
        document.querySelectorAll('#menu-icon-hamburger').forEach(item => {
            item.className = "menu-icon open";
            document.querySelector('#navigation').className = "navigation navigation-mobile-open";
            document.querySelector('#ul-nav').className = "ul-desktop ul-mobile";
            document.querySelector('#nav-open').className = "nav nav-mobile";
        });
    }
    else {
        document.querySelectorAll('#menu-icon-hamburger').forEach(item => {
            item.className = "menu-icon";
            document.querySelector('#navigation').className = "navigation"
            document.querySelector('#ul-nav').className = "ul-desktop";
            document.querySelector('#nav-open').className = "nav"
        }); 
    }
}

document.querySelector('#menu-hamburger').addEventListener('click', openMenu);

const closeMenuClick = () => {
    openMenu();
}


document.querySelectorAll('#ul-nav > li > a').forEach(item => item.addEventListener('click', closeMenuClick))

