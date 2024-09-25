document.getElementById('hideButton').addEventListener('click', function() {
    document.getElementById('content').style.display = 'none'; // Oculta el contenido
    const flowers = document.getElementById('flowers');
    flowers.style.display = 'flex'; // Muestra el contenedor de flores

    // Hacer que las flores crezcan una por una
    const flowerElements = document.querySelectorAll('.flower');
    flowerElements.forEach((flower, index) => {
        setTimeout(() => {
            flower.style.opacity = '1'; // Muestra la flor
            flower.style.transform = 'scale(1)'; // Aumenta su tamaño
        }, index * 300); // Retraso para cada flor
    });
});


