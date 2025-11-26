class Particulas {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);

    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(0.5, 2));

    this.tvida = int(random(50, 120));
    this.tvidaInicial = this.tvida;
    this.estaMuerta = false;

    this.diamBase = random(50, 170);
    this.diam = this.diamBase;

    this.gravedad = createVector(0, -1.5);

    this.velAnguloBase = random(-0.02, 0.02);
    this.velAngulo = this.velAnguloBase;

    this.cBase = color(254, 220, 104, random(100, 255));
    this.cComplemento = color(255, 180, 40, random(100, 255));

    this.c = this.cBase;
  }

  update() {
    if (mouseIsPressed) {
      this.diam = this.diamBase * 1.4;
      this.c = this.cComplemento;
      this.velAngulo = this.velAnguloBase * 7;
      this.pos.x += random(-7, 7);
      this.pos.y += random(-7, 7);
    } else {
      this.diam = this.diamBase;
      this.velAngulo = this.velAnguloBase;
      this.c = this.cBase;
    }

    if (!this.estaMuerta) {
      this.vel.add(this.gravedad);
      this.vel.normalize();
      this.vel.setMag(mouseIsPressed ? 9 : 4);
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

    this.diamFinal = map(this.tvida, 0, this.tvidaInicial, 0, this.diam);

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

    this.diamBase = random(40, 65);
    this.diam = this.diamBase;

    this.gravedad = createVector(0, random(-1, -5.5));
    this.velAngulo = random(-0.4, 0.4);

    this.cBase = color(255, random(100, 190), 0, random(170, 255));
    this.cComplemento = color(255, random(50, 70), 0, random(100, 255));

    this.c = this.cBase;

    this.angulo = random(1, 10);
    this.velAngu = random(-5, 5);
  }

  update() {
    if (mouseIsPressed) {
      this.diam = this.diamBase * 1.4;
      this.c = this.cComplemento;
      this.pos.x += random(-7, 7);
      this.pos.y += random(-7, 7);
    } else {
      this.diam = this.diamBase;
      this.c = this.cBase;
    }

    if (!this.estaMuerta) {
      this.vel.add(this.gravedad);
      this.vel.normalize();
      this.vel.setMag(mouseIsPressed ? 12 : 4);
      this.vel.rotate(this.velAngulo);
      this.tvida -= 1;
      this.pos.add(this.vel);
    }

    if (this.tvida <= 0 && !this.estaMuerta) {
      this.estaMuerta = true;
    }

    this.angulo += this.velAngu;
  }

  display() {
    fill(this.c);
    noStroke();

    this.lado = map(this.tvida, 0, this.tvidaInicial, 0, this.diam);

    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angulo);
    square(0 - this.lado / 2, 0 - this.lado / 2, this.lado);
    /*beginShape();
    vertex(0, -this.lado / 2);
    vertex(this.lado / 2, 0);
    vertex(0, this.lado / 2);
    vertex(-this.lado / 2, 0);
    endShape(CLOSE);*/
    pop();
  }
}
