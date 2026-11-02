import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Slime slime = new Slime("Slime Azul");
        Mandragora mandragora = new Mandragora("Mandrágora da Floresta");

        Cozinheiro senshi = new Cozinheiro("Senshi", "Ferro Fundido");
        senshi.adicionarIngrediente(slime);
        senshi.adicionarIngrediente(mandragora);

        senshi.servirBanquete();
    }
}

abstract class Monstro {
    private String nome;

    public Monstro(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public abstract String receita();
}

class Slime extends Monstro {
    public Slime(String nome) {
        super(nome);
    }

    @Override
    public String receita() {
        return "Secar em tiras e cozinhar no caldo quente";
    }
}

class Mandragora extends Monstro {
    public Mandragora(String nome) {
        super(nome);
    }

    @Override
    public String receita() {
        return "Cortar em rodelas e refogar na manteiga";
    }
}

class Panela {
    private String material;

    public Panela(String material) {
        this.material = material;
    }

    public String getMaterial() {
        return material;
    }
}

class Cozinheiro {
    private String nome;
    private Panela panela;
    private ArrayList<Monstro> ingredientes;

    public Cozinheiro(String nome, String materialDaPanela) {
        this.nome = nome;
        this.panela = new Panela(materialDaPanela);
        this.ingredientes = new ArrayList<>();
    }

    public void adicionarIngrediente(Monstro monstro) {
        this.ingredientes.add(monstro);
    }

    public void servirBanquete() {
        System.out.println("Cozinheiro: " + nome + " | Panela de " + panela.getMaterial());
        for (Monstro monstro : ingredientes) {
            System.out.println("- " + monstro.getNome() + ": " + monstro.receita());
        }
    }
}

// Composição: A Panela é criada dentro do construtor de Cozinheiro, nascendo e existindo exclusivamente vinculada a ele.
// Agregação: Os objetos Monstro (Slime e Mandragora) são criados fora do Cozinheiro e apenas adicionados à lista de ingredientes, existindo de forma independente dele.
