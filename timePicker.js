$(document).ready(function() {
    
    $("input").on("focus", function() {
        $(".hora-opcoes").show();
    });

    $("input").on("blur", function() {
        setTimeout(function() {
            $(".hora-opcoes").hide();
        },200);  
    });

    $("button").on("click", function() {
        let horaSelecionada = $(this).html();
        $("input").val(horaSelecionada);
    });
});