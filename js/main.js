//jQuery code.
$(document).ready(()=>{
    $('#cart, #account, #help').on('mouseover',function(){
        $(this).find(".dropdown-menu").show();
    });
    $('#cart, #account, #help').on('mouseleave',function(){
        $(this).find(".dropdown-menu").hide();
    });


    //We can accomplish the same task using class as well


    // $(".dropdown").mouseover(function() {
    //     // remove classes from all
    //     $(this).find("ul").show();
    // });
    // $(".dropdown").mouseleave(function() {
    //     // remove classes from all
    //     $(this).find("ul").toggle();
    //   });
});