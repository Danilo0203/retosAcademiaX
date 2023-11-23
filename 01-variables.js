let nombre = 'juan';
console.log(`¡Hola Mundo! soy ${nombre}`); // Hola Mundo soy juan
console.log(`Mi nombre es mayúsculas es: ${nombre.toLocaleUpperCase()}`); // Mi nombre en mayúsculas es: JUAN
console.log(`Mi nombre en minúsculas es: ${nombre.toLocaleLowerCase()}`); // Mi nombre en minúsculas es: juan

let mensaje = '¡Hola Mundo!';
console.log(`El mensaje de '${mensaje}' tiene ${mensaje.length} caracteres.`); // El mensaje de '¡Hola Mundo!' tiene 12 caracteres.

let num = [1, 2, 3, 4, 5];
console.log(`El tercer numero del array con los valores '${num}' es: ${num.find((elem, index) => index === 2)}`); // El tercer numero del array con los valores '1,2,3,4,5' es: 3
console.log(`Se añade el numero que sigue en orden al final del arreglo y es: ${num.push(6)}`); // Se añade el numero que sigue en orden al final del arreglo y es: 6
let texto = 'La lluvia es Sevilla es una maravilla';
console.log(`Se encontró el patrón '${texto.match('lluvia')}' en el texto ${texto}, por lo que el resultado es: ${texto.match('lluvia')}`); // Se encontró el patrón 'lluvia' en el texto La lluvia es Sevilla es una maravilla, por lo que el resultado es: lluvia

