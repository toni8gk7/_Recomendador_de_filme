// fantasia, aventura, drama 
// a princesa e o sapo, LIVRE, fantasia, aventura, animação, comédia, romance
// é assim que acaba, 14, drama, romance 
// carros , LIVRE, animação, comédia, aventura
// deadpool & wolverine, 18, ação, comédia, fantasia
// gintes de aço, 10, drama, ação, esporte, ficção científica
// como eu era antes de você , 12, drama, romance

let campoIdade;
let campoFantasia;
let campoAventura;
let campoDrama;
let campoAção
let campoComédia
let campoAnimacao
let campoFiccaoCientifica
let campoRomance


function setup() {
  createCanvas(1400, 400);
  createElement("h1", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia??");
  campoAventura = createCheckbox("Gosta de aventura??");
  campoDrama = createCheckbox("Gosta de ação??");
  campoAcao = createCheckbox("Gosta de drama??");
  campoComedia = createCheckbox("Gosta de comédia??");
  campoAnimacao = createCheckbox("Gosta de animação??");
  campoFiccaoCientifica = createCheckbox("Gosta de ficção ciêntifica??");
  campoRomance = createCheckbox("Gosta de romance??");
}


function draw() {
  background(" rgb(255,255,255)");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let gostaDeDrama = campoDrama.checked();
  let gostaDeAcao = campoAcao.checked();
  let gostaDeComedia = campoComedia.checked();
  let gostaDeAnimacao = campoAnimacao.checked();
  let gostaDeFiccaoCientifica = campoFiccaoCientifica.checked();
  let gostaDeRomance = campoRomance.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura, gostaDeDrama, gostaDeAcao,gostaDeComedia);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura, gostaDeDrama, gostaDeAção, gostaDeComedia, gostaDeAnimacao, gostaDeFiccaoCientifica, gostaDeRomance) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "gintes de aço";
    } else {
      if (idade >= 12) {
        if(gostaDeDrama || gostaDeRomance) {
          return "como eu era antes de você";          
        } else{
         return "Ladrões de bicicleta";
        }
      } else {
        if (idade >= 5) 
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