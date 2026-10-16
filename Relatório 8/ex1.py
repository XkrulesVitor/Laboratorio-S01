class MortoVivo:
    def __init__(self, nome: str, almas: int, estus: int):
        self.nome = nome
        self._almas = almas
        self.__estus = 0
        self.set_estus(estus)

    def get_estus(self):
        return self.__estus

    def set_estus(self, quantidade):
        if quantidade < 0 or quantidade > 10:
            print("Quantidade de Estus inválida!")
            return
        self.__estus = quantidade

    def mostrar_status(self):
        return f"Morto-vivo {self.nome} | Almas: {self._almas} | Estus: {self.__estus}"

class Clerigo(MortoVivo):
    def __init__(self, nome: str, almas: int, estus: int, milagre: str):
        super().__init__(nome, almas, estus)
        self.milagre = milagre

    def mostrar_status(self):
        status = super().mostrar_status()
        return f"{status} | Milagre: {self.milagre}"

if __name__ == "__main__":
    print("--- Status do clérigo ---")

    clerigo = Clerigo("Petrus", 2000, 5, "Cura")
    print(clerigo.mostrar_status())

    clerigo.set_estus(15)
    print(clerigo.mostrar_status())

    clerigo.set_estus(10)
    print(clerigo.mostrar_status())

    try:
        print(clerigo.__estus)
    except AttributeError as erro:
        print(f"Erro ao acessar Estus diretamente: {erro}")

    print(f"Quantidade de Estus: {clerigo.get_estus()}")
