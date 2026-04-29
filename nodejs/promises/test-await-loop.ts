function bloquearPor(ms: number) {
  const inicio = Date.now();
  while (Date.now() - inicio < ms) {
    // loop bloqueante
  }
}

console.log("X1: inicio");

setTimeout(() => {
  console.log("X2: timer de 200ms");
}, 200);

bloquearPor(1000);
console.log("X3: fim do bloqueio");
