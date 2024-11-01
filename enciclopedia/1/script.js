document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    fetchWikipediaData(query);
});

async function fetchWikipediaData(query) {
    const url = `https://es.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json&origin=*`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResults(data.query.search);
    } catch (error) {
        console.error('Error fetching data from Wikipedia:', error);
    }
}

function displayResults(results) {
    const container = document.getElementById('resultsContainer');
    container.innerHTML = ''; // Limpiar resultados anteriores
    results.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result';
        resultDiv.innerHTML = `
            <h2>${result.title}</h2>
            <p>${result.snippet}...</p>
            <a href="https://es.wikipedia.org/wiki/${encodeURIComponent(result.title)}" target="_blank">Leer más</a>
        `;
        container.appendChild(resultDiv);
    });
}