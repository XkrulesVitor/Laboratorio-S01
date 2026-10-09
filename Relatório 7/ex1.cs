using System;

public class CombatenteDeGondor
{
    public string Nome { get; private set; }
    public string Povo { get; private set; }
    public string Posto { get; private set; }
    public string Armamento { get; private set; } = "Desarmado";

    public CombatenteDeGondor(string nome, string povo, string posto)
    {
        this.Nome = nome;
        this.Povo = povo;
        this.Posto = posto;
    }

    public void Equipar(string arma)
    {
        this.Armamento = arma;
    }

    public void ApresentarUnidade()
    {
        Console.WriteLine($"\n--- {Nome} ---");
        Console.WriteLine($"Povo: {Povo}");
        Console.WriteLine($"Posto: {Posto}");

        if (Armamento != "Desarmado")
        {
            Console.WriteLine($"Armamento: {Armamento}");
        }
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("=== Defesa de Minas Tirith ===");

        CombatenteDeGondor faramir = new CombatenteDeGondor("Faramir", "Gondor", "Capitão");
        CombatenteDeGondor beregond = new CombatenteDeGondor("Beregond", "Gondor", "Guarda");
        CombatenteDeGondor pippin = new CombatenteDeGondor("Pippin", "Hobbits", "Escudeiro");

        faramir.Equipar("Espada");
        beregond.Equipar("Lança");

        faramir.ApresentarUnidade();
        beregond.ApresentarUnidade();
        pippin.ApresentarUnidade();

        Console.WriteLine("\n=== Fim da Demonstração ===");
    }
}
