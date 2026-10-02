#include "iostream"
#include "string"

using namespace std;

class LinkSocial {
private:
    string nome;
    string arcana;
    int rank;

public:
    void setNome(string n) {
        nome = n;
    }

    string getNome() {
        return nome;
    }

    void setArcana(string a) {
        arcana = a;
    }

    string getArcana() {
        return arcana;
    }

    void setRank(int r) {
        rank = r;
    }

    int getRank() {
        return rank;
    }

    void subirRank() {
        rank++;
    }
};

int main() {
    LinkSocial aliado;
    string entradaNome;
    string entradaArcana;
    int entradaRank;

    getline(cin, entradaNome);
    getline(cin, entradaArcana);
    cin >> entradaRank;

    aliado.setNome(entradaNome);
    aliado.setArcana(entradaArcana);
    aliado.setRank(entradaRank);

    cout << "--- Status Inicial ---" << endl;
    cout << "Nome: " << aliado.getNome() << endl;
    cout << "Arcana: " << aliado.getArcana() << endl;
    cout << "Rank: " << aliado.getRank() << endl;

    aliado.subirRank();

    cout << "\n--- Status Apos Evolucao ---" << endl;
    cout << "Nome: " << aliado.getNome() << endl;
    cout << "Arcana: " << aliado.getArcana() << endl;
    cout << "Rank Atualizado: " << aliado.getRank() << endl;

    return 0;
}