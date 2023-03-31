const valorUsuario = prompt("Escolha entre pedra, papel ou tesoura");

let pedra = 'pedra';
let papel = 'papel';
let tesoura = 'tesoura';

let escolhaPrograma;
let numeroAleatorio = Math.random();

if (escolhaPrograma < 0.33) {
    let escolhaPrograma = pedra;
  alert("Escolha do programa = Pedra")

} else if (escolhaPrograma < 0.66){
    let escolhaPrograma = papel;
  alert('Escolha do programa = Papel');
  
  } else {
  let escolhaPrograma = tesoura;
  alert('Escolha do programa = Tesoura')
}

let resultado;
if (escolhaUsuario === escolhaPrograma) {
  resultado = "Empate!";
} else if (
  (escolhaUsuario === pedra && escolhaPrograma === tesoura) ||
  (escolhaUsuario === papel && escolhaPrograma === pedra) ||
  (escolhaUsuario === tesoura && escolhaPrograma === papel)
) {
  resultado = "Você ganhou!";
} else {
  resultado = "Você perdeu!";
}

alert("O programa escolheu " + escolhaPrograma + ". " + resultado);



