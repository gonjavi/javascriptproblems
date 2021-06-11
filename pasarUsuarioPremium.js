

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  for (var i in usuarios) {
    usuarios[i].esPremium = true;
  }

  return usuarios; 
}


console.log(pasarUsuarioAPremium([
  {
    "esPremium": false
  },
  {
    "esPremium": false
  },
  {
    "esPremium": false
  },
  {
    "esPremium": false
  }
]));



















