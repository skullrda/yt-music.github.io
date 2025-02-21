// Obtener elementos del DOM Pagina
const CerrarPagina = document.getElementById('cerrar-pagina');
const VentanaPagina = document.getElementById('ventana-pagina');
const iframe = document.getElementById('frame-pagina');
const overlay = document.getElementById('overlay');

// Función para abrir la ventana flotante Pagina
function AbrirPagina(urlx) {
		const pageUrl = 'https://www.youtube.com/embed/' + urlx + '?rel=0&autoplay=1&controls=0'
		VentanaPagina.style.display = 'block';
		overlay.style.display = 'block';
		iframe.src = pageUrl; // Cargar la página en el iframe
}

// Función para cerrar la ventana flotante
function CerrarVentanaPagina() {
		VentanaPagina.style.display = 'none';
		overlay.style.display = 'none';
		iframe.src = ''; // Limpiar el iframe al cerrar
}

// Evento para cerrar la ventana flotante
CerrarPagina.addEventListener('click', CerrarVentanaPagina);

function iframeReady(iframeSelector, callback) {
		const iframe = document.querySelector(iframeSelector);

		if (!iframe) {
				console.error('El iframe no fue encontrado.');
				return;
		}

		if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
				callback();
		} else {
				iframe.addEventListener('load', function() {
						callback();
				});
		}
}

// Usar la función iframeReady
iframeReady('#frame-pagina', function() {
		console.log('El iframe está listo.');
});
