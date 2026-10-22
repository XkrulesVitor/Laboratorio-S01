class Instrumentista
  attr_reader :nome, :instrumento

  def initialize(nome, instrumento)
    @nome = nome
    @instrumento = instrumento
  end

  def interpretar(peca)
    raise NotImplementedError, "#{self.class} deve implementar interpretar"
  end
end

class Solista < Instrumentista
  def interpretar(peca)
    puts "#{nome} toca #{instrumento} na peça #{peca}, conduzindo a melodia principal."
  end
end

class Acompanhador < Instrumentista
  def interpretar(peca)
    puts "#{nome} toca #{instrumento} na peça #{peca}, acompanhando o ritmo do solista."
  end
end

class Regente
  def initialize(nome)
    @nome = nome
    @orquestra = []
  end

  def convocar(instrumentista)
    @orquestra << instrumentista
  end

  def reger(peca)
    puts "Regente #{@nome} conduz a orquestra na peça #{peca}:"
    @orquestra.each do |instrumentista|
      instrumentista.interpretar(peca)
    end
  end

  def escalacao
    @orquestra.map do |instrumentista|
      "#{instrumentista.class}: #{instrumentista.nome}"
    end
  end
end

solista = Solista.new("Kaori Miyazono", "Violino")
acompanhador = Acompanhador.new("Kousei Arima", "Piano")
regente = Regente.new("Hiroko Seto")

regente.convocar(solista)
regente.convocar(acompanhador)

regente.reger("Introdução e Rondo Capriccioso")

regente.escalacao.each do |texto|
  puts texto
end

instrumentista_base = Instrumentista.new("Músico", "Clarinete")
# instrumentista_base.interpretar("Introdução e Rondo Capriccioso")
