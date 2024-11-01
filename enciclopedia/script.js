<script>
        // Módulo de configuración
        const Config = {
            // Constantes y configuraciones de las APIs
            PIXABAY_API_KEY: '46850860-9982aae93ec93ab915561d6b1',
            PIXABAY_API_URL: 'https://pixabay.com/api/',
            PIXABAY_VIDEO_API_URL: 'https://pixabay.com/api/videos/',
            WIKIPEDIA_API_URL: 'https://es.wikipedia.org/w/api.php',
        };

        // Interface para servicios de API (Principio de Segregación de Interfaces)
        class APIService {
            async fetch(url, params) {
                try {
                    const response = await fetch(url + '?' + new URLSearchParams(params));
                    if (!response.ok) throw new Error('Error en la petición');
                    return await response.json();
                } catch (error) {
                    throw new Error(`Error en la petición: ${error.message}`);
                }
            }
        }

        // Clase para manejar peticiones a Wikipedia (Principio de Responsabilidad Única)
        class WikipediaService extends APIService {
            async search(query) {
                const params = {
                    action: 'query',
                    format: 'json',
                    origin: '*',
                    list: 'search',
                    srsearch: query,
                    utf8: 1,
                    srlimit: 1
                };

                const data = await this.fetch(Config.WIKIPEDIA_API_URL, params);
                return data.query.search[0];
            }

            async getContent(pageId) {
                const params = {
                    action: 'query',
                    format: 'json',
                    origin: '*',
                    pageids: pageId,
                    prop: 'extracts',
                    explaintext: true,
                    exintro: true
                };

                const data = await this.fetch(Config.WIKIPEDIA_API_URL, params);
                return data.query.pages[pageId].extract;
            }
        }

        // Clase para manejar peticiones a Pixabay (Principio de Responsabilidad Única)
        class PixabayService extends APIService {
            async searchImages(query) {
                const params = {
                    key: Config.PIXABAY_API_KEY,
                    q: query,
                    per_page: 6,
                    lang: 'es'
                };

                const data = await this.fetch(Config.PIXABAY_API_URL, params);
                return data.hits;
            }

            async searchVideos(query) {
                const params = {
                    key: Config.PIXABAY_API_KEY,
                    q: query,
                    per_page: 4,
                    lang: 'es'
                };

                const data = await this.fetch(Config.PIXABAY_VIDEO_API_URL, params);
                return data.hits;
            }
        }

        // Clase para manejar la interfaz de usuario (Principio de Responsabilidad Única)
        class UIManager {
            constructor() {
                this.wikiResults = document.getElementById('wikiResults');
                this.imageGallery = document.getElementById('imageGallery');
                this.videoGallery = document.getElementById('videoGallery');
            }

            showLoading(element) {
                element.innerHTML = '<div class="loading">Cargando...</div>';
            }

            showError(element, message) {
                element.innerHTML = `<div class="error">${message}</div>`;
            }

            displayWikiContent(content) {
                this.wikiResults.innerHTML = `<p>${content}</p>`;
            }

            displayImages(images) {
                this.imageGallery.innerHTML = images.map(image => `
                    <div class="image-item">
                        <img src="${image.webformatURL}" alt="${image.tags}">
                    </div>
                `).join('');
            }

            displayVideos(videos) {
                this.videoGallery.innerHTML = videos.map(video => `
                    <div class="video-item">
                        <video controls>
                            <source src="${video.videos.medium.url}" type="video/mp4">
                            Tu navegador no soporta videos HTML5.
                        </video>
                    </div>
                `).join('');
            }
        }

        // Clase principal de la aplicación (Principio de Inversión de Dependencias)
        class EncyclopediaApp {
            constructor(wikiService, pixabayService, uiManager) {
                this.wikiService = wikiService;
                this.pixabayService = pixabayService;
                this.ui = uiManager;
                this.setupEventListeners();
            }

            setupEventListeners() {
                document.getElementById('searchForm').addEventListener('submit', async (e) => {
                    e.preventDefault();
                    const query = document.getElementById('searchInput').value.trim();
                    if (query) {
                        await this.performSearch(query);
                    }
                });
            }

            async performSearch(query) {
                // Mostrar estado de carga
                this.ui.showLoading(this.ui.wikiResults);
                this.ui.showLoading(this.ui.imageGallery);
                this.ui.showLoading(this.ui.videoGallery);

                try {
                    // Realizar búsquedas en paralelo
                    const [wikiResult, images, videos] = await Promise.all([
                        this.searchWikipedia(query),
                        this.pixabayService.searchImages(query),
                        this.pixabayService.searchVideos(query)
                    ]);

                    // Actualizar la interfaz con los resultados
                    this.ui.displayWikiContent(wikiResult);
                    this.ui.displayImages(images);
                    this.ui.displayVideos(videos);
                } catch (error) {
                    console.error('Error en la búsqueda:', error);
                    this.ui.showError(this.ui.wikiResults, 'Error al cargar la información');
                }
            }

            async searchWikipedia(query) {
                const searchResult = await this.wikiService.search(query);
                return await this.wikiService.getContent(searchResult.pageid);
            }
        }

        // Inicialización de la aplicación
        document.addEventListener('DOMContentLoaded', () => {
            const app = new EncyclopediaApp(
                new WikipediaService(),
                new PixabayService(),
                new UIManager()
            );
        });
   