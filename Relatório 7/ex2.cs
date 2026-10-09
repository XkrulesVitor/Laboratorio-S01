using System;
using System.Collections.Generic;

public class Pokemon
{
    public string Especie { get; set; }
    public int Nivel { get; private set; }

    public Pokemon(string especie, int nivel)
    {
        this.Especie = especie;
        this.Nivel = nivel;
    }

    public virtual void Atacar()
    {
        Console.WriteLine($"\n--- {Especie} | Nível: {Nivel} ---");
        Console.WriteLine($"{Especie} usa um ataque comum!");
    }
}

public class TipoPlanta : Pokemon
{
    public TipoPlanta(string especie, int nivel) : base(especie, nivel)
    {
    }

    public override void Atacar()
    {
        Console.WriteLine($"\n--- {Especie} | Nível: {Nivel} ---");
        Console.WriteLine($"{Especie} usa Chicote de Vinha!");
    }
}

public class TipoEletrico : Pokemon
{
    public TipoEletrico(string especie, int nivel) : base(especie, nivel)
    {
    }

    public override void Atacar()
    {
        base.Atacar();
        Console.WriteLine($"{Especie} solta uma descarga elétrica!");
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("=== Batalha de Exibição Pokémon ===");

        List<Pokemon> pokemons = new List<Pokemon>();

        pokemons.Add(new TipoPlanta("Bulbasaur", 15));
        pokemons.Add(new TipoEletrico("Pikachu", 20));
        pokemons.Add(new Pokemon("Eevee", 10));

        foreach (var pokemon in pokemons)
        {
            pokemon.Atacar();
        }

        Console.WriteLine("\n=== Fim da Demonstração ===");
    }
}
