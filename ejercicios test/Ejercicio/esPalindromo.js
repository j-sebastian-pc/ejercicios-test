function esPalindromo(texto) {
    const limpio = texto.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
    const invertido = limpio.split("").reverse().join("");
    return limpio === invertido;
  }

module.exports = esPalindromo