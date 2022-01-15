$(document).ready(function() {
    $("#botao-calculo").on("click", function() {
        let altura = $("#altura").val();
        altura = altura.replace(",",".");
        let peso = $("#peso").val();
        peso = peso.replace(",",".");
        let resultado = $("#resultado");
        let diagnostico;

        let imc = peso/(altura*altura);

        if (imc < 18.5) {
            diagnostico = "Magreza";
        } else if (imc >= 18.5 && imc < 24.9) {
            diagnostico = "Normal";
        } else if (imc >= 24.9 && imc < 30) {
            diagnostico = "Sobrepeso";
        } else if (imc >= 30) {
            diagnostico = "Obesidade";
        }
        resultado.html("O seu IMC é "+imc+" kg/m², e o diagnóstico é: "+diagnostico+".");
    });
});