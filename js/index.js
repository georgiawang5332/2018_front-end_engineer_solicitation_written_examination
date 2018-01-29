// Script to open and close sidebar
// function c_open() {
//     document.getElementById("mySidebar").style.display = "block";
//     document.getElementById("myOverlay").style.display = "block";
// }
//
// function c_close() {
//     document.getElementById("mySidebar").style.display = "none";
//     document.getElementById("myOverlay").style.display = "none";
// }

// $(document).ready(function(){
//     // $(".openItem").find('.i_menu').css({"color":"#fff"});
//     // $(".openItem").find('.remove-item').addClass("hidden");
//     $(".openItem").click(function(){
//         $(this).find('.fa-bars').toggleClass("hidden");
//         $(this).find('.fa-remove').toggleClass("hidden");//.css({"color":"#fff"})
//         //全螢幕與手機螢幕畫面
//         $(this).parents('header').siblings('.open_ul').toggleClass("show");
//     })
// });

$(function(){
    $('.menu').click(function(){
        $('.bar').toggleClass('animate').siblings('.open_ul');
        $(this).parents('header').siblings('.open_ul').toggleClass("show");
    })
});

