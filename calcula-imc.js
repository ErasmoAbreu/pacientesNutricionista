// Seleciona o elemento com a classe "titulo" e modifica seu conteúdo
var titulo = document.querySelector(".titulo");
titulo.textContent = "Isabelle Nutricionista";

// Seleciona todos os elementos com a classe "paciente"
var pacientes = document.querySelectorAll(".paciente");

// Itera sobre cada paciente encontrado
for(let i = 0; i < pacientes.length; i++){
    let paciente = pacientes[i];

    // Seleciona as células (td) que contém o peso, altura e IMC do paciente atual
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    // Obtém os valores de peso e altura do HTML e os converte para números
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    // Valida se o peso e a altura estão dentro dos limites permitidos
    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    // Se o peso for inválido, exibe uma mensagem de erro e marca o paciente como inválido
    if(!pesoEhValido){
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    // Se a altura for inválida, exibe uma mensagem de erro e marca o paciente como inválido
    if(!alturaEhValido){
        tdImc.textContent.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }

    // Se ambos peso e altura forem válidos, calcula o IMC e exibe o resultado
    if(pesoEhValido && alturaEhValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

// Função para validar o peso
function validaPeso(peso){
    // Verifica se o peso está dentro de um intervalo válido
    if(peso >= 0 && peso < 500){
        return true;
    }else{
        return false;
    }
}

// Função para validar a altura
function validaAltura(altura){
    // Verifica se a altura está dentro de um intervalo válido
    if(altura >= 0 && altura <= 2.5){
        return true;
    }else{
        return false;
    }
}

// Função para calcular o IMC
function calculaImc(peso, altura){
    // Calcula o IMC e retorna o valor formatado com duas casas decimais
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}