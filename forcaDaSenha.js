$(document).ready(function() {
    $("#senha").on("keyup", function() {
        let textoDaSenha = $("#senha").val();
        let forca = 0;

    if (textoDaSenha.length >= 6) {
        forca += 25;
    };

    let reg1 = new RegExp(/[a-z]/i);
    if(reg1.test(textoDaSenha)) {
        forca += 25;
    };

    let reg2 = new RegExp(/[0-9]/i);
    if(reg2.test(textoDaSenha)) {
        forca += 25;
    };

    let reg3 = new RegExp(/[^a-z0-9]/i);
    if(reg3.test(textoDaSenha)) {
        forca += 25;
    };

    $("#forca").html("Força: " +forca);
    });
});

