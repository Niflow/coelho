const MotorFisica = Matter.Engine;
const Render = Matter.Render;
const Mundo = Matter.World;
const Objetos = Matter.Bodies;
const Restricao = Matter.Constraint;
const Objeto = Matter.Body;
const Compostos = Matter.Composites;
const Composto = Matter.Composite;

var motorDeFisica, mundo;
var chao, corda, fruta;

function setup() 
{
  createCanvas(500,700);
  motorDeFisica = MotorFisica.create();
  mundo = motorDeFisica.world;

  chao = new Chao(200, 690, 600, 20);
  corda = new Corda(6, {x:245, y:30});
  fruta = Objetos.circle(300,300,15,{density:0.001});
  Composto.add(corda.body,fruta);
  console.log(corda)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  MotorFisica.update(motorDeFisica);
  

  chao.mostrar();
  corda.show();
  ellipse(fruta.position.x,fruta.position.y,15,15);
}
