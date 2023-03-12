function calculateTip() {
    const bill = document.getElementById("bill").value;
    const tip = document.getElementById("tip").value;
    const tipAmount = bill * (tip / 100);
    const total = parseFloat(bill) + parseFloat(tipAmount);
    document.getElementById("resultTipContainer").innerHTML = `Tip: Rs ${tipAmount.toFixed(2)}<br>Total: Rs ${total.toFixed(2)}`;
  }
  
  // Function to reset the tip calculator form
  function tipReset() {
    document.getElementById("tipCalc").reset();
    document.getElementById("resultTipContainer").innerHTML = "";
  }

 