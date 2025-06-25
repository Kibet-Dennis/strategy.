function toggleMore(button) {
  const moreText = button.previousElementSibling;
  moreText.classList.toggle('show');
  button.textContent = moreText.classList.contains('show') ? '^' : 'Read More';
}
