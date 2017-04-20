/*global $, jQuery, alert, console*/

$(function () {
    
    "use strict";
       
    // Start Adjust Header Height
    
    var header = $(".header"),
        mySlider = $('.bxslider');
    
    header.height($(window).height());
    
    $(window).resize(function () {
       
        header.height($(window).height());
        
    });
        //Start Adjusing The Bx Slider li
        
        
    mySlider.each(function () {
       
        $(this).css("paddingTop", ($(window).height() - $('.bxslider  li').height()) / 2);
        
    });
   
        


                            //End Adjusing The Bx Slider li
                               
        
        
        
    
    
    

    
                    // End Adjust Header Height
    
    
    
    
    
    
    // Start Links Adjust Header Height
    
    $('.links li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    // End Links Adjust Header Height
    
    
    
    
    
    //Trigger Thw Bx Slider
    
    
    mySlider.bxSlider({
        pager: false

    });
    
    
                    //End Thw Bx Slider
  
    
    
    
    //Start Adjusing The Bx Slider li

    
    
                    //End Adjusing The Bx Slider li
    
    
    
    
    //Start Scroll Top To Div
    $(".links li a").click(function () {
        
        $("html, body").animate({
           
            scrollTop: $("#" + $(this).data("value")).offset().top
        }, 1000);
    });
    
    
    //End Scroll Top To Div
    
    
    
    // Start Our Auto Slider Code
    (function myslider() {
      
        $('.slider .active').each(function () {
           
            if (!$(this).is(':last-child')) {
                
                $(this).delay(3000).fadeOut(1000, function () {

                    $(this).removeClass('active').next().addClass('active').fadeIn();

                    myslider();
                });

                
            } else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
                    myslider();
                });
            }
            
        });
        
        
    }());
    
    // End Our Auto Slider Code
    
    
    
    //Add class selected
    $(".our-projects li").click(function () {
       
        $(this).addClass("selected").siblings().removeClass("selected");
    });
    
    
    // Start Trigger Mix it up
    
    $("#container").mixItUp();
    // End Trigger Mix it up
    
    
    // Start Trigger nicescroll
    $('html').niceScroll({
        cursorcolor: "#1abc9c",
        cursorwidth: "10px",
        cursorborder: "1px solid #1abc9c",
        cursorborderradius: "0"
        
    });
    // End Trigger nicescroll


    
});
    
    


/*

    // Start Our Auto Slider Code

    (function mySlider() {
        
        $('.slider .active').each(function () {
            
            if (!$(this).is(':last-child')) {
                
                
                $(this).delay(3000).fadeOut(1000, function () {
                   
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    mySlider();
                    
                });
                
            } else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                   
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
                    mySlider();
                });
            }
        });
        
    }()); 
    
    // End Our Auto Slider Code
    
    
        $(".links li a").click(function () {
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("value")).offset().top
        }, 1000);
    });




    mySlider.each(function () {
       
        $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
    });


*/
