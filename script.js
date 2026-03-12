
let nomeUsuario = document.querySelector("#nomeUsuario")
let btnMostrar = document.querySelector("#btnMostrar")
let mensagem = document.querySelector("#mensagem")


btnMostrar.addEventListener("click", () => {

let nome = nomeUsuario.value // captura o valor digitado

mensagem.innerText = `Olá, ${nome}! bem-vindo ao mundo da programação!`
mensagem.className = "text-success fw-bold"

})