/* Utiliza una función flecha que permita validar si un formulario cuenta con los valores de "nombre", "email" 
y "mensaje" y otra función para enviarlo, debes imprimir en la consola "¡Formulario enviado con éxito!", 
de lo contrario imprime "Por favor completa todos los campos." */
const formulario = ({ nombre, email, mensaje }, enviar) => {
	const expresiones = {
		nombre: /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?: [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$/,
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	};
	let validacion = false;
	if (!expresiones.correo.test(email)) {
		console.log(`El email: ${email} no es valido`);
		validacion = true;
	} else if (!expresiones.nombre.test(nombre)) {
		console.log(`El nombre: ${nombre} no es valido`);
		validacion = true;
	} else if (typeof mensaje !== 'string') {
		console.log(`El mensaje: ${mensaje} no es valido`);
		validacion = true;
	}
	enviar(validacion);
};

const enviarFormulario = (validacion) => {
	if (!validacion) {
		console.log('¡Formulario enviado con éxito!');
	} else {
		console.log('Por favor completa todos los campos');
	}
};

const mensajeFormulario = {
	nombre: 'Danilo',
	email: 'correo@correo.com',
	mensaje: 'Hola mundo',
};

formulario(mensajeFormulario, enviarFormulario);
