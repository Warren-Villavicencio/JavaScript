class Persona {
    constructor(nombre) {
      this._nombre = nombre;
    }
  
    get nombre() {
      return this._nombre.toUpperCase(); // Convertir el nombre a mayúsculas al obtenerlo
    }
  
    set nombre(nuevoNombre) {
      if (nuevoNombre.length > 0) {
        this._nombre = nuevoNombre;
      } else {
        console.error("El nombre no puede estar vacío");
      }
    }
  }
  
  const persona1 = new Persona("Juan");
  console.log(persona1.nombre); // Imprime: JUAN
  
  persona1.nombre = "Ana";
  console.log(persona1.nombre); // Imprime: ANA
  
  persona1.nombre = ""; // No se asigna porque está vacío