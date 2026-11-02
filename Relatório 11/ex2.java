import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ItemDoCardapio item1 = new ItemDoCardapio("Café Especial", 10.0);
        ItemDoCardapio item2 = new ItemDoCardapio("Curry da Casa", 25.0);
        ComboLeblanc combo = new ComboLeblanc("Combo Curry + Café", 35.0);

        CafeLeblanc leblanc = new CafeLeblanc();
        leblanc.adicionar(item1);
        leblanc.adicionar(item2);
        leblanc.adicionar(combo);

        leblanc.mostrarCardapio();
    }
}

class ItemDoCardapio {
    private String nome;
    private double preco;

    public ItemDoCardapio(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public String getNome() {
        return nome;
    }

    public double getPreco() {
        return preco;
    }

    public double precoFinal() {
        return preco;
    }
}

class ComboLeblanc extends ItemDoCardapio {
    public ComboLeblanc(String nome, double preco) {
        super(nome, preco);
    }

    @Override
    public double precoFinal() {
        return getPreco() * 0.9;
    }
}

class CafeLeblanc {
    private ArrayList<ItemDoCardapio> cardapio;

    public CafeLeblanc() {
        this.cardapio = new ArrayList<>();
    }

    public void adicionar(ItemDoCardapio item) {
        this.cardapio.add(item);
    }

    public void mostrarCardapio() {
        for (ItemDoCardapio item : cardapio) {
            System.out.println(item.getNome() + " - R$ " + item.precoFinal());
        }
    }
}
