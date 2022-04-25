var menino, menino_animacao;
var estrada, estrada_imagem, esquerda, direita;

function preload(){
  //imagens pré-carregadas
  menino_animacao = loadAnimation("Runner-1.png","Runner-2.png");
  estrada_imagem = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);

  estrada = createSprite(200,200,10,10);
  estrada.addImage("estrada", estrada_imagem);
  estrada.y = estrada.height/2;
  estrada.velocityY = 6;

  menino = createSprite(200,300,10,10);
  menino.addAnimation("correndo", menino_animacao);
  menino.scale = 0.07;
  //crie sprite aqui
   esquerda = createSprite (0,0,100,800);
  esquerda.visible = false;
  direita = createSprite (410,0,100,800);
  direita.visible = false;

}

function draw() {
  background(0);
  estrada.velocityY = 4

  menino.x = World.mouseX;

  edges = createEdgeSprites();

  menino.collide (edges[3]);
  menino.collide (direita);
  menino.collide (esquerda);
  
  if(estrada.y > 400){
    estrada.y = height/2;
  }

  drawSprites();
}
