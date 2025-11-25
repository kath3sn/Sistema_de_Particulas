class Particulas {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);

    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(0.5, 2));

    this.tvida = int(random(50, 120));
    this.tvidaInicial = this.tvida;
    this.estaMuerta = false;
    this.diam = random(50, 170);
    this.gravedad = createVector(0, -1.5);

    this.velAngulo = random(-0.02, 0.02);

    this.c = color(254, 220, 104, random(100, 255));
  }

  update() {
    if (!this.estaMuerta) {
      this.vel.add(this.gravedad);
      this.vel.normalize();
      this.vel.setMag(4);
      this.vel.rotate(this.velAngulo);
      this.tvida -= 1;
      this.pos.add(this.vel);
    }

    if (this.tvida <= 0 && !this.estaMuerta) {
      this.estaMuerta = true;
    }
  }

  display() {
    fill(this.c);
    noStroke();

    this.diamFinal = map(this.tvida, 0, this.tvidaInicial, 0, this.diam, 0);

    circle(this.pos.x, this.pos.y, this.diamFinal);
  }
}

//es el brillo o chispa complementaria
class Rombo {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);

    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(0.5, 1));

    this.tvida = int(random(50, 100));
    this.tvidaInicial = this.tvida;
    this.estaMuerta = false;
    this.diam = random(40, 100);

    this.gravedad = createVector(0, random(-1, -5.5));

    this.velAngulo = random(-0.4, 0.4);

    this.c = color(255, random(100, 190), 0, random(170, 255));
  }

  update() {
    if (!this.estaMuerta) {
      this.vel.add(this.gravedad);
      this.vel.normalize();
      this.vel.setMag(4);
      this.vel.rotate(this.velAngulo);
      this.tvida -= 1;
      this.pos.add(this.vel);
    }

    if (this.tvida <= 0 && !this.estaMuerta) {
      this.estaMuerta = true;
    }
  }

  display() {
    fill(this.c);
    noStroke();

    this.lado = map(this.tvida, 0, this.tvidaInicial, 0, this.diam);

    push();
    translate(this.pos.x, this.pos.y);

    beginShape();
    vertex(0, -this.lado / 2);
    vertex(this.lado / 2, 0);
    vertex(0, this.lado / 2);
    vertex(-this.lado / 2, 0);
    endShape(CLOSE);

    pop();
  }
}
