import { MostrarUsuarios } from "./mostrarInfo.js"

const nuevosUsuarios = new MostrarUsuarios()
nuevosUsuarios.agregarUsuario('Maria')
nuevosUsuarios.agregarUsuario('Juan')
nuevosUsuarios.agregarUsuario('Pedro')
nuevosUsuarios.listaDeUsuarios()