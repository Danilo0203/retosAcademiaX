let num = {
	a: 1,
	b: 2,
};
let obj1 = {
	nombre: 'Danilo',
	edad: 22,
};
let obj2 = {
	nombre: 'Danilo',
	edad: 22,
};
console.log(`¿El numero ${num.a} es mayor que el numero ${num.b}? ${num.a > num.b}`); // ¿El numero 1 es mayor que el numero 2? false
console.log(`¿El numero ${num.a} es menor que el numero ${num.b}? ${num.a < num.b}`); // ¿El numero 1 es menor que el numero 2? true
console.log(`¿El numero ${num.a} es igual al numero ${num.b}? ${num.a === num.b}`); // ¿El numero 1 es igual al numero 2? false
console.log(`¿Los objetos son iguales? ${obj1 === obj2}`); // ¿Los objetos son iguales? false
console.log(`AND lógico: ${num.a > 0 && num.b > 2}`); // AND lógico: false
console.log(`OR lógico: ${num.a > 0 || num.b > 2}`); // OR lógico: true
console.log(`La suma de 10  + 3: ${10 + 3}`); // La suma de 10  + 3: 13
console.log(`La resta de 10 - 3: ${10 - 3}`); // La resta de 10 - 3: 7
console.log(`La multiplicación de 10 * 3: ${10 * 3}`); // La multiplicación de 10 * 3: 30
console.log(`La división de 10 / 3: ${10 / 3}`); // La división de 10 / 3: 3.3333333333333335
console.log(`10 modulo de 3: ${10 % 3}`); // 10 modulo de 3: 1
