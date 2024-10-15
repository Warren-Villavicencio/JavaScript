document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fetchDogButton').addEventListener('click', fetchDogImage);
});

function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('dogImage').src = data.message;
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud Fetch:', error);
        });
}