// fantasia, aventura, drama 

// a princesa e o sapo, LIVRE, fantasia, aventura, animação, comédia, romance
// é assim que acaba, 14, drama, romance 
// carros , LIVRE, animação, comédia, aventura
// deadpool & wolverine, 18, ação, comédia
// gintes de aço, 10, drama, ação, esporte, ficção científica
// como eu era antes de você , 12, drama, romance


let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("15");
}

function draw() {
  background(220);
  let idade = 15; // exemplo de idade
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O menino que descobriu o vento";
    } else {
      return "As aventuras de Pi";
    }
  } else {
    return "A viagem de Chihiro";
  }
}