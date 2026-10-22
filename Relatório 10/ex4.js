class UsuarioDeNen {
  constructor(nome) {
    this.nome = nome;
  }

  atacar(alvo) {
    console.log(`${this.nome} desferiu um ataque genérico de aura contra ${alvo.nome}!`);
  }
}

class Intensificador extends UsuarioDeNen {
  atacar(alvo) {
    console.log(`${this.nome} concentra sua aura no punho e acerta um golpe devastador em ${alvo.nome}!`);
  }
}

class Transmutador extends UsuarioDeNen {
  atacar(alvo) {
    console.log(`${this.nome} transforma sua aura em eletricidade e dispara contra ${alvo.nome}!`);
  }
}

class Materializador extends UsuarioDeNen {
  atacar(alvo) {
    console.log(`${this.nome} materializa correntes de aura e aprisiona ${alvo.nome}!`);
  }
}

class Aranha {
  constructor(nome, numero) {
    this.nome = nome;
    this.numero = numero;
  }
}

class TrupeFantasma {
  #aranhas;

  constructor(cidade, aranhas = []) {
    this.cidade = cidade;
    this.#aranhas = aranhas;
  }

  revelarAranhas() {
    console.log(`--- Trupe Fantasma em ${this.cidade} ---`);
    this.#aranhas.forEach(aranha => console.log(`Aranha #${aranha.numero} - ${aranha.nome}`));
  }

  buscarAranha(numero) {
    return this.#aranhas.find(aranha => aranha.numero === numero);
  }
}

const a1 = new Aranha('Uvogin', 11);
const a2 = new Aranha('Chrollo Lucilfer', 0);

const trupe = new TrupeFantasma('Yorknew', [a1, a2]);
trupe.revelarAranhas();

const aranhaAlvo = trupe.buscarAranha(11);

const hunters = [
  new Intensificador('Gon Freecss'),
  new Transmutador('Killua Zoldyck'),
  new Materializador('Kurapika')
];

console.log(`\nAtaques contra a Aranha #${aranhaAlvo.numero} (${aranhaAlvo.nome}):`);
hunters.forEach(hunter => hunter.atacar(aranhaAlvo));
