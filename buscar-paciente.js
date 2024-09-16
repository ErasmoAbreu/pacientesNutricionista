// Seleciona o botão "Buscar Paciente" no DOM usando o seletor de ID
var botaoAdicionar = document.querySelector("#buscar-paciente");

// Adiciona um ouvinte de evento para o botão que escuta o evento de clique
botaoAdicionar.addEventListener("click", function(){
    // Imprime uma mensagem no console quando o botão é clicado
    console.log("Clicado");

    // Cria um novo objeto XMLHttpRequest para realizar a requisição AJAX
    var xhr = new XMLHttpRequest();

    // Configura a requisição para o método GET e define a URL do recurso
    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    // Adiciona um ouvinte de evento para o carregamento da requisição
    xhr.addEventListener("load", function(){
        // Seleciona o elemento que exibe mensagens de erro no DOM
        var erroAjax = document.querySelector("#erro-ajax");

        // Verifica se o status da resposta é 200 (OK)
        if(xhr.status == 200){
            // Se a resposta for bem-sucedida, adiciona a classe "invisivel" ao elemento de erro para escondê-lo
            erroAjax.classList.add("invisivel");
            // Obtém a resposta da requisição em formato de texto
            var resposta = xhr.responseText;
            // Converte a resposta JSON em um objeto JavaScript
            var pacientes = JSON.parse(resposta);

            // Itera sobre o array de pacientes e adiciona cada paciente à tabela
            pacientes.forEach(function(paciente){
                adicionarPacienteNaTabela(paciente);
            });
        }else{
            // Se o status não for 200, remove a classe "invisivel" do elemento de erro para exibi-lo
            erroAjax.classList.remove("invisivel");
        }
    });

    // Envia a requisição para o servidor
    xhr.send();
});
