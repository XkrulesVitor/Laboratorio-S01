#include "iostream"
#include "string"

using namespace std;

class Banda {
public:
    string nome;
    int integrantes;
    float potenciaSom;
    int energia;

    Banda(string n, int i, float p, int e) : nome(n), integrantes(i), potenciaSom(p), energia(e) {}

    void duelar(Banda& rival) {
        cout << "A banda " << nome << " subiu ao palco para a apresentacao e desafiou a banda " << rival.nome << "!" << endl;
        rival.energia -= potenciaSom;
    }
};

int main() {
    Banda banda1("Rockers", 4, 35.5, 100);
    Banda banda2("Metalheads", 5, 50.0, 100);

    banda1.duelar(banda2);

    cout << "--- Status Atualizado das Bandas ---" << endl;
    cout << banda1.nome << " - Energia da plateia: " << banda1.energia << endl;
    cout << banda2.nome << " - Energia da plateia: " << banda2.energia << endl;

    return 0;
}