use std::io;
fn validar_placa(placa:&str)->bool{
    let mut i = 0;
    let mut o = 0;
    for c in placa.chars(){
            if c.is_ascii_uppercase(){
                i+=1;
            //sacanagem não poder fazer i++
            }
            if c.is_numeric() {
                o+=1;
            }
    }
    placa.len() >= 7 && i >= 4 && o >= 2
}

fn main() {
    loop {
        let mut entrada = String::new();
        println!("Digite a placa do carro:");
        io::stdin().read_line(&mut entrada) .expect("Falha ao ler a linha");
        let placa = entrada.trim();
        if validar_placa(placa) {
            println!("Placa cadastrada no sistema!");
            break;
        } else {
            println!("Placa invalida! ");
        }
    }
}