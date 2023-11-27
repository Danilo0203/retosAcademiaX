/* creando una función que permita obtener los datos de 
la API "https://jsonplaceholder.typicode.com/posts" utilizando fetch. 
Después crea una función que muestre los datos obtenidos en la consola 
después de un cierto tiempo. */

// petición a la API con fetch y async/await
const peticion = async () => {
	const url = 'https://jsonplaceholder.typicode.com/posts';
	try {
		const respuesta = await fetch(url);
		const data = await respuesta.json();
		return data;
	} catch (err) {
		console.log('Error de peticion', err);
	}
};

// función que muestra los datos obtenidos en la consola después de un cierto tiempo
const datos = async (resultados, id) => {
	// busca el id en el array de objetos resultados y mostrarlo en la consola
	const buscar = resultados.find((ids) => ids.id === id);
	setTimeout(() => {
		// si existe el id en el array de objetos resultados, mostrarlo en la consola
		if (buscar) return console.log(resultados[id - 1]);
		// si no existe el id en el array de objetos resultados, mostrar mensaje en la consola
		console.log(`No existe el id ${id}`);
	}, 2000);
};

// función que inicia la solicitud a la API
const imprimirId = async (id) => {
	// mensaje de inicio de la solicitud a la API
	console.log('Iniciando solicitud a la API...');
	try {
		// se almacena en una constante el resultado de la función peticion
		const resultado = await peticion();
		// se ejecuta la función datos con los parámetros resultado e id
		datos(resultado, id);
	} catch (err) {
		// si hay un error, mostrarlo en la consola
		console.log(err);
	}
};
// se ejecuta la función imprimirId con el parámetro 1
imprimirId(1); // Mostar el objeto cuyo id es 1
