function createFreqTable() {
  var numList = document.getElementById("numList").value;
  document.getElementById("resultboxFreq").style.display = "inline";

  var numArray = numList.split(",");
  var freqObj = {};


  for (var i = 0; i < numArray.length; i++) {
    var num = numArray[i].trim();
    if (freqObj[num]) {
      freqObj[num]++;
    } else {
      freqObj[num] = 1;
    }
  }


  var table = document.createElement("table");

  var headerRow = document.createElement("tr");
  var header1 = document.createElement("th");
  header1.textContent = "Number";
  headerRow.appendChild(header1);
  var header2 = document.createElement("th");
  header2.textContent = "Frequency";
  headerRow.appendChild(header2);
  table.appendChild(headerRow);

  for (var num in freqObj) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    cell1.textContent = num;
    row.appendChild(cell1);
    var cell2 = document.createElement("td");
    cell2.textContent = freqObj[num];
    row.appendChild(cell2);
    table.appendChild(row);
  }

  var tableContainer = document.getElementById("resultfreq");
  tableContainer.innerHTML = "";
  tableContainer.appendChild(table);
}

function resetFreq() {
  document.getElementById("numList").value ="";
  document.getElementById("resultboxFreq").style.display = "none";
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
