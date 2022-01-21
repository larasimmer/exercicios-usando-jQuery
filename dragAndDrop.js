$(document).ready(function() {
    $("#objeto").on("mousedown", function() {
        $("#objeto").on("mousemove", function(e) {
            let x = e.originalEvent.pageX;
            let y = e.originalEvent.pageY;

            let largura = $(this).width();
            let altura = $(this).height();

            $(this).css("left", (x - largura/2)+"px");
            $(this).css("top", (y - altura/2)+"px");
        });
    });

    $("#objeto").on("mouseup", function() {
        $("#objeto").off("mousemove");
    });
 });