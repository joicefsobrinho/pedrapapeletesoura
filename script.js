const valorUsuario = prompt("Escolha entre pedra, papel ou tesoura");

let pedra = "pedra";
let papel = "papel";
let tesoura = "tesoura";

let escolhaPrograma;
let numeroAleatorio = Math.random();

if (numeroAleatorio <= 0.33) {
  escolhaPrograma = pedra;
  alert('Escolha do Programa = Pedra');
} else if (0.33 < numeroAleatorio <= 0.66){
  escolhaPrograma = papel;
  alert('Escolha do Programa = Papel');
} else {
  escolhaPrograma = tesoura;
  alert('Escolha do Programa = Tesoura');
}

let resultado;
if (valorUsuario === escolhaPrograma) {
  resultado = 'Empate!';
} else if (
  (valorUsuario === pedra && escolhaPrograma === tesoura) ||
  (valorUsuario === papel && escolhaPrograma === pedra) ||
  (valorUsuario === tesoura && escolhaPrograma === papel)
  ) {
  resultado = 'Você ganhou!';
} else {
  resultado = 'Você perdeu!';
}

alert(resultado);