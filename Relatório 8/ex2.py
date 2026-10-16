class HeroiOverwatch:
    def __init__(self, codinome: str, funcao: str):
        self.codinome = codinome
        self.funcao = funcao

    def usar_suprema(self):
        print(f"{self.codinome} ativou a suprema da função {self.funcao}.")

class HeroiTanque(HeroiOverwatch):
    def usar_suprema(self):
        print(f"{self.codinome} bate o martelo no chão e derruba os adversários.")

class HeroiSuporte(HeroiOverwatch):
    def usar_suprema(self):
        print(f"{self.codinome} ativa uma barreira de som para proteger os aliados.")

    def curar_equipe(self):
        print(f"{self.codinome} está curando a equipe.")

if __name__ == "__main__":
    print("--- Supremas da equipe ---")

    atacante = HeroiOverwatch("Soldado: 76", "Dano")
    tanque = HeroiTanque("Reinhardt", "Tanque")
    suporte = HeroiSuporte("Lúcio", "Suporte")

    herois: list[HeroiOverwatch] = [atacante, tanque, suporte]

    for personagem in herois:
        personagem.usar_suprema()
        if isinstance(personagem, HeroiSuporte):
            personagem.curar_equipe()
