function calculatePL() {
  let cost = document.getElementById("cp").value;
  let sell = document.getElementById("sp").value;
  document.getElementById("resultboxPL").style.display = "inline";

  if (cost !== "" && sell !== "") {
    cost = parseFloat(cost);
    sell = parseFloat(sell);

    if (cost < sell) {
      let profit = sell - cost;
      let profitPercentage = ((profit / cost) * 100).toFixed(2);
      document.getElementById("resultPL").innerHTML =
        "You made a profit of " +
        profit.toFixed(2) +
        " (" +
        profitPercentage +
        "%)";
      document.getElementById("resultPL").style.color = "#4CAF50";
    } else if (cost > sell) {
      let loss = cost - sell;
      let lossPercentage = ((loss / cost) * 100).toFixed(2);
      document.getElementById("resultPL").innerHTML =
        "You incurred a loss of " +
        loss.toFixed(2) +
        " (" +
        lossPercentage +
        "%)";
      document.getElementById("resultPL").style.color = "#f44336";
    } else {
      document.getElementById("resultPL").innerHTML =
        "You neither made a profit nor incurred a loss";
      document.getElementById("resultPL").style.color = "#000";
    }
  } else {
    document.getElementById("resultPL").innerHTML = "";
  }
}


function resetPL() {
  document.querySelector("#cp").value = "";
  document.querySelector("#sp").value = "";
  document.getElementById("resultPL").innerHTML = "";
  document.getElementById("resultboxPL").style.display = "none";
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



