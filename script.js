
let itemInput = document.querySelector("#itemInput")
let btnAdicionar = document.querySelector("#btnAdicionar")
let listaItens = document.querySelector("#listaItens")

btnAdicionar.addEventListener("click", () => {
    
let item = itemInput.value 

let novoItem = document.createElement("li")

novoItem.innerText = item

listaItens.appendChild(novoItem)

itemInput.value = ""

})