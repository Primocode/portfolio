addEventListener('scroll', stickyMenu = () => {
    if (innerWidth >= 1000) {
        if (window.scrollY > 1) {
            document.querySelector('#nav-open').className = "nav-active";
        } else {
            document.querySelector('#nav-open').className = "nav";
        }
    }
    else {
        document.querySelector('#nav-open').classList.add("nav");
    }
})

stickyMenu();