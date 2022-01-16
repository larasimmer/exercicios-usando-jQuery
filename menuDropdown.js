$(document).ready(function() {
    $(".menu-principal").hover(function() {
        $(this).find(".submenu").slideDown();
    }, function() {
        $(this).find(".submenu").slideUp();
    });
});