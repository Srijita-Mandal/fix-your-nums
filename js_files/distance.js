window.onload=function(){

 document.querySelector("#submit").addEventListener("click",function(){
    // console.log("clicked");
    const operation = document.getElementById("cal");
    const valOpe = operation.value;
console.log(valOpe);
    if(valOpe=="Speed")   {
      let number1= document.getElementById("num1").value;
      let number2=document.getElementById("num2").value;
      if(number1==""||number2=="")
      {
        alert("Fill All the required Field");
        document.location.reload();
      }
      let res= number1*number2;
      document.getElementById("resultCalculator").innerHTML=res;

    }   else{
      let number1= document.getElementById("num1").value;
      let number2=document.getElementById("num2").value;
      let number3= document.getElementById("num3").value;
      let number4=document.getElementById("num4").value;
      if(number3==""||number4==""||number1==""||number2==""){
      alert("Fill all the require field");
    document.location.reload();
    }
      let res= Math.pow(((number1-number3)*(number1-number3))+((number2-number4)*(number2-number4)),0.5);
      document.getElementById("resultCalculator").innerHTML=res;

    }

 });

}