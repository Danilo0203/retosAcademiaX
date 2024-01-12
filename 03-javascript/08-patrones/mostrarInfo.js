import { lista, nuevoUsuario } from "./agregarUsuarios.js"

// Clase para mostrar informacion de los usuarios
export class MostrarUsuarios{
  // Metodo para añadir nuevos usuarios
  agregarUsuario(usuario){
    nuevoUsuario(usuario)
    console.log(`Usuario '${usuario}' agregado`);
  }
  // Metodo para mostrar la lista de usarios
  listaDeUsuarios(){
    console.log('Lista de usuarios: ');
    lista()
  }
}
