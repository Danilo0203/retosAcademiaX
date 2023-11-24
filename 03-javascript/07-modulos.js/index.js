import { validarCorreo } from './validacionCorreo.js';

/* Crea una función que permita verificar si un correo electrónico 
es valido o invalido. Después utiliza esta función en un archivo diferente. */
const correo = (correo) => {
	validarCorreo(correo)
		 // Si el correo cumple con la expresión regular, entonces es valido
		 ? console.log(`El correo ${correo} es valido`)
		 // Si el correo no cumple con la expresión regular, entonces es invalido
		 : console.log(`El correo ${correo} es invalido`);
};
correo('correo@correo.com'); // El correo correo@correo.com es valido
correo('correo.com'); // El correo correo.com es invalido
correo('correo@correo'); // El correo correo@correo es invalido
correo('correo@.com'); // El correo correo@.com es invalido