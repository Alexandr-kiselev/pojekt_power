$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
    })
})

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.header__body').addClass('fixed');
    } else {
        $('.header__body').removeClass('fixed');
    }
});