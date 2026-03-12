
let inputTarefa = document.querySelector("#inputTarefa")
let btnAdicionar = document.querySelector("#btnAdicionar")
let listaTarefas = document.querySelector("#listaTarefas")
let mensagem = document.querySelector("#mensagem")

btnAdicionar.addEventListener("click", () => {

let tarefa = inputTarefa.value

if(tarefa === ""){

mensagem.innerText = "Tarefa vazia, toma cuidado em!"
mensagem.className = "text-danger fw-bold"

} else {

let novaTarefa = document.createElement("li")

novaTarefa.innerText = tarefa
novaTarefa.className = "list-group-item"

listaTarefas.appendChild(novaTarefa)

inputTarefa.value = ""

mensagem.innerText = "Tarefa adicionada com sucesso em!"
mensagem.className = "text-success fw-bold"

}

})