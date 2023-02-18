var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}

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

  // Improved factorial
  const factorial = (n) => {
    let fac = BigInt(1);
    for (var i = n; i > 0; i--) {
      fac = fac * BigInt(i);
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
                <th colspan="6">BODY MASS INDEX (BMI)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colspan="3">CLASSIFICATION</th>
                <th colspan="3">BMI SCORE (kg/m2)</th>
              </tr>
              <tr>
                <td colspan="3">Underweight</td>
                <td colspan="3">< 18.5</td>
              </tr>
              <tr>
                <td colspan="3">Normal</td>
                <td colspan="3">18.5 - 24.9</td>
              </tr>
              <tr>
                <td colspan="3">Overweight</td>
                <td colspan="3">25.0 - 29.0</td>
              </tr>
              <tr>
                <td colspan="3">Obese</td>
                <td colspan="3">30.0 - 40.0</td>
              </tr>
              <tr>
                <td colspan="3">Extreme Obese</td>
                <td colspan="3">> 40.0</td>
              </tr>
            </tbody>
          </table>
    `;
};

function ageCalculator() {
  var userinput = document.getElementById("DOB").value;
  var dob = new Date(userinput);

  if (userinput == null || userinput == "") {
    document.getElementById("message").innerHTML =
      "</br> **Choose a date please!";
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
    else if (age.years == 0 && age.months == 0 && age.days == 0) 
        ageString = "Welcome! It's your first day on earth!!";
    else ageString = "Please, Enter an valid date";  

    return (document.getElementById("resultAge").innerHTML = ageString);
  }
}

function DaysCalculator() {  
    var userinput = document.getElementById("starting-Date").value;  
    var startingdate = new Date(userinput); 
    
    var userinput1 = document.getElementById("ending-Date").value;  
    var endingdate = new Date(userinput1);  
       
    if(userinput==null || userinput1==''||userinput1==null || userinput1==''){  
      document.getElementById("message").innerHTML = "</br> **Choose both the starting date and ending date please!";    
      return false;   
    }   
    else {  
    var startingYear = startingdate.getYear();  
    var startingMonth = startingdate.getMonth();  
    var startingDate = startingdate.getDate();  
        
       
    var endingYear = endingdate.getYear();  
    var endingMonth = endingdate.getMonth();  
    var endingDate = endingdate.getDate();  
       
    var age = {};  
    var ageString = "";  
     
    yearDuration = endingYear - startingYear;  
     
    if (endingMonth >= startingMonth)   
      var monthDuration =  endingMonth - startingMonth;  
    else {  
      yearDuration--;  
      var monthDuration = 12 + endingMonth - startingMonth;  
    }  
   
    if (endingDate >= startingDate)    
      var dateDuration = endingDate - startingDate;  
    else {  
      monthDuration--;  
      var dateDuration= 31 + endingDate - startingDate;  
  
      if (monthDuration < 0) {  
        monthDuration = 11;  
        yearDuration--;  
      }  
    }  
     
    age = {  
    years: yearDuration,  
    months: monthDuration,  
    days: dateDuration  
    };  
        
        
    if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )  
       ageString = age.years + " years, " + age.months + " months, and " + age.days + " days. ";  
    else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )  
       ageString = "Only " + age.days + " days.";    
    else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )  
       ageString = age.years +  " years!";  
    else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )  
       ageString = age.years + " years and " + age.months + " months.";  
    else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )  
       ageString = age.months + " months and " + age.days + " days .";  
    else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )  
       ageString = age.years + " years, and" + age.days + " days.";  
    else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )  
       ageString = age.months + " months old.";   
    else ageString = "Please, Enter an valid date </br>You have entered Ending date which is less than the Starting Date";   
   
    return document.getElementById("resultAge").innerHTML = ageString;   
               
  }  
}  

const solutionEqu=()=>{
  const a = parseInt(document.getElementById("a").value);
  const b = parseInt(document.getElementById("b").value);
  const c = parseInt(document.getElementById("c").value);

  var disc = b * b - 4 * a * c;
  if (disc < 0) {
    var discRoot = Math.sqrt(-disc);
    var sol_real = -b / (2 * a);
    var sol_img = discRoot / (2 * a);
    var resSol_real = sol_real.toFixed(2);
    var resSol_img = sol_img.toFixed(4);
    var resSol1 = "(" + resSol_real + " + i " + resSol_img + ")";
    var resSol2 = "(" + resSol_real + " - i " + resSol_img + ")";
    document.getElementById(
      "resultEqn"
    ).innerHTML = `Solutions are ${resSol1} & ${resSol2}`;
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

// currencyConverter : Subrat Kumar
const dropList = document.querySelectorAll("form select"),
  fromCurrency = document.querySelector(".from select"),
  toCurrency = document.querySelector(".to select"),
  getButton = document.querySelector("form button");

for (let i = 0; i < dropList.length; i++) {
  for (let currency_code in country_list) {
    let selected =
      i == 0
        ? currency_code == "USD"
          ? "selected"
          : ""
        : currency_code == "INR"
        ? "selected"
        : "";
    let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
    dropList[i].insertAdjacentHTML("beforeend", optionTag);
  }
  dropList[i].addEventListener("change", (e) => {
    loadFlag(e.target);
  });
}

function loadFlag(element) {
  for (let code in country_list) {
    if (code == element.value) {
      let imgTag = element.parentElement.querySelector("img");
      imgTag.src = `https://flagcdn.com/48x36/${country_list[
        code
      ].toLowerCase()}.png`;
    }
  }
}

window.addEventListener("load", () => {
  getExchangeRate();
});

getButton.addEventListener("click", (e) => {
  e.preventDefault();
  getExchangeRate();
});

const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", () => {
  let tempCode = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = tempCode;
  loadFlag(fromCurrency);
  loadFlag(toCurrency);
  getExchangeRate();
});

function getExchangeRate() {
  const amount = document.querySelector("form input");
  const exchangeRateTxt = document.querySelector("form .exchange-rate");
  let amountVal = amount.value;
  if (amountVal == "" || amountVal == "0") {
    amount.value = "1";
    amountVal = 1;
  }
  exchangeRateTxt.innerText = "Converting...";
  let url = `https://v6.exchangerate-api.com/v6/10ebdb74b1b1eb396d1694c7/latest/${fromCurrency.value}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      let exchangeRate = result.conversion_rates[toCurrency.value];
      let totalExRate = (amountVal * exchangeRate).toFixed(2);
      exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
    })
    .catch(() => {
      exchangeRateTxt.innerText = "Something went wrong";
    });
}



