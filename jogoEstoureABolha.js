let placar = 0;

function criaBolha() {
    let x = Math.floor(Math.random()*800);
    let y = Math.floor(Math.random()*500);

    let bolha = $("<div class='bolha'></div>");

    bolha.css("left", x+ "px");
    bolha.css("top", y+ "px");

    bolha.on("click",function() {
        $(this).fadeOut("fast");
        placar++;
        atualizaPlacar();
    })

    $(document.body).append(bolha);
}

function atualizaPlacar() {
    $("#placar").html(placar);
}

$(document).ready(function() {
   $("#comecar").on("click", function() {
       setInterval(criaBolha, 1000);
   });
});