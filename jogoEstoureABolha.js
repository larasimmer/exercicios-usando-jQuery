function criaBolha() {
    let x = Math.floor(Math.random()*800);
    let y = Math.floor(Math.random()*500);

    let bolha = $("<div class='bolha'></div>")

    bolha.css("left", x+ "px");
    bolha.css("top", y+ "px");

    $(document.body).append(bolha);
}

$(document).ready(function() {
   $("#comecar").on("click", function() {
       setInterval(criaBolha, 1000);
   });

   $(".bolha").on("click", function() {
       $(this).fadeOut();
       let placar = $("#placar").html();
       placar = placar + 1;
   })
});