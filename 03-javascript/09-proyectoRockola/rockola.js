// Ejercicio: Rockola
// Lista de canciones para reproducir aleatoriamente
let canciones = ['cancion 1', 'cancion 2', 'cancion 3', 'cancion 4', 'cancion 5', 'cancion 6', 'cancion 7', 'cancion 8', 'cancion 9'];

// Función para reproducir canción aleatoria y eliminarla de la lista
const cancionAleatoria = () => {
	console.log(`Lista de canciones: ${canciones.join(', ')}`);
	// Guarda el número de canciones en una variable
	let cancionesNumero = canciones.length;
	// Genera un número aleatorio entre 1 y el número de canciones
	const cancionRandom = Math.ceil(Math.random() * cancionesNumero);
	// Elimina la canción aleatoria de la lista
	const cancionReproducir = canciones.splice(cancionRandom - 1, 1);
	// Retorna la canción a reproducir en formato string
	return cancionReproducir.toString();
};

// Creamos una lista de espera para las canciones que se reproducirán después de que termine la canción actual
let cancionesEsperar = [];
// Función para insertar la canción aleatoria en la lista de espera
const InsertarListaDeEspera = () => {
	// Guarda la canción aleatoria en una variable
	let cancionReproducir = cancionAleatoria();
	console.log(`Canción a reproducir: ${cancionReproducir}`);
	// Inserta la canción aleatoria en la lista de espera
	cancionesEsperar.push(cancionReproducir);
	console.log(`Lista de espera: ${cancionesEsperar.join(', ')}`);
	console.log('===================================================');
	return;
};

// Función para sacar la canción de la lista de espera e insertarla en la lista de canciones
let sacarCancionesListEspera = () => {
	// Guarda la primera canción de la lista de espera en una variable
	const primeraCancion = cancionesEsperar.shift();
	// Inserta la canción en la ultima posicion de la lista de canciones
	canciones.push(primeraCancion);
	// Imprime la lista de canciones
	InsertarListaDeEspera();
	return;
};

// Variable para contar el turno
let count = 0;
// Función que recibe la acción y el turno para reproducir la canción
const reproducirRockola = (accion, turno) => {
	// Si el contador es menor al turno, se inserta la canción en la lista de espera
	if (count < turno) {
		// Aumenta el contador
		count++;
		switch (accion) {
			case 'play':
				InsertarListaDeEspera();
				break;
		}
	} else {
		// Si el contador es igual al turno, se saca la canción de la lista de espera
		// y se inserta en la lista de canciones
		sacarCancionesListEspera();
	}
};

// Función para reiniciar la rockola y volver a preguntar
const reiniciarRockola = () => {
	console.log('Rockola Reiniciada');
	count = 0; // Reinicia el contador
	canciones = ['cancion 1', 'cancion 2', 'cancion 3', 'cancion 4', 'cancion 5', 'cancion 6', 'cancion 7', 'cancion 8', 'cancion 9']; // Reinicia la lista de canciones
	cancionesEsperar = []; // Limpia la lista de espera
	IniciarRockola(); // Reinicia el proceso de preguntas
};

let turno = ''; // Variable para almacenar el turno

const preguntarTurno = () => {
	// Pregunta el turno
	turno = prompt('Ingrese un turno');
};

let accion = ''; // Variable para almacenar la acción
// Función para iniciar la rockola
const IniciarRockola = () => {
	while (true) {
		// Pregunta la acción a realizar
		let accion = prompt('Ingrese una acción: "Play", "Stop" o "Turno"');
		// Convierte la acción a minúsculas y elimina los espacios en blanco
		accion = accion.toLowerCase().trim();
		// Evalúa la acción ingresada y ejecuta la función correspondiente
		switch (accion) {
			// Si la acción es play, se ejecuta la función reproducirRockola
			case 'play':
				// Si no se ha ingresado un turno, se pregunta
				if (!turno) {
					preguntarTurno();
				}
				reproducirRockola(accion, turno);
				break;
			// Si la acción es stop, se ejecuta la función reiniciarRockola
			case 'stop':
				console.log('Rockola en pausa...');
				// Pregunta si se desea reproducir nuevamente
				let respuesta = prompt('¿Quiere dar "play" de nuevo? (Sí / No)');
				// Convierte la respuesta a minúsculas y elimina los espacios en blanco
				respuesta = respuesta.toLowerCase().trim();
				// Si la respuesta es sí, se ejecuta la función IniciarRockola
				// Si la respuesta es no, se sale de la función
				if (respuesta === 'sí' || respuesta === 'si') {
					IniciarRockola(); // Reinicia el proceso de preguntas si se desea reproducir nuevamente
				} else {
					return; // Sale de la función si no se desea reproducir nuevamente
				}
				break;
			// Si la acción es turno, se ejecuta la función preguntarTurno y reiniciarRockola
			case 'turno':
				preguntarTurno();
				reiniciarRockola();
				break;
			// Si la acción no es válida, se imprime un mensaje en consola
			default:
				console.log('Acción no válida. Por favor, ingrese "Play", "Stop" o "Turno".');
				break;
		}
	}
};
IniciarRockola();
