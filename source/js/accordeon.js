let buttonAccordeon = document.getElementsByClassName("tab-button--375");

for (let i = 0; i < buttonAccordeon.length; i++) {
  buttonAccordeon[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}