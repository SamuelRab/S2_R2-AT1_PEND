
let inputTarefa = document.querySelector("#inputTarefa")
let btnAdicionar = document.querySelector("#btnAdicionar")
let listaTarefas = document.querySelector("#listaTarefas")
let mensagem = document.querySelector("#mensagem")

btnAdicionar.addEventListener("click", () => {

let tarefa = inputTarefa.value

if(tarefa === ""){

mensagem.innerText = "Tarefa vazia!"
mensagem.className = "text-danger fw-bold"

} else {

let novaTarefa = document.createElement("li")
novaTarefa.className = "list-group-item d-flex justify-content-between align-items-center"

let checkbox = document.createElement("input")
checkbox.type = "checkbox"
checkbox.className = "form-check-input me-2"

let textoTarefa = document.createElement("span")
textoTarefa.innerText = tarefa

let btnRemover = document.createElement("button")
btnRemover.innerText = "Remover"
btnRemover.className = "btn btn-danger btn-sm"

checkbox.addEventListener("change", () => {

if(checkbox.checked){
textoTarefa.style.textDecoration = "line-through"
textoTarefa.style.color = "gray"
}else{
textoTarefa.style.textDecoration = "none"
textoTarefa.style.color = "black"
}

})

btnRemover.addEventListener("click", () => {
novaTarefa.remove()
})

novaTarefa.appendChild(checkbox)
novaTarefa.appendChild(textoTarefa)
novaTarefa.appendChild(btnRemover)

listaTarefas.appendChild(novaTarefa)

inputTarefa.value = ""

mensagem.innerText = "Tarefa adicionada com sucesso!"
mensagem.className = "text-success fw-bold"

}

})