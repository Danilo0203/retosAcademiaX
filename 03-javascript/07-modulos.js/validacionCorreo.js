/**
 *
 * @param {String} correo
 * @returns true si el correo es valido, false si es invalido
 */
export const validarCorreo = (correo) => {
    // Expresión regular para validar un correo electrónico
	const expRegCorreo = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;
    // Si el correo cumple con la expresión regular, entonces es valido
	if (expRegCorreo.test(correo)) {
		console.log(`El correo ${correo} es valido`);
		return;
        // Si el correo no cumple con la expresión regular, entonces es invalido
	} else {
		console.log(`El correo ${correo} es invalido`);
	}
};
