//The Mean Calculator

const meancalculator = () => {

  if (document.getElementById("num1").value == "" || document.getElementById("num2").value == "") {
    return;
  }
  // console.log("clicked");
  const operation = document.getElementById("cal");
  const valOpe = operation.value;

  // console.log(valOpe);

  const number1 = parseInt(document.getElementById("num1").value);
  const number2 = parseInt(document.getElementById("num2").value);

  // console.log(number1);
  // console.log(number2);

  switch (valOpe) {
    case "am":
      document.getElementById("resultCalculator").innerHTML = `The Arithmetic Mean is: ${(number1 + number2)/2}`;
      // console.log(number1+number2);
      break;
    case "gm":
      document.getElementById("resultCalculator").innerHTML = `The Geometric Mean is: ${Math.sqrt(number1*number2)}`;
      break;
    case "hm":
      if (number2 == 0&& number1==0) {
        document.getElementById("resultCalculator").innerHTML = `Error!`;
      } 
      else{
        document.getElementById("resultCalculator").innerHTML = `The Harmonic Mean is: ${2*(number1*number2)/number1 + number2}`;
      }
      break;
    default:
      return;
  }
};

document.getElementById("calc").addEventListener("submit",()=>{
    meancalculator()
})
