// Função para salvar o banco de dados (lista de tarefas) no localStorage
const setBanco = (banco) => localStorage.setItem("todoList", JSON.stringify(banco));

// Função para obter o banco de dados (lista de tarefas) do localStorage
const getBanco = () => JSON.parse(localStorage.getItem("todoList")) ?? [];

// Adiciona um ouvinte de evento ao elemento com o ID "addItem" para o evento de foco
document.getElementById("addItem").addEventListener("focus", function() {
    // Quando o campo de entrada recebe foco, a função anônima é executada
    this.placeholder = ""; // Remove o placeholder ao focar no campo
});

// Adiciona um ouvinte de evento ao elemento com o ID "addItem" para o evento de perder o foco (blur)
document.getElementById("addItem").addEventListener("blur", function() {
    // Quando o campo de entrada perde o foco, a função anônima é executada
    // Verifica se o valor do campo de entrada está vazio
    if (this.value === "") {
        // Se estiver vazio, restaura o placeholder original
        this.placeholder = "+ Add a task"; // Restaura o placeholder se o campo estiver vazio ao perder o foco
    }
});

// Função para criar um item da lista de tarefas
const criarItem = (tarefa, status, indice) => {
    // Cria um elemento label para o item
    const item = document.createElement('label');
    // Adiciona a classe 'todo_item' ao item
    item.classList.add('todo_item');
    // Define o conteúdo HTML do item, incluindo um checkbox, a tarefa e um botão de remoção
    item.innerHTML= `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X" data-indice=${indice}>
    `;

    // Adiciona o item criado à lista de tarefas no documento
    document.getElementById('todoList').appendChild(item);
}

// Função para limpar todas as tarefas da lista no documento
const limparTarefas = () => {
    // Obtém o elemento da lista de tarefas
    const todoList = document.getElementById('todoList');
    // Remove todos os filhos do elemento da lista de tarefas
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

// Função para atualizar a lista de tarefas no documento
const atualizarTarefas = () => {
    // Limpa todas as tarefas existentes
    limparTarefas();
    // Obtém o banco de dados (lista de tarefas)
    const banco = getBanco();
    // Para cada item no banco de dados, cria um item na lista de tarefas
    banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));
}

// Atualiza a lista de tarefas ao carregar o script
atualizarTarefas();

// Função para adicionar um item à lista de tarefas
const addItem = (evento) => {
    // Obtém a tecla pressionada e o texto inserido
    const tecla = evento.key;
    const texto = evento.target.value;
    // Se a tecla pressionada for "Enter"
    if (tecla === "Enter") {
        // Obtém o banco de dados
        const banco = getBanco();
        // Adiciona a nova tarefa ao banco de dados
        banco.push({"tarefa": texto, "status": ""});
        // Salva o banco de dados atualizado no localStorage
        setBanco(banco);
        // Atualiza a lista de tarefas no documento
        atualizarTarefas();
        // Limpa o campo de entrada de texto
        evento.target.value = "";
    }
}

// Função para remover um item da lista de tarefas
const removerItem = (indice) => {
    // Obtém o banco de dados
    const banco = getBanco();
    // Remove o item do banco de dados com base no índice
    banco.splice(indice, 1);
    // Salva o banco de dados atualizado no localStorage
    setBanco(banco);
    // Atualiza a lista de tarefas no documento
    atualizarTarefas();
}

// Função para atualizar o status de um item da lista de tarefas
const atualizarItem = (indice) => {
    // Obtém o banco de dados
    const banco = getBanco();
    // Alterna o status do item (checked ou não) com base no índice
    banco[indice].status = banco[indice].status === "" ? "checked" : "";
    // Salva o banco de dados atualizado no localStorage
    setBanco(banco);
    // Atualiza a lista de tarefas no documento
    atualizarTarefas();
}

// Função para gerenciar cliques nos itens da lista de tarefas
const clickItem = (evento) => {
    // Obtém o elemento clicado
    const elemento = evento.target;
    // Se o elemento clicado for um botão de remoção
    if (elemento.type === "button") {
        // Obtém o índice do item a ser removido
        const indice = elemento.dataset.indice;
        // Remove o item
        removerItem(indice);
    // Se o elemento clicado for um checkbox
    } else if (elemento.type === "checkbox") {
        // Obtém o índice do item a ser atualizado
        const indice = elemento.dataset.indice;
        // Atualiza o status do item
        atualizarItem(indice);
    }
}

// Adiciona um ouvinte de eventos para o campo de entrada de texto (adicionar item) para detectar a tecla "Enter"
document.getElementById("addItem").addEventListener("keypress", addItem);
// Adiciona um ouvinte de eventos para a lista de tarefas para detectar cliques nos itens (atualizar ou remover item)
document.getElementById("todoList").addEventListener("click", clickItem);