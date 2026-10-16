class Persona:
    def __init__(self, nome: str, arcano: str):
        self.nome = nome
        self.arcano = arcano

    def invocar(self):
        print(f"Invocando {self.nome}, do arcano {self.arcano}.")

class Aliado:
    def __init__(self, nome: str, codinome: str):
        self.nome = nome
        self.codinome = codinome

class Lider:
    def __init__(self, codinome: str):
        self.codinome = codinome
        self.persona = Persona("Arsène", "Louco")
        self._equipe = []

    def recrutar(self, aliado: Aliado):
        self._equipe.append(aliado)

    def infiltrar(self, palacio):
        print(f"{self.codinome} entrou no Palácio de {palacio}.")
        self.persona.invocar()
        print("Aliados presentes:")
        for integrante in self._equipe:
            print(f"{integrante.codinome} ({integrante.nome})")

if __name__ == "__main__":
    print("--- Infiltração dos Phantom Thieves ---")

    skull = Aliado("Ryuji Sakamoto", "Skull")
    panther = Aliado("Ann Takamaki", "Panther")

    lider = Lider("Joker")
    lider.recrutar(skull)
    lider.recrutar(panther)

    lider.infiltrar("Kamoshida")
