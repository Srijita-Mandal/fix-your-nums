
function calculateProb() {
  const events = document.getElementById("events").value;
  const outcomes = document.getElementById("outcomes").value;
  document.getElementById("resultboxProb").style.display = "inline";

  // Validate input
  if (events <= 0 || outcomes <= 0) {
    document.getElementById("resultProb").innerHTML =
      "Invalid input. Events and outcomes must be greater than 0.";
    return;
  }

  if (events > outcomes) {
    document.getElementById("resultProb").innerHTML =
      "Invalid input. Number of events cannot be greater than number of outcomes.";
    return;
  }


  const probability = events / outcomes;
  const percentage = probability * 100;

  document.getElementById("resultProb").innerHTML =
    "The probability is " +
    probability.toFixed(2) +
    " (" +
    percentage.toFixed(2) +
    "%).";
}


function resetProb() {
  document.getElementById("events").value = "";
  document.getElementById("outcomes").value = "";
  document.getElementById("resultboxProb").style.display = "none";
}

var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    icon.src = "../assets/Image/sun.png";
  } else {
    icon.src = "../assets/Image/moon.png";
  }
};
