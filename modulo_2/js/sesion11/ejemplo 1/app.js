function hacerLlamadaAPI(url, callback) {
    // Simulando una solicitud a la API
    setTimeout(function() {
      const datos = "Respuesta de la API";
      callback(datos); // Llamando al callback con los datos recibidos
    }, 1000); // Simulamos un retraso de 1 segundo
  }
  
  function manejarRespuesta(datos) {
    console.log("Recibidos los datos de la API:", datos);
  }
  
  hacerLlamadaAPI("https://ejemplo-api.com", manejarRespuesta);