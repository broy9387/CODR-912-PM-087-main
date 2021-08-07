const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var engine, world;
var particles=[];
function setup() {

    createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;
  
  }
  function draw() {
  
    Engine.update(engine);
    background(0);

    if (frameCount % 30 == 0) {
        newParticle();
      }
      for (var i = 0; i < particles.length; i++) {
        particles[i].display();
        
    }

  }
    function newParticle() {
      var p = new Particle(600, 0, random(5, 10));
      particles.push(p);
    }
  