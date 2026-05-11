import { praticas } from "./modules/praticas.js";
import { abrirModal, initModalEvents } from "./modules/modal.js";

const btnDetalhes = document.querySelectorAll(".details");
const isMobile = window.innerWidth <= 980;

btnDetalhes.forEach((btn) => {
  btn.addEventListener("click", () => {
    const gameKey = btn.dataset.pratica;
    const listaImagens = praticas[gameKey];

    abrirModal(listaImagens);
  });
});

initModalEvents();
