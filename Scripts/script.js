fetch('/Componentes/contenido.json')
  .then(response => response.json()) // Convertir la respuesta a JSON
  .then(data => {
    // Insertar el contenido en el HTML
    const contenidoDiv = document.getElementById('contenido');

    // Iterar sobre cada objeto en el array de enunciados
    data.forEach(enunciado => {
      const enunciadoId = enunciado.titulo.replace(/\s+/g, '_'); // Reemplazar espacios con _
      let htmlContent = `
        <h2 id="${enunciadoId}">${enunciado.titulo}</h2>
        <p>${enunciado.contenido}</p>
      `;

      // Verificar y agregar sub-apartados si existen
      if (enunciado.sub_apartados) {
        enunciado.sub_apartados.forEach(sub => {
          const subId = sub.titulo.replace(/\s+/g, '_'); // Reemplazar espacios con _
          htmlContent += `
            <h3 id="${subId}">${sub.titulo}</h3>
            <p>${sub.contenido}</p>
          `;

          // Verificar y agregar sub-sub-apartados si existen
          if (sub.sub_sub_apartados) {
            sub.sub_sub_apartados.forEach(subsub => {
              const subsubId = subsub.titulo.replace(/\s+/g, '_'); // Reemplazar espacios con _
              htmlContent += `
                <h4 id="${subsubId}">${subsub.titulo}</h4>
                <p>${subsub.contenido}</p>
              `;
            });
          }
        });
      }

      contenidoDiv.innerHTML += htmlContent;
    });
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });
