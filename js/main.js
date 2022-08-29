$(function () {
    ///////////////////////////////////////////////

    $('.top_close_btn').on('click', function () {
        $('.TopBanner').addClass('on');
        $('.Section01').addClass('on');
    })


    $('.main_slider').slick({
        arrow: false,
    });


    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        sct > 0
            ? $('.Header').addClass('on')
            : $('.Header').removeClass('on')
    })


    ///////////////////////////////////////////////
})