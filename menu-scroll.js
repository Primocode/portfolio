addEventListener('scroll', function () {
    if (window.scrollY >= 80) {
        document.querySelector('#nav-open').className = "nav-active";
        document.querySelector('.navigation').style.display = "none";
    }
    else {
        document.querySelector('#nav-open').className = "nav";
        document.querySelector('.navigation').style.display = "flex";
    }
})