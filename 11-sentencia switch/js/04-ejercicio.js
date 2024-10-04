function menu () {

    let  menu =  document.getElementById("menu").value;
    let mostrar_resultado = document.getElementById("mostrar_resultado");
    switch (menu) {

    case  "1":
   mostrar_resultado.textContent = ("Cuenta de ahorros");
   menu_cuenta_ahorro = document.getElementById("menu_cuenta_ahorro").value;

   switch (menu_cuenta_ahorro) {

    case  "1":
        mostrar_resultado_ahorro.innerHTML = `
        <p>Depositar</p>
       
    `;

        mostrar_resultado_ahorro.textContent = ("Depositar");
    break;
    case  "2":
        mostrar_resultado_ahorro.textContent = ("Retirar.");
    break;
}


    break;
    case  "2":
        mostrar_resultado.textContent = ("Cuenta Corriente");
    break;
}



}