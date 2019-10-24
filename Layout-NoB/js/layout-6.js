$(".mobi-button").click(function() {
    $(".navbar").slideToggle("slow");
    
    $(window).resize(function () {
        if($(window).width() > 576) {
            $(".navbar").removeAttr('style');
        }
    })
})