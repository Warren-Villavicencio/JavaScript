function simularClima() {
    // Generar condiciones climáticas aleatorias
    const temperatura = Math.floor(Math.random() * 40) + 10; // Entre 10 y 50 grados
    const humedad = Math.floor(Math.random() * 100) + 1; // Entre 1 y 100%
    const probabilidadLluvia = Math.floor(Math.random() * 100) + 1; // Entre 1 y 100%
  
    r
    console.log("Temperatura:", temperatura, "°C");
    console.log("Humedad:", humedad, "%");
    console.log("Probabilidad de lluvia:", probabilidadLluvia, "%");
  
    // Recomendaciones basadas en el clima
    if (temperatura >= 30 && humedad >= 70) {
      console.log("¡Hace mucho calor y humedad! Usa ropa ligera y bebe mucha agua. Evita actividades al aire libre en las horas pico.");
    } else if (temperatura >= 20 && probabilidadLluvia >= 50) {
      console.log("Se esperan lluvias. Lleva un paraguas y un impermeable. Puedes aprovechar para quedarte en casa y leer un libro.");
    } else if (temperatura >= 10 && temperatura < 20) {
      console.log("El clima es fresco. Usa una chaqueta ligera y disfruta de un paseo al aire libre.");
    } else {
      console.log("Hace frío. Abriga bien y considera actividades en interiores.");
    }
  }
  
  simularClima();