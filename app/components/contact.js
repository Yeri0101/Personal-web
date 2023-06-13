const contacts = [
  document.getElementById("instagram"),
  document.getElementById("in"),
  document.getElementById("github"),
  document.getElementById("whatsapp"),
];

const addText = document.getElementById("add-text");

const handleMouseOver = () => {
  this.loop = true;
  this.play();
  addText.textContent = "loop";
};

const handleMouseOut = () => {
  this.loop = true;
  this.play();
  addText.textContent = "autoplay";
};

for (let i = 1; i < contacts.length; i++) {
  // Add event listeners for mouseover and mouseout events to each contact element
  contacts[i].addEventListener("mouseover", handleMouseOver);
  contacts[i].addEventListener("mouseout", handleMouseOut);
}
