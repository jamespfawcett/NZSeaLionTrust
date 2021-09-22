console.log('hello');

// $(document).ready(function(){
//     $(".hamburger").click(function(){
//         $(".hamburger-menu").style("display", "block");
//     }});

// $(document).ready(function(){
//     $(".hamburger").click(function() {
//       $(".hamburger-menu").addClass("active");
//     })

$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.hamburger-menu').toggleClass('active');
    })
})