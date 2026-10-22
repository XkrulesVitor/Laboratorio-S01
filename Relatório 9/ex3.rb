class PhoneWave
  def enviar_dmail(mensagem)
    puts "D-Mail '#{mensagem}' enviado para o passado!"
  end
end

class MembroDoLab
  attr_reader :numero, :nome

  def initialize(numero, nome)
    @numero = numero
    @nome = nome
  end
end

class LaboratorioDeGadgets
  def initialize
    @phonewave = PhoneWave.new
    @membros = []
  end

  def admitir(membro)
    @membros << membro
    puts "Membro admitido: #{membro.numero} - #{membro.nome}"
  end

  def experimento(mensagem)
    @membros.each do |membro|
      puts "Membro presente: #{membro.numero} - #{membro.nome}"
    end
    @phonewave.enviar_dmail(mensagem)
  end
end

membro1 = MembroDoLab.new(1, "Okabe Rintaro")
membro2 = MembroDoLab.new(2, "Mayuri Shiina")

lab = LaboratorioDeGadgets.new
lab.admitir(membro1)
lab.admitir(membro2)

lab.experimento("Não entre no prédio da Radio Kaikan")

# Composição: O PhoneWave é instanciado internamente no initialize de LaboratorioDeGadgets, existindo apenas dentro do laboratório e tendo seu ciclo de vida dependente dele.
# Agregação: Os objetos MembroDoLab são criados externamente e associados ao laboratório pelo método admitir, existindo de forma autônoma e independente dele.
