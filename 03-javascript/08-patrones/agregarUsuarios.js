// Array para alamencenar los usuarios
let usuarios = []

// funcion para añadir usuarios al array
export const nuevoUsuario = (usuario)=>{
  usuarios.push(usuario)
}

// Funcion que muestra en lista los usuarios
export const lista = ()=>{
  usuarios.forEach(item =>console.log(item))
}