// Seleciona o campo de filtro no DOM usando o seletor de ID
var campoFiltro = document.querySelector("#filtrar-tabela");

// Adiciona um ouvinte de evento para o campo de filtro que escuta eventos de entrada (input)
campoFiltro.addEventListener("input", function(){
    // Seleciona todos os elementos com a classe "paciente" no DOM
    var pacientes = document.querySelectorAll(".paciente");

    // Verifica se o valor do campo de filtro não está vazio
    if(this.value.length > 0){
        // Itera sobre cada elemento com a classe "paciente"
        for(var i = 0; i < pacientes.length; i++){
            // Obtém o paciente atual da iteração
            var paciente = pacientes[i];
            // Seleciona o elemento com a classe "info-nome" dentro do paciente
            var tdNome = paciente.querySelector(".info-nome");
            // Obtém o texto contido no elemento com a classe "info-nome"
            var nome = tdNome.textContent;
            // Cria uma expressão regular com o valor do campo de filtro
            // O parâmetro "i" torna a expressão regular case-insensitive (não diferencia maiúsculas de minúsculas)
            var expressao = new RegExp(this.value, "i");
            // Testa se o nome do paciente corresponde à expressão regular
            if(!expressao.test(nome)){
                // Se o nome não corresponder, adiciona a classe "invisivel" ao paciente
                paciente.classList.add("invisivel");
            }else{
                // Se o nome corresponder, remove a classe "invisivel" do paciente
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        // Se o campo de filtro estiver vazio, remove a classe "invisivel" de todos os pacientes
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
