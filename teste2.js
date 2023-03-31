var escolhaUsuario = prompt("Escolha Pedra, Papel ou Tesoura");

var x = Math.random()

if (x < 0.33) {
  escolhaPrograma = "Pedra";
} else if (0.33 < x < 0.66) {
  escolhaPrograma = "Papel";
} else {
  escolhaPrograma = "Tesoura";
}

var resultado;
if (escolhaUsuario === escolhaPrograma) {
  resultado = "Empate!";
} else if (
  (escolhaUsuario === "Pedra" && escolhaPrograma === "Tesoura") ||
  (escolhaUsuario === "Papel" && escolhaPrograma === "Pedra") ||
  (escolhaUsuario === "Tesoura" && escolhaPrograma === "Papel")
) {
  resultado = "Você ganhou!";
} else {
  resultado = "Você perdeu!";
}

alert("O programa escolheu " + escolhaPrograma + ". " + resultado);

