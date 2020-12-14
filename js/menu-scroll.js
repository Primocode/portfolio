addEventListener('scroll', stickyMenu = () => {
    if (innerWidth >= 1000) {
        if ($(window).scrollTop() > 1) {
            $('nav').attr('class', 'nav-active');
        } else {
            $('.nav-active').attr('class', 'nav');
        }
    }
    else {
        $('.nav-active').attr('class', 'nav');
    }
})

stickyMenu();
