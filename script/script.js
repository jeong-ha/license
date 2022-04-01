jQuery(document).ready(function(){
    //nav
    $('.navi>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });
    //imgslide
    $('.imgslide>a:gt(0)').hide();
    setInterval(function(){
        $('.imgslide>a:first-child').fadeOut()
        .next('a').fadeIn()
        .end().appendTo('.imgslide');
    },3000);
    
    
    //modal
    $('.notice_txt>li:first-child').click(function(){
        $('.modal').addClass('active');
    });
    $('.modal_x').click(function(){
        $('.modal').removeClass('active');
    });
    
    
    
    
});