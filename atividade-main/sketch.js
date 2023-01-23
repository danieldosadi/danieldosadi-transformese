//criar variáveis
var aviao;

var aviaoImg;

function preload() //função que carrega imagens
{
    aviaoImg = loadImage("imagem/airplane_DSD.png"); //carregar imagens
}


function setup() //função que inicializa o arquivo
{
    createCanvas(600,200);//cria tamanho do fundo da tela
    aviao = createSprite(100,100,20,20);//criar sprites
    aviaoImg.addImage("aviao", aviaoImg); //carregar imagem
    //colocar tamanho
}


function draw() //função que executa o programa até que seja parado
{
    //colocar cor de fundo
    //condição para pular
    //exibir texto de instrução
    //comando que desenha sprites
}
