export function scrollToSection(event) {
  event.preventDefault();

  const targetId = event.target.getAttribute("id");
  let targetElement;

  if (targetId === "btn-about-me") {
    targetElement = document.querySelector("#about-me-tittle");
    console.log(targetElement);
  } else if (targetId === "btn-projects") {
    targetElement = document.querySelector(".card-container-background");
    console.log(targetElement);
  } else if (targetId === "btn-contact") {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

    setTimeout(() => {
      const lottiePlayers = document.querySelectorAll(".network lottie-player");
      lottiePlayers.forEach((player) => {
        player.setAttribute("progress", 0);
        player.play();
      });
    }, 1000);

    return;
  }

  const yOffset = 0;
  const y =
    targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
}
