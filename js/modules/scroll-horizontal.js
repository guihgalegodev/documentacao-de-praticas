export function initScrollHorizontal() {
  const scrollPraticas = document.querySelector(
    ".section-praticas .container-cards",
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

  // const scrollPs3 = document.querySelector(".section-ps3 .container-cards");

  // const setaVoltarPs3 = document.querySelector("#btn-voltar-ps3");

  // setaVoltarPs3.style.cursor = "Pointer";
  // function voltarScrollPs3() {
  //   scrollPs3.scrollLeft -= 120;
  // }
  // setaVoltarPs3.addEventListener("click", voltarScrollPs3);

  // const setaAvancarPs3 = document.querySelector("#btn-avancar-ps3");

  // setaAvancarPs3.style.cursor = "Pointer";
  // function avancarScrollPs3() {
  //   scrollPs3.scrollLeft += 120;
  // }
  // setaAvancarPs3.addEventListener("click", avancarScrollPs3);
}
