let hambre = 100;
let sed = 100;
let refugio = false;

console.log("¡Has naufragado en una isla desierta!");

while (hambre > 0 && sed > 0) {
  console.log("¿Qué quieres hacer?");
  console.log("1. Buscar comida");
  console.log("2. Buscar agua");
  console.log("3. Construir un refugio");
  console.log("4. Explorar la isla");

  let opcion = prompt("Ingresa un número:");

  if (opcion === "1") {
    console.log("Encontraste algunos frutos. Tu hambre disminuyó.");
    hambre -= 20;
  } else if (opcion === "2") {
    console.log("Encontraste un manantial. Tu sed disminuyó.");
    sed -= 20;
  } else if (opcion === "3") {
    console.log("Construiste un refugio simple. Ahora estás protegido del clima.");
    refugio = true;
  } else if (opcion === "4") {
    console.log("Explorando la isla... ¡Encontraste una cueva misteriosa!");
    // Aquí puedes agregar más opciones y ramificaciones
  } else {
    console.log("Opción inválida.");
  }

  // Verificar si el jugador está a punto de morir de hambre o sed
  if (hambre <= 0) {
    console.log("Murió de hambre.");
    break;
  } else if (sed <= 0) {
    console.log("Murió de sed.");
    break;
  }
}