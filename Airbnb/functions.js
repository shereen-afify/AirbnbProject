$(window).scroll(function(){
    var currentPos = $(this).scrollTop();
    var topNav = $('.top-nav');
    var searchbar = $('searchbar');
    if(currentPos >= searchbar.offset().top)
    {
        topNav.addClass('active');
    }
    else{
        topNav.removeClass('active');
    }
});