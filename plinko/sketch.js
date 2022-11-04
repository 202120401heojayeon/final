var Engine = Matter.Engine,
  World = Matter.World,
  Event = Matter.Event,
  Bodies = Matter.Bodies;

var engine;
var world;
var particles = [];
var plinkos = [];
var bounds = [];
var cols = 11;
var rows = 10;

function setup() {
  createCanvas(600, 700);
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 2;
  // world.bounds.max.x = width;
  // world.bounds.max.y = height;
  // world.bounds.min.x = 0;
  // world.bounds.min.y = 0;
  newParticle();
  var spacing = width / cols;
  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols + 1; i++) {
      var x = i * spacing;
      if (j % 2 == 0) {
        x += spacing / 2;
      }
      var y = spacing + j * spacing;
      var p = new Plinko(x, y, 4);
      plinkos.push(p);
    }
  }
  var b = new Boundary(width / 2, height + 50, width, 100);
}
// colorMode(HSB);
// var p = new Particle(300, 50, 10);
// particles.push(p);
// function collistion(event) {
//   var pairs = event.pairs;
//   for (var i = 0; i < pairs.length; i++) {
//     var bodyA = pairs[i].bodyA;
//     var bodyB = pairs[i].bodyB;
//     console.log(bodyA.label, bodyB.label);
//   }
// }
// Events.on(engine, "collisionStart", collision);

function newParticle() {
  var p = new Particle(300, 0, 10);
  particles.push(p);
}

function draw() {
  if (frameCount % 60 == 0) {
    newParticle();
  }

  background(51);
  Engine.update(engine);
  for (var i = 0; i < particles.length; i++) {
    particles[i].show();
  }
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].show();
  }
}