function calculateHcf() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    let h
    const hcf = (x1,x2) =>{
        for(let i=0; i<=x1 && i<=x2;i++)
        {
            if(x1%i==0 && x2%i==0)
            h=i
        }
        return (h);
    }
    let resultHCF = hcf(num1,num2);
    let lcm = (num1*num2)/resultHCF
    document.getElementById('resultHCF').innerHTML = `HCF= ${resultHCF}` ;
    document.getElementById('resultLCM').innerHTML = `LCM= ${lcm}` ;

}

// function ageCalculator() {  
//     var userinput = document.getElementById("DOB").value;  
//     var dob = new Date(userinput);  
       
//     if(userinput==null || userinput==''){  
//       document.getElementById("message").innerHTML = "**Choose a date please!";    
//       return false;   
//     }   
//     else {  
//     var dobYear = dob.getYear();  
//     var dobMonth = dob.getMonth();  
//     var dobDate = dob.getDate();  
        
//     var now = new Date();   
//     var currentYear = now.getYear();  
//     var currentMonth = now.getMonth();  
//     var currentDate = now.getDate();  
       
//     var age = {};  
//     var ageString = "";  
     
//     yearAge = currentYear - dobYear;  
     
//     if (currentMonth >= dobMonth)   
//       var monthAge = currentMonth - dobMonth;  
//     else {  
//       yearAge--;  
//       var monthAge = 12 + currentMonth - dobMonth;  
//     }  
   
//     if (currentDate >= dobDate)    
//       var dateAge = currentDate - dobDate;  
//     else {  
//       monthAge--;  
//       var dateAge = 31 + currentDate - dobDate;  
  
//       if (monthAge < 0) {  
//         monthAge = 11;  
//         yearAge--;  
//       }  
//     }  
     
//     age = {  
//     years: yearAge,  
//     months: monthAge,  
//     days: dateAge  
//     };  
        
        
//     if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )  
//        ageString = age.years + " years, " + age.months + " months, and " + age.days + " days old.";  
//     else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )  
//        ageString = "Only " + age.days + " days old!";    
//     else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )  
//        ageString = age.years +  " years old.<br> Happy Birthday!!";  
//     else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )  
//        ageString = age.years + " years and " + age.months + " months old.";  
//     else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )  
//        ageString = age.months + " months and " + age.days + " days old.";  
//     else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )  
//        ageString = age.years + " years, and" + age.days + " days old.";  
//     else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )  
//        ageString = age.months + " months old.";   
//     else ageString = "Welcome to Earth! <br> It's first day on Earth!";   
   
//     return document.getElementById("resultAge").innerHTML = ageString;   
               
//   }  
// }  



// const solutionEq = () =>{
//     const a = parseInt(document.getElementById('a').value);
//     const b = parseInt(document.getElementById('b').value);
//     const c = parseInt(document.getElementById('c').value);

//     var disc = ((b*b) - (4*a*c));
//     if(disc<0){
//         document.getElementById('resultEqn').innerHTML = `The equation has no real solution` ;
//     } else{
//         var discRoot = Math.sqrt(disc);
//         var sol1 = ((-b+discRoot)/(2*a));
//         var sol2 = ((-b-discRoot)/(2*a));
//         var resSol1 = sol1.toFixed(2);
//         var resSol2 = sol2.toFixed(2);

//         document.getElementById('resultEqn').innerHTML = `Solutions are ${resSol1} & ${resSol2}` ;

//     }
// }



// reset for agecalc


function fun1(){
document.querySelector("#ageSet").addEventListener('click',function(){
    document.querySelector('#DOB').value="";
    document.getElementById("resultAge").innerHTML="";
});
}

