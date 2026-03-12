
let inputTarefa = document.querySelector("#inputTarefa")
let btnAdicionar = document.querySelector("#btnAdicionar")
let listaTarefas = document.querySelector("#listaTarefas")
let mensagem = document.querySelector("#mensagem")

btnAdicionar.addEventListener("click", () => {

let tarefa = inputTarefa.value

if(tarefa === ""){
mensagem.innerText = "Tarefa vazia!"
mensagem.className = "text-danger"
return
}

let li = document.createElement("li")
li.className = "list-group-item"

let checkbox = document.createElement("input")
checkbox.type = "checkbox"

let texto = document.createElement("span")
texto.innerText = " " + tarefa + " "

let btnRemover = document.createElement("button")
btnRemover.innerText = "Remover"
btnRemover.className = "btn btn-danger btn-sm"

checkbox.addEventListener("change", () => {
if(checkbox.checked){
texto.style.textDecoration = "line-through"
}else{
texto.style.textDecoration = "none"
}
})

btnRemover.addEventListener("click", () => {
li.remove()
})

li.appendChild(checkbox)
li.appendChild(texto)
li.appendChild(btnRemover)

listaTarefas.appendChild(li)

inputTarefa.value = ""

mensagem.innerText = "Tarefa adicionada!"
mensagem.className = "text-success"

})