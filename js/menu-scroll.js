function update() {
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
}
setInterval(update, 0);
