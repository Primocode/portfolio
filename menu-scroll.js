function update() {
    if ($(window).scrollTop() > 1) {
      $('nav').attr('class', 'nav-active');
      $('.navigation').attr('class', 'navigation-close');
      $('.menu-bar-close').attr('class', 'menu-bar');
    } else {
      $('.nav-active').attr('class', 'nav');
      $('.navigation-close').attr('class', 'navigation')
      $('.menu-bar').attr('class', 'menu-bar-close')
    }
  }
  setInterval(update, 0);