/* Creamos una clase llamada "Vehiculo" que reciba como 
parámetro el número de ruedas */
class Vehiculo {
	constructor(ruedas) {
		this.ruedas = ruedas;
	}
	// Creamos un método que nos permita obtener el número de ruedas
	get numRuedas() {
		return `Este vehiculo tiene ${this.ruedas} ruedas`;
	}
	// Creamos un método que nos permita actualizar el número de ruedas
	set actualizarRuedas(ruedas) {
		this.ruedas = ruedas;
	}
}

// Creamos una clase llamada "Capacidad" que herede de "Vehiculo"
// y reciba como parámetro el número de ruedas y la capacidad
class Capacidad extends Vehiculo {
	constructor(ruedas, capacidad) {
		super(ruedas);
		this.capacidad = capacidad;
	}
	// Creamos un método que nos permita obtener el número de ruedas y la capacidad
	get detalles() {
		console.log(`${this.numRuedas}. Puede transportar ${this.capacidad} pasajeros`);
	}
	// Creamos un método que nos permita actualizar la capacidad
	set actualizarCapacidad(capacidad) {
		this.capacidad = capacidad;
	}
}

// Creamos una clase llamada "Tipo" que herede de "Vehiculo"
// y reciba como parámetro el número de ruedas, el transporte y el tipo
class Tipo extends Vehiculo {
	constructor(ruedas, transporte, tipo) {
		super(ruedas);
		this.transporte = transporte;
		this.tipo = tipo;
	}
	// Creamos un método que nos permita obtener el número de ruedas, el transporte y el tipo
	get detallesPersonalizados() {
		console.log(`${this.numRuedas}. Es una ${this.transporte} de tipo ${this.tipo}`);
	}
	// Creamos un método que nos permita actualizar el transporte
	set actualizarTransporte(transporte) {
		this.transporte = transporte;
	}
	// Creamos un método que nos permita actualizar el tipo
	set actualizarTipo(tipo) {
		this.tipo = tipo;
	}
}
const carro = new Capacidad(4, 5);
carro.detalles; // 'Este vehiculo tiene 4 ruedas. Puede transportar 5 pasajeros'
carro.actualizarCapacidad = 8;
carro.actualizarRuedas = 6;
carro.detalles; // 'Este vehiculo tiene 6 ruedas. Puede transportar 8 pasajeros'
const bicicleta = new Tipo(2, 'bicicleta', 'montaña');
bicicleta.detallesPersonalizados; // 'Este vehiculo tiene 2 ruedas. Es una bicicleta de tipo montaña'
bicicleta.actualizarTransporte = 'Cuatrimoto';
bicicleta.actualizarRuedas = 4;
bicicleta.actualizarTipo = 'Todo Terreno';
bicicleta.detallesPersonalizados; // 'Este vehiculo tiene 4 ruedas. Es una Cuatrimoto de tipo Todo Terreno'
