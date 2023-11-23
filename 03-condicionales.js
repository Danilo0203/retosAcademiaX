const usuario = (edad, accion, par) => {
	if (typeof edad !== 'number') return console.log('Ingrese un numero');
	edad >= 18 
    ? console.log(`Eres mayor de edad`) 
    : console.log(`Eres menor de edad`);
    if(typeof accion !== 'string') return console.log(`Ingrese una acción valida`);
    let opcion = accion.toLocaleLowerCase()
    if (opcion === 'crear' || opcion === 'colocar' || opcion === 'actualizar' || opcion === 'borrar'){
        console.log(`La acción es: ${opcion}`);
    }else{
        console.log(`La acción ${opcion} no es valida`);
    }
    if(typeof par !== 'number') return console.log('Ingrese un numero');
    if(par % 2 ===0){
        console.log(`El numero ingresado ${par} es: par`);
    }else{
        console.log(`El numero ingresado ${par} es: impar`);
    }
};
usuario(12, 'CREAR', 23) // Eres menor de edad, La acción es: crear, El numero ingresado 23 es: impar
usuario(18, 'borrar', 10) // Eres mayor de edad, La acción es: borrar, El numero ingresado 10 es: par
usuario(22, 'actualizar', 11) // Eres mayor de edad, La acción es: actualizar, El numero ingresado 11 es: impar
usuario(17, 'COLOCAR', 100) // Eres menor de edad, La acción es: colocar, El numero ingresado 100 es: par
usuario(19, ['actualizar'], 100) // Eres mayor de edad, Ingrese una acción valida
usuario('20', 'crear', 100) // Ingrese un numero
usuario(20, 'crear', '100') // Eres mayor de edad, La acción es: crear, Ingrese un numero