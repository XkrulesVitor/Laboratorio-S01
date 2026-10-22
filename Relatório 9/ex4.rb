module Depoente
  def depor
    raise NotImplementedError, "#{self.class} deve implementar depor"
  end
end

module Detivel
  def ser_detido
    puts "#{nome} foi levado(a) pela Scotland Yard."
  end
end

class Envolvido
  attr_reader :nome

  def initialize(nome)
    @nome = nome
  end
end

class TestemunhaOcular < Envolvido
  include Depoente

  def depor
    puts "Testemunha #{nome}: Vi uma pessoa suspeita fugindo pelo beco às 22h."
  end
end

class SuspeitoDoCrime < Envolvido
  include Depoente
  include Detivel

  def depor
    puts "Suspeito #{nome}: Eu estava no teatro a noite toda e não estive na cena do crime."
  end
end

class Investigacao
  def initialize(caso)
    @caso = caso
    @envolvidos = []
  end

  def registrar(envolvido)
    @envolvidos << envolvido
  end

  def ouvir_todos
    puts "Investigação do Caso: #{@caso}"
    @envolvidos.each do |envolvido|
      envolvido.depor
    end
  end

  def acionar_scotland_yard
    detidos = @envolvidos.select { |envolvido| envolvido.respond_to?(:ser_detido) }
    detidos.each(&:ser_detido)
  end
end

testemunha = TestemunhaOcular.new("John Watson")
suspeito1 = SuspeitoDoCrime.new("Sebastian Moran")
suspeito2 = SuspeitoDoCrime.new("James Moriarty")

investigacao = Investigacao.new("O Mistério do Vale Boscombe")
investigacao.registrar(testemunha)
investigacao.registrar(suspeito1)
investigacao.registrar(suspeito2)

investigacao.ouvir_todos
investigacao.acionar_scotland_yard
