function clickNaImagem(){
    let imagemAnimada = document.getElementById("imgCode")
    let infos = document.getElementById("infos")
    let textoBem = document.getElementById("bem")
    let textoVindo = document.getElementById("vindo")

    imagemAnimada.classList.add("animado")

    infos.style.display = "block"
    infos.classList.add("animacaoForm")
    
    setTimeout(() =>       
    {
    textoBem.classList.add("bemAnimado")
    textoVindo.classList.add("vindoAnimado")}, 1000
  )
}

function enviarDados() {
    alert("Indisponível por enquanto.")
}