function toggleMode() {
  //variavel para verificar se está no modo claro ou nao
  const html = document.documentElement
  html.classList.toggle("light")

  //variavel para mudar a foto dependendo do modo que estiver
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  //variavel que muda o texto da foto que muda de acordo com o tema
  const text = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto do Thalles Campos com a lingua para fora dando um sinal de joinha"
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Thalles Campos, não mostra o rosto pois ele está de lado."
    )
  }
}
