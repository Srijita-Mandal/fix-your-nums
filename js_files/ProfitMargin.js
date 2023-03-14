function calculatePM() {
  const revenue = parseFloat(document.querySelector("#revenue").value);
  const costs = parseFloat(document.querySelector("#costs").value);
  const costsType = document.querySelector("#costs-type").value;
  document.getElementById("resultboxPM").style.display = "inline";

  let profitMargin = 0;

  if (costsType === "dollars") {
    profitMargin = ((revenue - costs) / revenue) * 100;
  } else if (costsType === "percent") {
    // profitMargin = ((revenue * (100 - costs)) / revenue) * 100;
    profitMargin = ((revenue - ((costs * revenue) / 100))/revenue)*100;
  }

  document.getElementById("resultPM").innerHTML =
    `Net profit margin: ${profitMargin.toFixed(2)}%`;
}

function resetPM() {
  document.querySelector("#revenue").value = "";
  document.querySelector("#costs").value = "";
  document.getElementById("resultPM").innerHTML = "";
  document.getElementById("resultboxPM").style.display = "none";
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
