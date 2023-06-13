export function addAnimatedTextListener(
  buttonId,
  elementSelector,
  buttonSelector
) {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", function () {
    const element = document.querySelector(elementSelector);
    element.classList.add("animated-text");
    setTimeout(() => {
      element.classList.remove("animated-text");
    }, 2000);

    // Verificar si la clase "animated-text" se agregó al botón actualmente clicado
    const clickedButton = document.querySelector(buttonSelector);
    if (
      clickedButton === button &&
      button.classList.contains("animated-text")
    ) {
      console.log("La clase 'animated-text' se agregó al botón clicado.");
    }
  });
}
