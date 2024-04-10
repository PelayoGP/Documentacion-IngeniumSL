fetch('/contenido.json')
  .then(response => response.json()) // Convertir la respuesta a JSON
  .then(data => {
    // Insertar el contenido en el HTML
    const contenidoDiv = document.getElementById('contenido');

    // Iterar sobre cada objeto en el array de enunciados
    data.forEach(enunciado => {
      const enunciadoId = enunciado.titulo.replace(/\s+/g, '_'); // Reemplazar espacios con _
      contenidoDiv.innerHTML += `
        <h2 id="${enunciadoId}">${enunciado.titulo}</h2>
        <p>${enunciado.contenido}</p>
      `;
    });
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });