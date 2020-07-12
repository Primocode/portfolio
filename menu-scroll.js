const scrollMenu = () => {
    if (window.scrollY >= 80) {
        document.querySelector('#nav-open').className = "nav-active";
        document.querySelector('.navigation').style.display = "none";
        document.querySelector('#menu-hamburger').className = "menu-bar";
        if (document.querySelector('#menu-icon-hamburger').className == "menu-icon open") {
            document.querySelectorAll('#menu-icon-hamburger').forEach(item => {
                item.className = "menu-icon";
            })
        }
    }
    else {
        document.querySelector('#nav-open').className = "nav";
        document.querySelector('#menu-hamburger').className = "menu-bar-close";
        document.querySelector('.navigation').style.display = "flex";
    }
}
addEventListener('scroll', scrollMenu)

scrollMenu()

document.querySelector('#menu-hamburger').addEventListener('click', function () {
    console.log("kliknięto")
    if (document.querySelector('#nav-open').className == "nav-active") {
        console.log("Ma menu bar")
        document.querySelector('#nav-open').className = "nav-open"
        document.querySelectorAll('#menu-icon-hamburger').forEach(item => {
            item.className = "menu-icon open"
        })
    }
    else {
        console.log("else, nie wiadomo co ma")
        document.querySelector('#nav-open').className = "nav-active"
        document.querySelectorAll('#menu-icon-hamburger').forEach(item => {
            item.className = "menu-icon"
        })
        
    }
})

// const responsiveMenu = () => {
//     if (window.innerWidth < 725) {
//         console.log("otwórz menu")
//     }
// }

// addEventListener('scroll', responsiveMenu);