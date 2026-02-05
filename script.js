document.getElementById('openButton').addEventListener('click', function() {
  const message = document.getElementById('message');
  const button = this;

  // Hide the button
  button.style.display = 'none';

  // Show the message with the animation class
  message.classList.remove('hidden');
  message.classList.add('reveal');
});