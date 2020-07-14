document.querySelector('#menu-hamburger').addEventListener('click', function() {
    if (document.querySelector('#menu-icon-hamburger').className == "menu-icon") {
        document.querySelectorAll('#menu-icon-hamburger').forEach(item => {
            item.className = "menu-icon open";
        });
    }
    else {
        document.querySelectorAll('#menu-icon-hamburger').forEach(item => {
            item.className = "menu-icon";
        }); 
    }
})