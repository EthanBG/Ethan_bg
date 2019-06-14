// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
        $('#scrollUp').fadeIn(200);    // Fade in the arrow
    } else {
        $('#scrollUp').fadeOut(200);   // Else fade out the arrow
    }
});
