// fantasia, aventura, drama 

// a princesa e o sapo, LIVRE, fantasia, aventura, animação, comédia, romance
// é assim que acaba, 14, drama, romance 
// carros , LIVRE, animação, comédia, aventura
// deadpool & wolverine, 18, ação, comédia
// gintes de aço, 10, drama, ação, esporte, ficção científica
// como eu era antes de você , 12, drama, romance
let campoIdade;
let campoFantasia;
let campoAventura;
let campoDrama;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
  campoAventura = createCheckbox("Gosta de ação?");
  campoAventura = createCheckbox("Gosta de drama?");
  campoAventura = createCheckbox("Gosta de comédia?");
  campoAventura = createCheckbox("Gosta de animação?");
  campoAventura = createCheckbox("Gosta de ficção ciêntifica?");
  campoAventura = createCheckbox("Gosta de romance?");
}

function draw() {
  background("rgb(10,1,1)");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let gostaDeDrama = campoDrama.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O menino que descobriu o vento";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem aranha: no aranhaverso";          
        } else{
         return "Ladrões de bicicleta";
        }
      } else {
        if (gostaDeFantasia) {
          return "As aventuras de pi";
        } else {
          return "Depois da chuva";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A viagem de chihiro";
    } else {
      return "O feitiço do tempo";
    }
  }
}
