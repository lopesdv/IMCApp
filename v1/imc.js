  const imc = {
    nome: "IMC"
}; // declara uma constante e atribui o valor "Imc" (um 'string', uma cadeia de carateres)

 class Cliente {
    #nascimento; // Apenas campos privados devem obrigatóriamente ser declaradas
    constructor(nome, apelido, desporto, altura, peso, imc) { 
        this.nome = nome; 
        this.apelido = apelido; 
        this.desporto = desporto; 
        this.altura = altura;
        this.peso = peso;
        this.imc = (peso/(altura*altura)).toFixed(1); //função onde é feito o calculo com a formula IMC = peso / (altura x altura)

    }
    toString() { 
        return `${this.nomeCompleto} (° ${this.#nascimento})`;
    }
    get nomeCompleto () { // Propriedade (método "getter") que reproduz o nome completo do cliente
        return `${this.nome} ${this.apelido}`; // String template syntax (alternativa a "adição" de strings com o operador '+')
    }
    set nascimento(data) { // Propriedade (método "setter") que coloca um valor no campo privado (o que não foi feito no construtor)
        this.#nascimento = data; // Este campo é privado, isto é, invisível para outros objetos
    }
}

class TipoDesporto {
    constructor(nomeDesporto) {
        this.nomeDesporto = nomeDesporto;
    }
}



const Desportos = {
    A: "Futebol",
    B: "Surf",
    C: "Tenis"
};

const marcelo = new Cliente("Marcelo","Lopes", Desportos.A,177,68);


const Clientes = new Map();



function calcular(altura, peso, imc) {  //Logica para a Situação de Peso do Cliente com base no IMC Calculado em cima 
   
    let SituacaoPeso = ""


    altura = (document.getElementById("altura").value)/100;
    peso = document.getElementById("peso").value;

    imc = (peso/(altura*altura)).toFixed(1);


   

    if(imc < 18.5){
        SituacaoPeso =  "Baixo Peso"

    } else if (imc >= 18.5 && imc <= 24.9 ){
        SituacaoPeso = "Peso normal"

    } else if (imc >= 25 && imc <= 35 ){

        SituacaoPeso = "Peso em Excesso"
    } else if (imc >35){

        SituacaoPeso = "Obesidade"
    }

    document.getElementById("tabela").innerText= imc+ " " + SituacaoPeso
   
  
}

