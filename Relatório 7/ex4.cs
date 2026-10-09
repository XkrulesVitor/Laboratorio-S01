using System;
using System.Collections.Generic;

public class EntidadeCosmica
{
    public string Nome { get; set; }
    public string Origem { get; set; } = "Desconhecida";

    public EntidadeCosmica(string nome)
    {
        this.Nome = nome;
    }

    public virtual void Manifestar()
    {
        Console.WriteLine($"\n--- {Nome} ---");
        Console.WriteLine("Uma presença cósmica se manifesta.");

        if (Origem != "Desconhecida")
        {
            Console.WriteLine($"Origem: {Origem}");
        }
    }
}

public class Profundo : EntidadeCosmica
{
    public Profundo(string nome) : base(nome)
    {
    }

    public override void Manifestar()
    {
        Console.WriteLine($"\n--- {Nome} ---");
        Console.WriteLine("Um Profundo emerge das águas e entoa um cântico sombrio.");

        if (Origem != "Desconhecida")
        {
            Console.WriteLine($"Origem: {Origem}");
        }
    }
}

public class MiGo : EntidadeCosmica
{
    public MiGo(string nome) : base(nome)
    {
    }

    public override void Manifestar()
    {
        base.Manifestar();
        Console.WriteLine("Um Mi-Go abre suas asas e emite um zumbido estranho.");
    }
}

public class Pesquisador
{
    public string Nome { get; set; }

    private List<EntidadeCosmica> _catalogo;

    public Pesquisador(string nome)
    {
        this.Nome = nome;
        this._catalogo = new List<EntidadeCosmica>();
    }

    public void Catalogar(EntidadeCosmica e)
    {
        this._catalogo.Add(e);
    }

    public void LerCatalogo()
    {
        Console.WriteLine($"\n{Nome} catalogou {_catalogo.Count} entidades:");

        foreach (var entidade in _catalogo)
        {
            entidade.Manifestar();
        }
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("=== Biblioteca da Universidade Miskatonic ===");

        EntidadeCosmica entidade = new EntidadeCosmica("Presença sem Nome");
        Profundo profundo = new Profundo("Habitante de Innsmouth");
        MiGo miGo = new MiGo("Visitante de Yuggoth");

        profundo.Origem = "Profundezas do oceano";
        miGo.Origem = "Yuggoth";

        Pesquisador pesquisador = new Pesquisador("Henry Armitage");

        pesquisador.Catalogar(entidade);
        pesquisador.Catalogar(profundo);
        pesquisador.Catalogar(miGo);

        pesquisador.LerCatalogo();

        Console.WriteLine("\n=== Fim da Demonstração ===");
    }
}
