public class Main {
    public static void main(String[] args) {
        Morador mago = new Mago("Howl", "Transformação em pássaro");
        Morador demonio = new DemonioDoFogo("Calcifer");

        mago.apresentar();
        demonio.apresentar();

        // Morador generico = new Morador("Morador");
    }
}

abstract class Morador {
    private String nome;

    public Morador(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public abstract void apresentar();
}

class Mago extends Morador {
    private String feitico;

    public Mago(String nome, String feitico) {
        super(nome);
        this.feitico = feitico;
    }

    @Override
    public void apresentar() {
        System.out.println("Mago " + getNome() + " usa o feitiço: " + feitico);
    }
}

class DemonioDoFogo extends Morador {
    public DemonioDoFogo(String nome) {
        super(nome);
    }

    @Override
    public void apresentar() {
        System.out.println("Demônio do fogo " + getNome() + " faz o castelo andar!");
    }
}
