function sumar(numero_uno,numero_dos){
    resultado = +numero_uno * +numero_dos;
    return resultado;
        }
    
        function mostar_resulatdo(){
    let numero_uno = document.getElementById("numero_uno");
    let numero_dos = document.getElementById("numero_dos");
    let resultado = document.getElementById("resultado_mensaje");
    let suma_ingreso = sumar(numero_uno.value,numero_dos.value);
    resultado.textContent = suma_ingreso;
        }