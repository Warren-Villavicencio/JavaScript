function calcular_circunferencia (diametro) {
    
return ma(Math.PI * diametro)

}

function mostar_resulatdo (){
let diametro = document.getElementById("diametro");
let resultado = document.getElementById("resultado_mensaje");
let opreacion = calcular_circunferencia(diametro.value);
resultado.textContent = opreacion;
}