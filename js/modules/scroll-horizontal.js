export function initScrollHorizontal() {
  const scrollPraticas = document.querySelector(
    ".section-praticas .container-cards",
  );
  const scrollCodigosProntos = document.querySelector(
    ".section-codigos-prontos .container-cards",
  );

  const setaVoltarPraticas = document.querySelector("#btn-voltar-praticas");

  setaVoltarPraticas.style.cursor = "Pointer";
  function voltarScrollPraticas() {
    scrollPraticas.scrollLeft -= 120;
  }
  setaVoltarPraticas.addEventListener("click", voltarScrollPraticas);

  const setaAvancarPraticas = document.querySelector("#btn-avancar-praticas");

  setaAvancarPraticas.style.cursor = "Pointer";
  function avancarScrollPraticas() {
    scrollPraticas.scrollLeft += 120;
  }
  setaAvancarPraticas.addEventListener("click", avancarScrollPraticas);

  ///////////////////////////////////////////////////////////////////////////////

  const setaVoltarCp = document.querySelector("#btn-voltar-cp");

  setaVoltarCp.style.cursor = "Pointer";
  function voltarScrollCp() {
    scrollCodigosProntos.scrollLeft -= 120;
  }
  setaVoltarCp.addEventListener("click", voltarScrollCp);

  const setaAvancarCp = document.querySelector("#btn-avancar-cp");

  setaAvancarCp.style.cursor = "Pointer";
  function avancarScrollCp() {
    scrollCodigosProntos.scrollLeft += 120;
  }
  setaAvancarCp.addEventListener("click", avancarScrollCp);
}
