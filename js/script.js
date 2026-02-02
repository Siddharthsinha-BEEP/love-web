// Show love message
function showLove() {
  document.getElementById("message").innerHTML =
    "I love you more every single day ❤️";
}

// Countdown (change the date to your special day)
const startDate = new Date("2023-01-01");

setInterval(() => {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const countdown = document.getElementById("countdown");
  if (countdown) {
    countdown.innerHTML = days + " beautiful days together 💞";
  }
}, 1000);

// Unlock surprise page
function unlock() {
  const password = document.getElementById("pass").value;

  if (password === "love") {
    document.getElementById("lock").style.display = "none";
    document.getElementById("secret").style.display = "block";
  } else {
    alert("Wrong password 😜 Try again!");
  }
}

// Proposal buttons
function yes() {
  document.getElementById("answer").innerHTML =
    "YAYYYY 😍💖 I LOVE YOU FOREVER!";
}

function no() {
  document.getElementById("answer").innerHTML =
    "Haha 😏 nice try… you’re stuck with me ❤️";
}
