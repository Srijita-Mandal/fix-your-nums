function calculateFibo() {
  var number = parseInt(document.getElementById("number").value);
  document.getElementById("resultboxFibo").style.display = "inline";
  var sequence = [0, 1];

  for (var i = 2; i < number; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  document.getElementById("resultFibo").innerHTML =
    "The first " +
    number +
    " terms of the Fibonacci sequence are: " +
    sequence.join(", ");
}

function resetFibo() {
  document.querySelector("#number").value = "";
  document.getElementById("resultFibo").innerHTML = "";
  document.getElementById("resultboxFibo").style.display = "none";
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
