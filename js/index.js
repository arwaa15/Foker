let sectionOffset = $("#home").offset().top;

$(window).scroll(function(){
    let windowScroll = $(window).scrollTop();
    if(windowScroll > sectionOffset){
        $(".navbar").css('backgroundColor','rgba(0,0,0,0.8)')
    }   
    else{
        $(".navbar").css('backgroundColor','transparent')
    } 
})