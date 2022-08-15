const ingresoDatos = document.querySelector('#Ingresar')

ingresoDatos.onclick = function () {
  let textoEdad = document.querySelector('#edad-usuario').innerText
  let nombreDeUsuario = document.querySelector('#primer-nombre').innerText
  let segundoNombreUsuario = document.querySelector('#segundo-nombre').innerText
  let apellido = document.querySelector('#apellido-usuario').innerText

  let bienvenidoUsuario = 'Bienvenido' + nombreDeUsuario
  let datosUsuario = nombreDeUsuario + segundoNombreUsuario + apellido
  document.querySelector('#bienvenido').innerText = bienvenidoUsuario
  document.querySelector('#tabla-datos-usuario').innerText = "Nombre completo: " + datosUsuario + "Edad: " + textoEdad
  return false
};
