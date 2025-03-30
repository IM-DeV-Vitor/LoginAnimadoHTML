function clickNaImagem(){
    let imagemAnimada = document.getElementById("imgCode")
    let infos = document.getElementById("infos")
    let textoBem = document.getElementById("bem")
    let textoVindo = document.getElementById("vindo")
    if (window.getComputedStyle(infos).display == "none") {
      imagemAnimada.classList.remove("animadoSaida")

      setTimeout(() => {
        textoBem.classList.remove("bemAnimadoSaida")
        textoVindo.classList.remove("vindoAnimadoSaida")
      }, 1000)

      imagemAnimada.classList.add("animado")

      infos.style.display = "block"
      infos.classList.add("animacaoForm")
      setTimeout(() =>       
      {
        textoBem.classList.add("bemAnimado")
        textoVindo.classList.add("vindoAnimado")
      }, 1000)
      imagemAnimada.style.pointerEvents = "none"

      setTimeout(() => {
        imagemAnimada.style.pointerEvents = "auto"
      }, 2700)
    } else if (window.getComputedStyle(infos).display == "block"){
        imagemAnimada.classList.remove("animado")
        infos.classList.remove("animacaoForm")

        imagemAnimada.classList.add("animadoSaida")
        infos.style.display = "none"

        setTimeout(() => {
          textoBem.classList.add("bemAnimadoSaida")
          textoVindo.classList.add("vindoAnimadoSaida")
        }, 1000)

        imagemAnimada.style.pointerEvents = "none"

        setTimeout(() => {
          imagemAnimada.style.pointerEvents = "auto"
        }, 2700)
    }
}

function enviarDados() {
    alert("Indisponível por enquanto.")
}