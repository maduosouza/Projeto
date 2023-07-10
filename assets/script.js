function toggleMode() {
  const hmtl = document.documentElement
  if (hmtl.classList.contains("light")) {
    hmtl.classList.remove("light")
  } else {
    hmtl.classList.add("light")
  }

  const img = document.querySelector("#profile img")
  if (hmtl.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "foto Maria Eduarda olhando pra a esquerda, de top vermelho e fundo claro.")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "foto Maria Eduardaa olhando para frente com top laranja")
  }
}
