from abc import ABC, abstractmethod

class IUnidadeDeRede(ABC):
    @abstractmethod
    def executar_invasao(self):
        pass

class Cyberdeck:
    def __init__(self, modelo: str):
        self.modelo = modelo

class OperadorNetrunner(IUnidadeDeRede):
    def __init__(self, nome: str, modelo_cyberdeck: str):
        self.nome = nome
        self.cyberdeck = Cyberdeck(modelo_cyberdeck)

    def executar_invasao(self):
        print(f"{self.nome} está quebrando o gelo (ICE) de um servidor "
              f"com o cyberdeck {self.cyberdeck.modelo}.")

class DroneDeVigilancia(IUnidadeDeRede):
    def __init__(self, codigo: str):
        self.codigo = codigo

    def executar_invasao(self):
        print(f"Drone {self.codigo}: interceptando o sinal da rede.")

class CelulaHacker:
    def __init__(self, nome: str, membros: list[IUnidadeDeRede]):
        self.nome = nome
        self._membros = membros

    def iniciar_ataque(self):
        print(f"Ataque iniciado pela célula {self.nome}.")
        for unidade in self._membros:
            unidade.executar_invasao()

if __name__ == "__main__":
    print("--- Operação em Night City ---")

    operador = OperadorNetrunner("V", "Tetratronic Rippler")
    sentinela = DroneDeVigilancia("DR-01")

    unidades: list[IUnidadeDeRede] = [operador, sentinela]
    grupo = CelulaHacker("Sombras de Night City", unidades)
    grupo.iniciar_ataque()

    try:
        protocolo = IUnidadeDeRede()
    except TypeError as erro:
        print(f"Erro ao instanciar a interface: {erro}")
