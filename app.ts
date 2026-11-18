const botaoTema = document.querySelector("#botaoTema") as HTMLButtonElement | null;
const chaveTema = "portfolio-matheus-tema";

if (botaoTema) {
  if (localStorage.getItem(chaveTema) === "escuro") document.body.classList.add("modo-escuro");

  const atualizarBotaoTema = (): void => {
    const escuro = document.body.classList.contains("modo-escuro");
    botaoTema.setAttribute("aria-pressed", String(escuro));
    botaoTema.setAttribute("aria-label", escuro ? "Ativar tema claro" : "Ativar tema escuro");
    botaoTema.textContent = escuro ? "☾" : "☼";
  };

  atualizarBotaoTema();
  botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");
    localStorage.setItem(chaveTema, document.body.classList.contains("modo-escuro") ? "escuro" : "claro");
    atualizarBotaoTema();
  });
}

document.querySelectorAll<HTMLElement>(".card[data-project-url]").forEach((card) => {
  const url = card.getAttribute("data-project-url")?.trim();
  const link = card.querySelector<HTMLAnchorElement>("[data-project-link]");
  if (url && link) {
    link.href = url;
    link.hidden = false;
    link.setAttribute("aria-label", `Abrir projeto: ${card.querySelector("h3")?.textContent ?? "projeto"}`);
  }
});

const emailLink = document.querySelector<HTMLAnchorElement>(".email-pendente");
if (emailLink) {
  const emailHref = emailLink.getAttribute("href") ?? "";
  if (!emailHref || emailHref.includes("SEU_EMAIL_AQUI")) {
    emailLink.removeAttribute("href");
    emailLink.setAttribute("aria-disabled", "true");
    emailLink.tabIndex = -1;
  } else {
    emailLink.removeAttribute("aria-disabled");
    emailLink.removeAttribute("tabindex");
  }
}

if ("IntersectionObserver" in window) {
  const elementos = document.querySelectorAll(".hero-texto, .hero-visual, .secao, .contato");
  elementos.forEach((elemento) => elemento.classList.add("revelar"));
  const observador = new IntersectionObserver((entradas, observer) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visivel");
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12 });
  elementos.forEach((elemento) => observador.observe(elemento));
}
