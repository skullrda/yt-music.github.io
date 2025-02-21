const ch_trance = {
	'Dark Minimal Techno': 'i3sD9iUSiaU',
	'Dark Monkey Music': '4cen6pwwCdc',
	'Vocal Trance Radio': 'DPXQG8S9Xwc',
	'DJ Phalanx Trance Radio': 'fTrMgP0YzDg'
};

const ch_80s90s = {
	'Pop Latino 2025': 'W89gn1X06VQ',
	'Pop Latino': '4Iv5rEtUykM',
	'Radio 2000s Hits': 'heLes4zu3SE',
	'Radio 70s80s Mix': '_kDdKzJ6gLg',
	'Radio 90s Mix': 'bwBV2m0xxaY',
	'Radio Hits Music': '8M0AvPvPg0A',
	'Tomorrowland': 'UL0PoqHnKOE',
	'Live POP Radio': 'TtNXER1Cgzo',
	'Spinnin Records - Dance Music': 'xf9Ejt4OmWQ'
};

const ch_relax = {
	'Deep House Radio': 'IkmLXvBfVv0',
	'Lofi Girl': 'P6Segk8cr-c',
	'We Are Diamond Winter Vibes': '8PjCo5t8V9o',
	'We Are Diamond Winter Chillout': '5W3niGQWM10',
	'We Are Diamond Chillout': 'sgEJ4sOwboM',
	'Indie Melody - Start Your Day': 'V3pu8c9tx8Q',
	'Indie Melody - Good Day': 'Iq4AMxBOE0M'
};

function mostrarlistas(elementox, const_ch) {
	const channelList = document.getElementById(elementox);
	channelList.innerHTML = '';

	Object.keys(const_ch).forEach(channelTitle => {
		const channelUrl = const_ch[channelTitle];

		const listItem = document.createElement('li');
		listItem.innerHTML = `
		 <a href="#" onclick="AbrirPagina('${channelUrl}');return false">${channelTitle}</a>
		`;

		channelList.appendChild(listItem);
	});
}

// Función para obtener la hora actual
function actualizarHora() {
		const relojElemento = document.getElementById('reloj');
		const ahora = new Date();

		let horas = ahora.getHours();
		let minutos = ahora.getMinutes();
		let segundos = ahora.getSeconds();

		// Añadir un cero delante si los minutos o segundos son menores a 10
		minutos = minutos < 10 ? '0' + minutos : minutos;
		segundos = segundos < 10 ? '0' + segundos : segundos;

		const horaActual = `${horas}:${minutos}:${segundos}`;
		relojElemento.textContent = horaActual;
}

// Función para obtener la fecha actual
function mostrarFecha() {
		const fechaElemento = document.getElementById('fecha');
		const fechaActual = new Date();

		// Formatear la fecha (día, mes, año)
		const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opciones);

		// Insertar la fecha en el elemento HTML
		fechaElemento.textContent = fechaFormateada;
}

function delseleccionx() {
	const listItems = document.querySelectorAll('li');
	// Iterate over each <li> element and remove the class
	listItems.forEach(li => {
			li.classList.remove('seleccionado');
	});	
}

function seleccionx(listax) {
	// Obtener todos los elementos <li>
	const items = document.querySelectorAll(listax);

	// Agregar un evento click a cada <li>
	items.forEach(item => {
			item.addEventListener('click', () => {
				delseleccionx();
				// Agregar la clase 'seleccionado' al elemento clicado
				item.classList.add('seleccionado');
			});
	});
}

actualizarHora();	// Actualizar la hora inmediatamente al cargar la página
setInterval(actualizarHora, 1000);	// Actualizar la hora cada segundo (1000 ms)
mostrarFecha();	// Llamar a la función cuando se cargue la página

mostrarlistas("lista-trance", ch_trance); 
seleccionx('#lista-trance li');

mostrarlistas("lista-80s90s", ch_80s90s);
seleccionx('#lista-80s90s li');

mostrarlistas("lista-relax", ch_relax);
seleccionx('#lista-relax li');