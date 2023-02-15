const calculateTemp = () => {
  const numberTemp = document.getElementById("temp").value;
  //console.log(typeof(parseInt(numberTemp)));
  const tempSelected = document.getElementById("temp_diff");
  const valueTemp = tempSelected.value;

  //const valueTemp = tempSelected.options[tempSelected.selectedInedex].value;
  //console.log(valueTemp);

  const celToFah = (cel) => {
    let fahrenheit = (cel / 5) * 9 + 32;
    let fahrenheitFinal = fahrenheit.toFixed(2);
    return fahrenheitFinal;
  };

  const fahToCel = (fah) => {
    let celsius = ((fah - 32) * 5) / 9;
    let celsiusFinal = celsius.toFixed(2);
    return celsiusFinal;
  };

  let resultTemp;
  if (valueTemp == "cel") {
    resultTemp = celToFah(parseInt(numberTemp));
    document.getElementById(
      "resultContainer"
    ).innerHTML = `= ${resultTemp} °Fahrenheit`;
  } else {
    resultTemp = fahToCel(parseInt(numberTemp));
    document.getElementById(
      "resultContainer"
    ).innerHTML = `= ${resultTemp} °Celsius`;
  }
};

const calculator = () => {
  const operation = document.getElementById("cal");
  const valOpe = operation.value;

  const number1 = parseInt(document.getElementById("num1").value);
  const number2 = parseInt(document.getElementById("num2").value);

  switch (valOpe) {
    case "sum":
      document.getElementById("resultCalculator").innerHTML = `= ${
        number1 + number2
      }`;
      break;
    case "subs":
      document.getElementById("resultCalculator").innerHTML = `= ${
        number1 - number2
      }`;
      break;
    case "mult":
      document.getElementById("resultCalculator").innerHTML = `= ${
        number1 * number2
      }`;
      break;
    case "div":
      if (number2 == 0) {
        document.getElementById("resultCalculator").innerHTML = `Error!`;
      } else {
        let division = number1 / number2;
        let diviFinal = division.toFixed(2);
        document.getElementById(
          "resultCalculator"
        ).innerHTML = `= ${diviFinal}`;
      }
      break;
    case "modu":
      if (number2 == 0) {
        document.getElementById("resultCalculator").innerHTML = `Error!`;
      } else {
        document.getElementById("resultCalculator").innerHTML = `= ${
          number1 % number2
        }`;
      }
      break;
    default:
      return;
  }
};

const changeNumber = () => {
  const numberCh = document.getElementById("numChange").value;

  const SysSelected = document.getElementById("numSys");
  const valueNumCh = SysSelected.value;

  const binToDec = (bin) => {
    let decimal = parseInt(bin, 2);
    return decimal;
  };

  const decToBin = (dec) => {
    // let binaryNum = new Array(32);

    // let i=0;
    // while(dec>0){
    //    binaryNum[i] = dec % 2;
    //    dec = Math.floor(dec / 2);
    //    i++;
    // }
    // for (let j = i - 1; j >= 0; j--){
    //    document.write(binaryNum[j]);
    // }

    var bNum = 0;
    var cnt = 0;
    while (dec != 0) {
      var rem = dec % 2;
      var c = Math.pow(10, cnt);
      bNum += rem * c;
      dec = parseInt(dec / 2);

      cnt++;
    }
    return bNum;
  };

  let resultNumCh;
  if (valueNumCh == "dec") {
    resultNumCh = decToBin(parseInt(numberCh));
    document.getElementById(
      "resultNumChange"
    ).innerHTML = `Binary= ${resultNumCh} `;
  } else {
    resultNumCh = binToDec(parseInt(numberCh));
    document.getElementById(
      "resultNumChange"
    ).innerHTML = `Decimal= ${resultNumCh} `;
  }
};

const calculatePower = () => {
  const base = parseInt(document.getElementById("base").value);
  const index = parseInt(document.getElementById("index").value);

  const power = (x, n) => {
    return Math.pow(x, n);
  };
  let resultPow = power(base, index);
  document.getElementById(
    "resultPower"
  ).innerHTML = `${base}^${index}=${resultPow}`;
};

const calculateFact = () => {
  const fact = parseInt(document.getElementById("fact").value);

  const factorial = (n) => {
    let fac = 1;
    for (var i = n; i > 0; i--) {
      fac = fac * i;
    }
    return fac;
  };
  let resultFact;
  if (fact < 0) {
    document.getElementById("resultFact").innerHTML = `Error!`;
  } else if (fact == 0) {
    document.getElementById("resultFact").innerHTML = `Factorial= 1`;
  } else {
    resultFact = factorial(parseInt(fact));
    document.getElementById(
      "resultFact"
    ).innerHTML = `Factorial= ${resultFact}`;
  }
};

const calculateLog = () => {
  const log = parseInt(document.getElementById("log").value);

  const logarithm = (x) => {
    return Math.log(x);
  };
  let rasultLog;
  if (log < 0) {
    document.getElementById("resultLog").innerHTML = `Error!`;
  } else if (log == 0) {
    document.getElementById("resultLog").innerHTML = `-∞`;
  } else {
    rasultLog = logarithm(parseInt(log));
    resultLogFinal = rasultLog.toFixed(2);
    document.getElementById(
      "resultLog"
    ).innerHTML = `Logarithm= ${resultLogFinal}`;
  }
};

