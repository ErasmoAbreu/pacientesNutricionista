// Seleciona o botão "Adicionar Paciente" no DOM usando o seletor de ID
var botaoAdicionar = document.querySelector("#adicionar-paciente");

// Adiciona um ouvinte de evento para o botão, que escuta o evento de clique
botaoAdicionar.addEventListener("click", function(event){
    // Evita o comportamento padrão do botão (envio de formulário)
    event.preventDefault();

    // Seleciona o formulário que contém os dados do paciente
    var form = document.querySelector("#form-adiciona");

    // Obtém os dados do paciente do formulário
    var paciente = obtemPacienteDoFormulario(form);

    // Valida os dados do paciente e armazena os erros em um array
    var erros = validaPaciente(paciente);

    // Se houver erros, exibe as mensagens de erro e interrompe a execução
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }
    
    // Se não houver erros, adiciona o paciente à tabela
    adicionarPacienteNaTabela(paciente);

    // Limpa o formulário após adicionar o paciente
    form.reset();

    // Seleciona o elemento que exibe mensagens de erro e limpa seu conteúdo
    var mensagensDeErro = document.querySelector("#mensagens-erro");
    mensagensDeErro.innerHTML = "";
});

// Função que adiciona um paciente à tabela
function adicionarPacienteNaTabela(paciente){
    // Cria um elemento <tr> para o paciente
    var pacienteTr = montaTr(paciente);
    // Seleciona a tabela onde os pacientes são exibidos
    var tabela = document.querySelector("#tabela-pacientes");
    // Adiciona o elemento <tr> à tabela
    tabela.appendChild(pacienteTr);
}

// Função que obtém os dados do paciente a partir do formulário
function obtemPacienteDoFormulario(form){
    // Cria um objeto paciente com os dados extraídos do formulário
    var paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        // Calcula o IMC com base no peso e altura do paciente
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

// Função que monta um elemento <tr> para o paciente
function montaTr(paciente){
    // Cria um elemento <tr> para o paciente
    var pacienteTr = document.createElement("tr");
    // Adiciona a classe "paciente" ao <tr>
    pacienteTr.classList.add("paciente");

    // Adiciona células <td> ao <tr> com os dados do paciente
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

// Função que exibe mensagens de erro na tela
function exibeMensagensDeErro(erros){
    // Seleciona o elemento <ul> onde as mensagens de erro serão exibidas
    var ul = document.querySelector("#mensagens-erro");
    // Limpa o conteúdo do <ul>
    ul.innerHTML = "";
    // Para cada erro, cria um elemento <li> e adiciona ao <ul>
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

// Função que cria uma célula <td> com o dado e a classe especificada
function montaTd(dado, classe){
    // Cria um elemento <td>
    var td = document.createElement("td");
    // Define o conteúdo da célula como o dado fornecido
    td.textContent = dado;
    // Adiciona a classe à célula
    td.classList.add(classe);
    return td;
}

// Função que valida os dados do paciente
function validaPaciente(paciente){
    // Cria um array para armazenar erros
    var erros = [];

    // Verifica se o nome do paciente está vazio
    if(paciente.nome.length == 0){
        erros.push("Digite o nome do paciente!");
    }

    // Verifica se o peso é válido
    if(!validaPeso(paciente.peso)){ 
        erros.push("Peso inválido!");
    }

    // Verifica se o peso está vazio
    if(paciente.peso.length == 0){
        erros.push("Digite o peso do paciente!");
    }

    // Verifica se a altura é válida
    if (!validaAltura(paciente.altura)){ 
        erros.push("Altura inválida!");
    }

    // Verifica se a altura está vazia
    if(paciente.altura.length == 0){
        erros.push("Digite a altura do paciente!");
    }

    // Verifica se o percentual de gordura está vazio
    if(paciente.gordura.length == 0){
        erros.push("Digite o percentual de gordura do paciente!");
    }

    return erros;
}
