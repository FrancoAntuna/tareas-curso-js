const ingresoDatos = document.querySelector('#Ingresar')

ingresoDatos.onclick = function () {
  const textoEdad = document.querySelector('#edad-usuario').value
  const nombreDeUsuario = document.querySelector('#primer-nombre').value
  const segundoNombreUsuario = document.querySelector('#segundo-nombre').value
  const apellido = document.querySelector('#apellido-usuario').value

  let bienvenidoUsuario = 'Bienvenido ' + nombreDeUsuario
  let datosUsuario = nombreDeUsuario + " " + segundoNombreUsuario + " " + apellido
  document.querySelector('#bienvenido').innerText = bienvenidoUsuario
  document.querySelector('#tabla-datos-usuario').innerText = "Nombre completo: " + datosUsuario + " Edad: " + textoEdad
  return false
};