// reset for bindec 
function fun2(){
document.querySelector("#bindecSet").addEventListener('click',function(){
    document.querySelector('#numChange').value="";
    document.getElementById('resultNumChange').innerHTML="";
});
}

// reset for bmi calculator
function fun3(){
document.querySelector("#bmiSet").addEventListener('click',function(){
    document.querySelector('#wei').value="";
    document.querySelector('#hei').value="";
    document.getElementById('resultBMImsg').innerHTML= "";
});
}

// reset for simple calculator
function fun4(){
document.querySelector("#calc1").addEventListener('click',function(){
    document.querySelector('#num1').value="";
    document.querySelector('#num2').value="";
    document.getElementById('resultCalculator').innerHTML= "";
});
}

// reset for equation calculator
function fun5(){
document.querySelector("#equationSet").addEventListener('click',function(){
    document.querySelector('#a').value="";
    document.querySelector('#b').value="";
    document.querySelector('#c').value="";
    document.getElementById('resultEqn').innerHTML = "";
});
}

// reset for factorial calculator
function fun6(){
document.querySelector("#factSet").addEventListener('click',function(){
    document.querySelector('#fact').value="";
    document.getElementById('resultFact').innerHTML= "";
});
}

// reset for logarithm calculator
function fun7(){
document.querySelector("#logSet").addEventListener('click',function(){
    document.querySelector('#log').value="";
    document.getElementById('resultLog').innerHTML= "";
});
}

// reset for power calculator
function fun8(){
document.querySelector("#powSet").addEventListener('click',function(){
    document.querySelector('#base').value="";
    document.querySelector('#index').value="";
    document.getElementById('resultPower').innerHTML= "";
});
}

// reset for temprature calculator
function fun9(){
document.querySelector("#tempSet").addEventListener('click',function(){
    document.querySelector('#temp').value="";
    document.getElementById('resultContainer').innerHTML= "";
});
}

//reset for days calculator
function daySet(){
  document.querySelector("#button1").addEventListener('click',function(){
     document.querySelector("#starting-Date").value="";
     document.querySelector("#ending-Date").value="";
     document.getElementById("resultAge").innerHTML="";
  });
}

//reset for hcf calculator
function hcfSet(){
  document.querySelector("#button1").addEventListener('click',function(){
     document.querySelector('#num1').value="";
     document.querySelector('#num2').value="";
     document.getElementById('resultHCF').innerHTML="";
     document.getElementById('resultLCM').innerHTML="";
  });
}

//reset roman
function romanSet(){
  document.getElementById("input").value="";
  document.getElementById("output").innerHTML="";
}

function resultantConversion() {
  const input = document.getElementById("input").value;

  if (document.getElementById('conversion').value === "roman-to-int") {
    const result = romanToInt(input);
    document.getElementById("output").innerHTML = `Result: ${result}`;
  } else {
    const result = intToRoman(input);
    document.getElementById("output").innerHTML = `Result: ${result}`;
  }
}

function romanToInt(roman) {
 let result = 0;
  
  if(isNaN(roman) == false)
  {
    result = "Please provide correct input";
    return result;
  }
  const romanMap = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
    "i": 1,
    "v": 5,
    "x": 10,
    "l": 50,
    "c": 100,
    "d": 500,
    "m": 1000,
  };

  for (let i = 0; i < roman.length; i++) {
    const current = romanMap[roman[i]];
    const next = romanMap[roman[i + 1]];

    if (next && current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }

  return result;
}

function intToRoman(num) {
  let result = "";
  if(isNaN(num))
  {
    result = "Please provide correct input";
    return result;
  }
  const romanMap = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  
  for (const [value, symbol] of Object.entries(romanMap).reverse()) {
    const count = Math.floor(num / value);
    num %= value;
    result += symbol.repeat(count);
  }

  return result;
}

function calcAlgebraicDeriv(){
  const coefficient = parseFloat(document.getElementById("coefficient").value);
  const exponent = parseFloat(document.getElementById("exponent").value);
  var finalCoefficient = coefficient*exponent;
  document.getElementById("inputExpression").innerHTML = `<p>Your entered expression: <b>${coefficient}x<sup>${exponent}</sup></b></p>`
  if(exponent == 0 || coefficient == 0){
    document.getElementById("resultDeriv").innerHTML = `<p>Derivative calculated: <b>0</b></p>`;
  }
  else if(exponent == 1){
    document.getElementById("resultDeriv").innerHTML = `<p>Derivative calculated: <b>${finalCoefficient}</b></p>`;
  }
  else{
    var finalExponent = exponent - 1;
    document.getElementById("resultDeriv").innerHTML = `<p>Derivative calculated: <b>${finalCoefficient}x<sup>${finalExponent}</sup></b></p>`;
  }
}

function validateForm() {
  var coefficient = document.getElementById("coefficient").value;
  var exponent = document.getElementById("exponent").value;
  if (coefficient == "" || exponent == "") {
    alert("Both Coefficient and Exponent must be filled out.");
    return false;
  }
  else{
    calcAlgebraicDeriv();
  }
}


