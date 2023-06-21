// Definimos el laberinto como una matriz de 30x30
const laberinto = Array.from({ length: 30 }, () => Array(30).fill(' '));

// Generamos el interior aleatorio del laberinto
for (let i = 1; i < 29; i++) {
  for (let j = 1; j < 29; j++) {
    if (Math.random() < 0.25) {
      laberinto[i][j] = '█';
    }
  }
}

// Generamos los muros superior e inferior del laberinto
for (let i = 1; i < 30; i++) {
  laberinto[0][i] = '█';
  laberinto[29][i] = '█';
}

// Generamos el muro izquierdo y derecho del laberinto
for (let i = 2; i < 30; i++) {
  laberinto[i][0] = '█';
  laberinto[i][29] = '█';
}

// Generamos la puerta de salida en la columna más a la derecha
const puerta = Math.floor(Math.random() * 28) + 1;
laberinto[puerta][29] = ' ';

// Función para imprimir el laberinto
function imprimirLaberinto() {
  for (let i = 0; i < 30; i++) {
    console.log(laberinto[i].join(''));
  }
}

// Función para buscar la salida del laberinto
function jugarLaberinto(posicion) {
  const row = Math.floor(posicion / 30);
  const col = posicion % 30;

  if (col === 29) {
    // El jugador ha llegado a la salida
    laberinto[row][col] = '©';
    imprimirLaberinto();
    console.log('\nEl laberinto tiene salida.');
  } else {
    // Intentar mover hacia la derecha
    if (laberinto[row][col + 1] === ' ') {
      laberinto[row][col + 1] = '©';
      jugarLaberinto(posicion + 1);
    }
    // Intentar mover hacia abajo
    else if (laberinto[row + 1][col] === ' ') {
      laberinto[row + 1][col] = '©';
      jugarLaberinto(posicion + 30);
    }
    // Intentar mover hacia arriba
    else if (row > 0 && laberinto[row - 1][col] === ' ') {
      laberinto[row - 1][col] = '©';
      jugarLaberinto(posicion - 30);
    }
    // Intentar mover hacia la izquierda
    else if (laberinto[row][col - 1] === ' ') {
      laberinto[row][col - 1] = '©';
      jugarLaberinto(posicion - 1);
    }
    // No hay movimiento posible, el laberinto no tiene salida
    else {
      laberinto[row][col] = '©';
      imprimirLaberinto();
      console.log('\nEl laberinto no tiene salida.');
    }
  }
}

// Comenzar a jugar el laberinto desde la posición 0
jugarLaberinto(0);
