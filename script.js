document.getElementById('openButton').addEventListener('click', function() {
  const title = document.querySelector('.valentines-title');
  const bgGif = document.querySelector('.title-bg-gif');
  const message = document.getElementById('message');
  const header = document.getElementById('marathon-header'); // New line
  const mainGif = document.getElementById('mainGif');
  const button = this;

  title.style.display = 'none';
  bgGif.style.display = 'none';
  button.style.display = 'none';

  mainGif.src = 'gifs/catphoto.png';

  // Reveal both groups
  header.classList.remove('hidden');
  header.classList.add('reveal');
  message.classList.remove('hidden');
  message.classList.add('reveal');

  startCountdown();
});

function startCountdown() {
  // Sets the target: Feb 15, 2026, at 7:00 AM
  const raceDate = new Date("February 15, 2026 07:00:00").getTime();

  const x = setInterval(function() {
    // This gets the exact time "now" automatically
    const now = new Date().getTime();

    const distance = raceDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="timer"
    // Added 'days' since we are about 10 days out!
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "GO TIME! 🏃‍♂️";
    }
  }, 1000);
}