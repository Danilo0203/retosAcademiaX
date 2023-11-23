// 1. Imprime los números del 1 al 5

for (let i = 0; i <= 5; i++) {
	console.log(i);
}
// 2. Recorre una lista de colores
let colors = ['rojo', 'verde', 'azul', 'amarillo'];
for (const color of colors) {
	console.log(color);
}
// 3. Recorre las propiedades de un objeto persona
let persona = {
	nombre: 'Danilo',
	edad: 22,
	profesion: 'Desarrollador Fullstack',
};
for (const key in persona) {
	console.log(key + ': ' + persona[key]);
}

// 4. Encuentra el número más cercano al cuadrado de 100
let numero = 1;
while (Math.pow(numero, 2) <= 100) {
	numero++;
}
numero--;
console.log('El número más cercano a 100 cuyo cuadrado es menor que 100 es: ' + numero);

// 5. Imprime los números pares hasta el 10, imprimiendo al menos uno.
numero = 1;
do {
	if (numero % 2 === 0) {
		console.log(numero);
	}
	numero++;
} while (numero <= 10);
