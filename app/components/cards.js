export function showMore() {
  const buttonShowMore = document.getElementById("show-more");
  const folders = document.querySelectorAll(".folder-show");

  folders.forEach((folder) => {
    folder.style.visibility = "hidden";
  });

  function showMore() {
    folders.forEach((folder) => {
      if (folder.classList.contains("hidden")) {
        // If the folder is hidden, remove the "hidden" class from the folder and its children elements
        folder.style.visibility = "visible";
        folder.style.maxHeight = null;
        folder.classList.remove("hidden");
        folder.querySelectorAll("*").forEach((el) => {
          el.style.maxHeight = null;
          el.classList.remove("hidden");
        });

        // Change the button text to "Show Less"
        buttonShowMore.textContent = "Show Less";
      } else {
        // If the folder is not hidden, add the "hidden" class to the folder and its children elements
        folder.style.maxHeight = "0";
        folder.classList.add("hidden");
        folder.querySelectorAll("*").forEach((el) => {
          el.style.maxHeight = "0";
          el.classList.add("hidden");
        });

        // Change the button text back to "Show More"
        buttonShowMore.textContent = "Show More";
      }
    });
  }

  buttonShowMore.addEventListener("click", showMore);
}
