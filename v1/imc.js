const nome = "IMC"; // declara uma constante e atribui o valor "Armazém" (um 'string', uma cadeia de carateres)

class Cliente {
    #nascimento; // Apenas campos privados devem obrigatóriamente ser declaradas
    constructor(nome, apelido, genero, altura, peso, imc) { 
        this.nome = nome; 
        this.apelido = apelido; 
        this.genero = genero; 
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



function SituacaoPeso(imc) {  //Logica para a Situação de Peso do Cliente com base no IMC Calculado em cima 
    let SituacaoPeso = ""

    if(imc < 18.5){
        SituacaoPeso = "Baixo Peso"

    } else if (imc >= 18.5 && imc <= 24.9 ){
        SituacaoPeso = "Peso normal"

    } else if (imc >= 25 && imc <= 35 ){

        SituacaoPeso = "Peso em Excesso"
    } else if (imc >35){

        SituacaoPeso = "Obesidade"
    }

    return SituacaoPeso


  
}

Consulta.prototype.imprimir = function() {
    return `O teu IMC é ${this.cliente} no desporto ${this.TipoDesporto} em ${this.data}`;
}