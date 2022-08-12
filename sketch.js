const MotorFisica = Matter.Engine;
const Render = Matter.Render;
const Mundo = Matter.World;
const Objetos = Matter.Bodies;
const Restricao = Matter.Constraint;
const Objeto = Matter.Body;
const Compostos = Matter.Composites;
const Composto = Matter.Composite;

var motorDeFisica, mundo;
var chao, corda;

function setup() 
{
  createCanvas(500,700);
  motorDeFisica = MotorFisica.create();
  mundo = motorDeFisica.world;

  chao = new Chao(200, 690, 600, 20);
  corda = new Corda(6, {x:245, y:30});

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
}
