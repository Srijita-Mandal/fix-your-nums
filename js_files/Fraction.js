function calculateFrac() {
  // get input values
  let num1 = parseInt(document.getElementById("num-1").value);
  let den1 = parseInt(document.getElementById("den1").value);
  let num2 = parseInt(document.getElementById("num-2").value);
  let den2 = parseInt(document.getElementById("den2").value);
  let operator = document.getElementById("operator").value;
  document.getElementById("resultboxFrac").style.display = "inline";

  // perform calculation based on selected operator
  let result;
  switch (operator) {
    case "add":
      result = addFractions(num1, den1, num2, den2);
      break;
    case "subtract":
      result = subtractFractions(num1, den1, num2, den2);
      break;
    case "multiply":
      result = multiplyFractions(num1, den1, num2, den2);
      break;
    case "divide":
      result = divideFractions(num1, den1, num2, den2);
      break;
    default:
      result = "Invalid operator";
  }

  // display result
  document.getElementById("resultFrac").innerHTML = "Fraction: "+result;
}

function addFractions(num1, den1, num2, den2) {
  let den = lcm(den1, den2);
  let num = num1 * (den / den1) + num2 * (den / den2);
  return simplifyFraction(num, den);
}

function subtractFractions(num1, den1, num2, den2) {
  let den = lcm(den1, den2);
  let num = num1 * (den / den1) - num2 * (den / den2);
  return simplifyFraction(num, den);
}

function multiplyFractions(num1, den1, num2, den2) {
  let num = num1 * num2;
  let den = den1 * den2;
  return simplifyFraction(num, den);
}

function divideFractions(num1, den1, num2, den2) {
  let num = num1 * den2;
  let den = den1 * num2;
  return simplifyFraction(num, den);
}

function gcd(a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function simplifyFraction(num, den) {
  let commonFactor = gcd(num, den);
  num = num / commonFactor;
  den = den / commonFactor;

  if (den < 0) {
    num = -num;
    den = -den;
  }

  if (num === 0) {
    return 0;
  } else if (den === 1) {
    return num;
  } else {
    let whole = Math.floor(num / den);
    num = num % den;
    if (whole === 0) {
      return num + "/" + den;
    } else {
      return whole + " " + Math.abs(num) + "/" + den;
    }
  }
}

function resetFrac() {
  document.getElementById("num-1").value = "";
  document.getElementById("den1").value = "";
  document.getElementById("num-2").value = "";
  document.getElementById("den2").value = "";
  document.getElementById("operator").value ="";
  document.getElementById("resultboxFrac").style.display = "none";
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
