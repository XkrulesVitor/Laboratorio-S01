class Pistola {
  constructor(modelo) {
    this.modelo = modelo;
  }
}

class AgenteProtocolo {
  #pistola;

  constructor(codinome, modeloDaPistola) {
    this.codinome = codinome;
    this.#pistola = new Pistola(modeloDaPistola);
  }

  usarHabilidade() {
    throw new Error(`O agente ${this.codinome} deve implementar o método usarHabilidade()`);
  }

  entrarEmCombate() {
    console.log(`${this.codinome} [Pistola: ${this.#pistola.modelo}] - ${this.usarHabilidade()}`);
  }
}

class Controlador extends AgenteProtocolo {
  usarHabilidade() {
    return 'Bloqueia a visão dos inimigos com Cortina de Fumaça.';
  }
}

class Iniciador extends AgenteProtocolo {
  usarHabilidade() {
    return 'Revela a posição dos inimigos com Flecha Rastreadora.';
  }
}

class Duelista extends AgenteProtocolo {
  usarHabilidade() {
    return 'Entra em combate avançando velozmente com Vento Impetuoso.';
  }
}

class Esquadrao {
  #agentes;

  constructor(nome, agentes = []) {
    this.nome = nome;
    this.#agentes = agentes;
  }

  iniciarPartida() {
    console.log(`\n--- Esquadrão ${this.nome} iniciando partida ---`);
    this.#agentes.forEach(agente => agente.entrarEmCombate());
  }

  listarControladores() {
    return this.#agentes.filter(agente => agente instanceof Controlador);
  }
}

const c1 = new Controlador('Omen', 'Classic');
const c2 = new Controlador('Viper', 'Ghost');
const i1 = new Iniciador('Sova', 'Sheriff');
const d1 = new Duelista('Jett', 'Frenzy');

const esquadrao = new Esquadrao('Alfa', [c1, c2, i1, d1]);
esquadrao.iniciarPartida();

console.log('\nControladores do esquadrão:');
esquadrao.listarControladores().forEach(agente => console.log(agente.codinome));

const agenteBase = new AgenteProtocolo('Recruta', 'Classic');
// agenteBase.entrarEmCombate();
