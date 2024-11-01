// Obtener referencias a los elementos del DOM
const galleryImages = document.querySelectorAll('.gallery-image');
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('img01');
const span = document.getElementsByClassName("close")[0];

// Función para mostrar la imagen modal
const showModal = (imgSrc) => {
    modal.style.display = "block";
    modalImg.src = imgSrc;
}

// Función para cerrar la modal
const closeModal = () => {
    modal.style.display = "none";
}

// Agregar un evento de clic a cada imagen de la galería
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        showModal(image.src);
    });
});

// Cerrar la modal al hacer clic en la 'x'
span.onclick = function() {
  modal.style.display = "none";
}