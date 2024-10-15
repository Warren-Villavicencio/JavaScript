const dogImage = document.getElementById('dogImage');
const newDogButton = document.getElementById('newDogButton');

const fetchDogImage = async () => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        dogImage.src = response.data.message;
    } catch (error) {
        console.error('Error fetching dog image:', error);
    }
};

newDogButton.addEventListener('click', fetchDogImage);

// Cargar una imagen al iniciar
fetchDogImage();