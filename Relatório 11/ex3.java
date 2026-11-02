import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        Alienigena alien = new Alienigena("Serpo");
        EspiritoYoukai youkai = new EspiritoYoukai("Vovó Turbo");

        MapaDeAvistamentos mapa = new MapaDeAvistamentos();
        mapa.registrar("Hospital Abandonado", alien);
        mapa.registrar("Túnel da Cidade", youkai);

        mapa.investigar("Hospital Abandonado");
        mapa.investigar("Túnel da Cidade");
        mapa.investigar("Escola");
    }
}

interface Sobrenatural {
    void manifestar();
}

class Alienigena implements Sobrenatural {
    private String nome;

    public Alienigena(String nome) {
        this.nome = nome;
    }

    @Override
    public void manifestar() {
        System.out.println("Alienígena " + nome + " abduz objetos com telecinese!");
    }
}

class EspiritoYoukai implements Sobrenatural {
    private String nome;

    public EspiritoYoukai(String nome) {
        this.nome = nome;
    }

    @Override
    public void manifestar() {
        System.out.println("Espírito Youkai " + nome + " aparece correndo em alta velocidade!");
    }
}

class MapaDeAvistamentos {
    private HashMap<String, Sobrenatural> avistamentos;

    public MapaDeAvistamentos() {
        this.avistamentos = new HashMap<>();
    }

    public void registrar(String local, Sobrenatural ser) {
        this.avistamentos.put(local, ser);
    }

    public void investigar(String local) {
        Sobrenatural ser = this.avistamentos.get(local);
        if (ser == null) {
            System.out.println(local + ": O local está tranquilo.");
        } else {
            ser.manifestar();
        }
    }
}
