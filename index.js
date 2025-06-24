// Open the modal by setting its display property to 'block'
function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

// Close the modal by setting its display property to 'none'
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Close modals when clicking outside of the modal-content
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};

// Optional: Close modal on pressing the Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      modal.style.display = 'none';
    });
  }
});
// Function to toggle the visibility of a modal
function toggleModal(id) 
{
  const modal = document.getElementById(id);
  if (modal.style.display === 'block') {    
    modal.style.display = 'none';
  } else {
    modal.style.display = 'block';
  }
}
