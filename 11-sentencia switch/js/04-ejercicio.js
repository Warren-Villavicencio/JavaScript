function menu () {

    let  menu =  document.getElementById("menu").value;
    let mostrar_resultado = document.getElementById("mostrar_resultado");
    switch (menu) {

    case  "1":
   mostrar_resultado.textContent = ("Cuenta de ahorros");
    break;
    case  "2":
        mostrar_resultado.textContent = ("Cuenta Corriente");
    break;
}



}