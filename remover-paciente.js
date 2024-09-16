// Seleciona a tabela no DOM
var tabela = document.querySelector("table");

// Adiciona um ouvinte de evento para a tabela que escuta eventos de clique duplo
tabela.addEventListener("dblclick", function(event){
    // Adiciona a classe "fadeOut" ao elemento pai do alvo do clique
    // Isso geralmente é feito para aplicar uma animação de desvanecimento
    event.target.parentNode.classList.add("fadeOut");

    // Define um atraso de 500 milissegundos (0,5 segundos) antes de remover o elemento
    setTimeout(function(){
        // Remove o elemento pai do alvo do clique da tabela
        event.target.parentNode.remove();
    }, 500);
});
