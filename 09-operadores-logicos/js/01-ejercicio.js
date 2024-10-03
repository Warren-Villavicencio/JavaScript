// AND (&&)
let edad = 25;
let tieneLicencia = true;

if (edad >= 18 && tieneLicencia) {
  console.log("Puedes conducir");
} else {
  console.log("No puedes conducir");
}

// OR (||)
let esDia = true;
let estaLloviendo = false;

if (esDia || !estaLloviendo) {
  console.log("Podemos salir a caminar");
}

// NOT (!)
let estaConectado = false;

if (!estaConectado) {
  console.log("Debes conectarte a internet");
}