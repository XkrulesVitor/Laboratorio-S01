#include "iostream"
#include "string"
#include "vector"

using namespace std;

class Hobbit {
protected:
    string nome;

public:
    Hobbit(string n) : nome(n) {}

    virtual void fazerAtividade() {
        cout << "O hobbit " << nome << " esta aproveitando um dia tranquilo na Comarca." << endl;
    }

    virtual ~Hobbit() {}
};

class Jardineiro : public Hobbit {
public:
    Jardineiro(string n) : Hobbit(n) {}

    void fazerAtividade() override {
        cout << "O jardineiro " << nome << " esta cuidando das flores e plantas ao redor das tocas!" << endl;
    }
};

class Cozinheiro : public Hobbit {
public:
    Cozinheiro(string n) : Hobbit(n) {}

    void fazerAtividade() override {
        cout << "O cozinheiro " << nome << " esta preparando o segundo cafe da manha para os convidados!" << endl;
    }
};

class Fazendeiro : public Hobbit {
public:
    Fazendeiro(string n) : Hobbit(n) {}

    void fazerAtividade() override {
        cout << "O fazendeiro " << nome << " esta colhendo vegetais e hortalicas em suas terras!" << endl;
    }
};

int main() {
    vector< Hobbit*> comunidade;
    
    string nomeHobbit;
    string nomeJardineiro;
    string nomeCozinheiro;
    string nomeFazendeiro;

    getline(cin, nomeHobbit);
    getline(cin, nomeJardineiro);
    getline(cin, nomeCozinheiro);
    getline(cin, nomeFazendeiro);

    comunidade.push_back(new Hobbit(nomeHobbit));
    comunidade.push_back(new Jardineiro(nomeJardineiro));
    comunidade.push_back(new Cozinheiro(nomeCozinheiro));
    comunidade.push_back(new Fazendeiro(nomeFazendeiro));

    for (Hobbit* h : comunidade) {
        h->fazerAtividade();
    }

    for (Hobbit* h : comunidade) {
        delete h;
    }

    return 0;
}