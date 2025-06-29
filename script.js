function toggleMore(button) {
  const currentText = button.previousElementSibling;
  const allTexts = document.querySelectorAll(".more-text");
  const allButtons = document.querySelectorAll(".read-more-btn");

  allTexts.forEach((text) => {
    if (text !== currentText) {
      text.classList.remove("show");
    }
  });

  allButtons.forEach((btn) => {
    if (btn !== button) {
      btn.textContent = "Read More";
    }
  });

  const isVisible = currentText.classList.contains("show");
  currentText.classList.toggle("show");
  button.textContent = isVisible ? "Read More" : "^^";
}
