// Seleciona o botão que muda o tema da página.
const botaoTema = document.querySelector("#botaoTema") as HTMLButtonElement;

// Quando clicar, adiciona ou remove a classe de tema escuro do body.
botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("modo-escuro");
});
