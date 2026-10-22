class Pokemon {
  #vida;

  constructor(apelido, tipo, vidaInicial) {
    this.apelido = apelido;
    this.tipo = tipo;
    this.#vida = vidaInicial;
  }

  get vida() {
    return this.#vida;
  }

  sofrerDano(pontos) {
    this.#vida -= pontos;
    if (this.#vida < 0) {
      this.#vida = 0;
    }
    console.log(`${this.apelido} sofreu ${pontos} de dano. Vida restante: ${this.#vida}`);
  }

  atacar(alvo) {
    console.log(`${this.apelido} desferiu um ataque genérico contra ${alvo.apelido}!`);
    alvo.sofrerDano(10);
  }
}

class Squirtle extends Pokemon {
  constructor(apelido, vidaInicial) {
    super(apelido, 'Água', vidaInicial);
  }

  atacar(alvo) {
    console.log(`${this.apelido} atacou ${alvo.apelido} com Jato de Água!`);
    alvo.sofrerDano(20);
  }
}

class Bulbasaur extends Pokemon {
  constructor(apelido, vidaInicial) {
    super(apelido, 'Planta', vidaInicial);
  }

  atacar(alvo) {
    console.log(`${this.apelido} atacou ${alvo.apelido} com Folha Navalha!`);
    alvo.sofrerDano(15);
  }
}

const squirtle = new Squirtle('Squirtle Azul', 50);
const bulbasaur = new Bulbasaur('Bulbasaur Verde', 30);

bulbasaur.atacar(squirtle);
squirtle.atacar(bulbasaur);
squirtle.atacar(bulbasaur);

console.log(`Vida de ${squirtle.apelido}: ${squirtle.vida}`);
console.log(`Vida de ${bulbasaur.apelido}: ${bulbasaur.vida}`);

// console.log(squirtle.#vida);
