#include "iostream"
#include "string"

using namespace std;

class MembroInatel {
protected:
    string nome;

public:
    MembroInatel(string n) : nome(n) {}

    virtual void seApresentar() {
        cout << "Sou um membro da comunidade Inatel: " << nome << "." << endl;
    }

    virtual ~MembroInatel() {}
};

class Aluno : public MembroInatel {
public:
    string curso;

    Aluno(string n, string c) : MembroInatel(n), curso(c) {}

    void seApresentar() override {
        cout << "Meu nome e " << nome << " e estudo no curso de " << curso << "." << endl;
    }
};

class Professor : public MembroInatel {
public:
    string disciplina;

    Professor(string n, string d) : MembroInatel(n), disciplina(d) {}

    void seApresentar() override {
        cout << "Meu nome e " << nome << " e leciono a disciplina de " << disciplina << "." << endl;
    }
};

int main() {
    string nomeAluno;
    string cursoAluno;
    string nomeProfessor;
    string disciplinaProfessor;

    getline(cin, nomeAluno);
    getline(cin, cursoAluno);
    getline(cin, nomeProfessor);
    getline(cin, disciplinaProfessor);

    Aluno aluno(nomeAluno, cursoAluno);
    Professor professor(nomeProfessor, disciplinaProfessor);

    aluno.seApresentar();
    professor.seApresentar();

    return 0;
}