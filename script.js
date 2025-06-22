const imagens = [
  "imagens/campo1.jpg",
  "imagens/cidade1.jpg",
  "imagens/campo2.jpg",
  "imagens/cidade2.jpg",
  "imagens/campo3.jpg",
  "imagens/cidade3.jpg",
];

let index = 0;
const tempo = 5000; // tempo entre trocas (milissegundos)
const carousel = document.getElementById("carousel");

function trocarImagem() {
  carousel.style.backgroundImage = `url('${imagens[index]}')`;
  index = (index + 1) % imagens.length;
}

trocarImagem(); // Exibir a primeira imagem imediatamente
setInterval(trocarImagem, tempo);