/**
 *
 * @param {String} correo
 * @returns true si el correo es valido, false si es invalido
 */
export const validarCorreo = (correo) => {
	// Expresión regular para validar un correo electrónico
	const expRegCorreo = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;
	return expRegCorreo.test(correo);
};
