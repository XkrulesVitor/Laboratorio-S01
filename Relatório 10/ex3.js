class FichaDeCriatura {
  constructor(criatura, nivelDePerigo) {
    this.criatura = criatura;
    this.nivelDePerigo = nivelDePerigo;
  }

  descrever() {
    return `Criatura: ${this.criatura} | Nível de Perigo: ${this.nivelDePerigo}`;
  }
}

class DiarioMisterioso {
  #fichas = [];

  constructor(numero) {
    this.numero = numero;
  }

  anotar(criatura, nivelDePerigo) {
    const ficha = new FichaDeCriatura(criatura, nivelDePerigo);
    this.#fichas.push(ficha);
  }

  exibirFichas() {
    console.log(`--- Diário #${this.numero} ---`);
    this.#fichas.forEach(ficha => console.log(ficha.descrever()));
  }
}

class Funcionario {
  constructor(nome, cargo) {
    this.nome = nome;
    this.cargo = cargo;
  }
}

class CabanaDoMisterio {
  #funcionarios = [];

  constructor(dono) {
    this.dono = dono;
  }

  contratar(funcionario) {
    this.#funcionarios.push(funcionario);
  }

  abrirAsPortas() {
    console.log(`\nCabana do Mistério - Dono: ${this.dono}`);
    this.#funcionarios.forEach(f => console.log(`Funcionário: ${f.nome} - Cargo: ${f.cargo}`));
  }
}

const diario = new DiarioMisterioso(3);
diario.anotar('Gnomos', 2);
diario.anotar('Bill Cipher', 5);
diario.anotar('Esconde-Atrás', 3);
diario.exibirFichas();

const f1 = new Funcionario('Soos Ramirez', 'Faz-tudo');
const f2 = new Funcionario('Wendy Corduroy', 'Caixa');

const cabana = new CabanaDoMisterio('Stan Pines');
cabana.contratar(f1);
cabana.contratar(f2);
cabana.abrirAsPortas();

// Composição: FichaDeCriatura é criada diretamente dentro do método anotar de DiarioMisterioso, existindo exclusivamente vinculada ao ciclo de vida do diário.
// Agregação: Os objetos Funcionario são instanciados independentemente fora da CabanaDoMisterio e adicionados via contratar, existindo por conta própria.
