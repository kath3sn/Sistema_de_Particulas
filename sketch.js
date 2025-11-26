let sp = [];
let brillo = [];

function setup() {
  angleMode(DEGREES); //Solo cambia los angulos a grados en lugar de radianes
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(25, 25, 25, 150);
  /* for (const [index, elemento] of sp.entries()) {
    elemento.update();
    elemento.display();
    if (elemento.estaMuerta) {
      sp.splice(index, 1); //splice elimina la particula o elemento cuando muere
    }
  }*/
  for (let i = sp.length - 1; i >= 0; i--) {
    sp[i].update();
    sp[i].display();
    if (sp[i].estaMuerta) {
      sp.splice(i, 1);
    }
  }

  let np = new Particulas(mouseX, mouseY);
  sp.push(np);

  for (let i = brillo.length - 1; i >= 0; i--) {
    brillo[i].update();
    brillo[i].display();
    if (brillo[i].estaMuerta) {
      brillo.splice(i, 1);
    }
  }

  /*let nb = new Rombo(mouseX, mouseY);
  brillo.push(nb);*/

  //esto es solo para que salgan menos partículas de brillos
  if (frameCount % 3 == 0) {
    brillo.push(new Rombo(mouseX, mouseY));
  }
}

/*function mouseClicked() {
  let np = new Particulas(mouseX, mouseY);
  sp.push(np);
}*/