const calculateBMI = () => {
  const wei = parseInt(document.getElementById("wei").value);
  const hei = parseInt(document.getElementById("hei").value);

  const bmi = (w, h) => {
    let hMet = 0.0254 * h;
    return w / (hMet * hMet);
  };
  let resultB = bmi(wei, hei);
  let resultBfinal = resultB.toFixed(2);
  document.getElementById("resultBMI").innerHTML = `Your BMI= ${resultBfinal}`;
  if (resultBfinal < 18.5) {
    document.getElementById("resultBMImsg").innerHTML = `You are Underweight`;
  } else if (resultBfinal >= 18.5 && resultBfinal <= 24.99) {
    document.getElementById("resultBMImsg").innerHTML = `You are Normal Weight`;
  } else if (resultBfinal >= 25.0 && resultBfinal <= 29.99) {
    document.getElementById("resultBMImsg").innerHTML = `You are Over Weight`;
  } else if (resultBfinal >= 30.0 && resultBfinal <= 40.0) {
    document.getElementById("resultBMImsg").innerHTML = `You are Obese`;
  } else {
    document.getElementById("resultBMImsg").innerHTML = `You are Extreme Obese`;
  }

  document.getElementById("bmiImg").innerHTML = `
  <table border="1" cellpadding="6">
          <thead>
            <tr>
              <th colspan="10">BODY MASS INDEX (BMI)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colspan="5">CLASSIFICATION</th>
              <th colspan="5">BMI SCORE (kg/m2)</th>
            </tr>
            <tr>
              <td colspan="5">Underweight</td>
              <td colspan="5">< 18.5</td>
            </tr>
            <tr>
              <td colspan="5">Normal</td>
              <td colspan="5">18.5 - 24.9</td>
            </tr>
            <tr>
              <td colspan="5">Overweight</td>
              <td colspan="5">25.0 - 29.0</td>
            </tr>
            <tr>
              <td colspan="5">Obese</td>
              <td colspan="5">30.0 - 40.0</td>
            </tr>
            <tr>
              <td colspan="5">Extreme Obese</td>
              <td colspan="5">> 40.0</td>
            </tr>
          </tbody>
        </table>
  `;
};

function ageCalculator() {
  var userinput = document.getElementById("DOB").value;
  var dob = new Date(userinput);

  if (userinput == null || userinput == "") {
    document.getElementById("message").innerHTML = "**Choose a date please!";
    return false;
  } else {
    var dobYear = dob.getYear();
    var dobMonth = dob.getMonth();
    var dobDate = dob.getDate();

    var now = new Date();
    var currentYear = now.getYear();
    var currentMonth = now.getMonth();
    var currentDate = now.getDate();

    var age = {};
    var ageString = "";

    yearAge = currentYear - dobYear;

    if (currentMonth >= dobMonth) var monthAge = currentMonth - dobMonth;
    else {
      yearAge--;
      var monthAge = 12 + currentMonth - dobMonth;
    }

    if (currentDate >= dobDate) var dateAge = currentDate - dobDate;
    else {
      monthAge--;
      var dateAge = 31 + currentDate - dobDate;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    age = {
      years: yearAge,
      months: monthAge,
      days: dateAge,
    };

    if (age.years > 0 && age.months > 0 && age.days > 0)
      ageString =
        age.years +
        " years, " +
        age.months +
        " months, and " +
        age.days +
        " days old.";
    else if (age.years == 0 && age.months == 0 && age.days > 0)
      ageString = "Only " + age.days + " days old!";
    else if (age.years > 0 && age.months == 0 && age.days == 0)
      ageString = age.years + " years old.<br> Happy Birthday!!";
    else if (age.years > 0 && age.months > 0 && age.days == 0)
      ageString = age.years + " years and " + age.months + " months old.";
    else if (age.years == 0 && age.months > 0 && age.days > 0)
      ageString = age.months + " months and " + age.days + " days old.";
    else if (age.years > 0 && age.months == 0 && age.days > 0)
      ageString = age.years + " years, and" + age.days + " days old.";
    else if (age.years == 0 && age.months > 0 && age.days == 0)
      ageString = age.months + " months old.";
    else ageString = "Welcome to Earth! <br> It's first day on Earth!";

    return (document.getElementById("resultAge").innerHTML = ageString);
  }
}

const solutionEq = () => {
  const a = parseInt(document.getElementById("a").value);
  const b = parseInt(document.getElementById("b").value);
  const c = parseInt(document.getElementById("c").value);

  var disc = b * b - 4 * a * c;
  if (disc < 0) {
    document.getElementById(
      "resultEqn"
    ).innerHTML = `The equation has no real solution`;
  } else {
    var discRoot = Math.sqrt(disc);
    var sol1 = (-b + discRoot) / (2 * a);
    var sol2 = (-b - discRoot) / (2 * a);
    var resSol1 = sol1.toFixed(2);
    var resSol2 = sol2.toFixed(2);

    document.getElementById(
      "resultEqn"
    ).innerHTML = `Solutions are ${resSol1} & ${resSol2}`;
  }
};