const MotorFisica = Matter.Engine;
const Render = Matter.Render;
const Mundo = Matter.World;
const Objetos = Matter.Bodies;
const Restricao = Matter.Constraint;
const Objeto = Matter.Body;
const Compostos = Matter.Composites;
const Composto = Matter.Composite;

var motorDeFisica, mundo;
var chao, corda, fruta, conexaoFruta;
var imgFundo, imgCoelho, imgFruta;

function preload()
{
  imgFundo = loadImage("background.png");
  imgCoelho = loadImage("rabbit_eating.png");
  imgFruta = loadImage("melon.png");
}

function setup() 
{
  createCanvas(500,700);
  motorDeFisica = MotorFisica.create();
  mundo = motorDeFisica.world;

  // tradução
  // new = novo
  chao = new Chao(200, 690, 600, 20);
  // criando um objeto corda
  corda = new Corda(6, {x:245, y:30});
  
  fruta = Objetos.circle(300,300,15,{density:0.001});
  Composto.add(corda.body,fruta);
  
  conexaoFruta = new Conexao(corda, fruta);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
}

function draw() 
{
  image(imgFundo, width/2, height/2, 500,700);
  MotorFisica.update(motorDeFisica);
  

  chao.mostrar();
  corda.show();
  image(imgFruta, fruta.position.x,fruta.position.y,60,60);
}
