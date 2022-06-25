var lastScrollTop=0;
$(window).scroll(function(){
    if($(this).scrollTop()>50 ){
        $('.products-filter-top').addClass('scroll');
    } else {
        $('.products-filter-top').removeClass('scroll');
    }
    lastScrollTop=$(this).scrollTop();

});
$(window).on('scroll',function(){
var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
if($(this).scrollTop()>0 ){
$('.filters-left').addClass('scroll2');
$('.products-right').addClass('products-right-margin')
} else{
$('.filters-left').removeClass('scroll2')
$('.products-right').removeClass('products-right-margin')
} 
}).trigger('scroll');

$(window).scroll(function(){
    if($(this).scrollTop()>350 ){
        $('.filters-left').addClass('scroll2');
        $('.products-right').addClass('products-right-margin')
    } else {
        $('.filters-left').removeClass('scroll2');
        $('.products-right').removeClass('products-right-margin')
    }
    lastScrollTop=$(this).scrollTop();

});
$(window).on('scroll',function(){
var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
if($(this).scrollTop()>100 && $(this).scrollTop()<1000  ){
$('.filters-left').addClass('scroll2');
$('.products-right').addClass('products-right-margin')
} else{
$('.filters-left').removeClass('scroll2')
$('.products-right').removeClass('products-right-margin')
} 
}).trigger('scroll2');