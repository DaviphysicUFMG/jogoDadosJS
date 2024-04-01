let dados = [
  "img/dice01.svg",
  "img/dice02.svg",
  "img/dice03.svg",
  "img/dice04.svg",
  "img/dice05.svg",
  "img/dice06.svg",
];

// Função para escolher aleatoriamente um elemento do array
function escolherAleatoriamente(array) {
  return array[parseInt(Math.random() * 6)];
}

// Percorre os elementos da classe .dados_img e atribui aleatoriamente uma imagem de dados a cada um
function rolarDado() {
  let quantidade = parseInt(document.querySelector("input").value); // Pega o valor do input

  // Seleciona aleatoriamente as imagens e atribui aos elementos correspondentes
  for (let i = 0; i < quantidade; i++) {
    let imagemAleatoria = escolherAleatoriamente(dados); // Escolhe uma imagem aleatória
    document.getElementById("img" + (i + 1)).src = imagemAleatoria; // Define o src da imagem
  }

  // Esconde as imagens restantes (se houver mais de 'quantidade' divs .dados_img)
  for (let i = quantidade + 1; i <= 5; i++) {
    document.getElementById("img" + i).src = "img/dicenull.svg"; // Define o src da imagem como vazio
  }
}
