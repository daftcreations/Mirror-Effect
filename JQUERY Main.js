$(document).scroll(function(){
    
    var scroll = $(window).scrollTop();
    
    if(scroll <= 250)
        {
            $("#i1").css({top:175+(scroll*(-0.7))+"px"});
            $("#i1").css({left:175+(scroll*(-0.5))+"px"});
            
            $("#i2").css({top:175+(scroll*(-0.7))+"px"});
            $("#i2").css({left:-175+(scroll*(0.5))+"px"});
            
            $("#i3").css({bottom:175+(scroll*(-0.7))+"px"});
            $("#i3").css({left:175+(scroll*(-0.5))+"px"});
            
            $("#i4").css({bottom:175+(scroll*(-0.7))+"px"});
            $("#i4").css({left:-175+(scroll*(0.5))+"px"});
        }
});