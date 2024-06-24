// Obtener datos de desastres activos desde una fuente confiable (API o web scraping)
const obtenerDesastresActivos = async () => {
    // Implementar la lógica para obtener los datos de desastres activos
    // Ejemplo: consultar una API o realizar web scraping
    const respuesta = await fetch('https://cnnespanol.cnn.com/category/desastres-naturales/');
    const datos = await respuesta.json();
    return datos;
};

// Actualizar la página con la información de los desastres activos
const actualizarPagina = async () => {
    const desastresActivos = await obtenerDesastresActivos();

    // Actualizar el mapa interactivo con la ubicación de los desastres
    // ...

    // Actualizar la lista de desastres activos
    const listaDesastres = document.getElementById('lista-desastres');
    listaDesastres.innerHTML = ''; // Limpiar la lista existente
    desastresActivos.forEach(desastre => {
        const elementoLista = document.createElement('li');
        elementoLista.innerHTML = `
            <h3>${desastre.nombre}</h3>
            <p>Ubicación: ${desastre.ubicacion}</p>
            <p>Tipo: ${desastre.tipo}</p>
            <p>Fecha y hora: ${desastre.fechaHora}</p>
            <a href="${desastre.enlace}">Más información</a>
        `;
        listaDesastres.appendChild(elementoLista);
    });
};

// Actualizar la página cada cierto tiempo (por ejemplo, cada 5 minutos)
setInterval(actualizarPagina, 300000); // 5 minutos en milisegundos

// Inicializar la página al cargarse
window.onload = actualizarPagina;
