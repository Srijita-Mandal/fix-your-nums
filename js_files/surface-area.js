window.onload=function(){

    document.querySelector("#submit").addEventListener("click",function(){
       // console.log("clicked");
       const operation = document.getElementById("cal");
       const valOpe = operation.value;
   console.log(valOpe);
       if(valOpe=="Cylinder")   {
         let number1= document.getElementById("num1").value;
         let number2=document.getElementById("num2").value;
         if(number1==""||number2=="")
         {
           alert("Fill All the required Field");
           document.location.reload();
         }
         let res= parseFloat((2*3.14*number1*number2)+(2*3.14*number1*number1));
         document.getElementById("resultCalculator").innerHTML=res;
   
       }
       else if(valOpe=="Cuboid"){
        let number1= document.getElementById("num1").value;
        let number2=document.getElementById("num2").value;
        let number3= document.getElementById("num3").value;
        if(number1==""||number2==""||number3=="")
        {
          alert("Fill All the required Field");
          document.location.reload();
        }
        let res= parseFloat(2*((number1*number2)+(number2*number3)+(number1*number3)));
        document.getElementById("resultCalculator").innerHTML=res;
        
       }  
       else if(valOpe=="Sphere"){
        let number1= document.getElementById("num2").value;
        if(number1=="")
        {
          alert("Fill All the required Field");
          document.location.reload();
        }
        let res= parseFloat(4*3.14*number1*number1);
        document.getElementById("resultCalculator").innerHTML=res;
       }
       else if(valOpe=="Cube"){
        let number1= document.getElementById("num2").value;
        if(number1=="")
        {
          alert("Fill All the required Field");
          document.location.reload();
        }
        let res= parseFloat(6*number1*number1);
        document.getElementById("resultCalculator").innerHTML=res;
       }
       
       else{
         let number1= document.getElementById("num1").value;
         let number2=document.getElementById("num2").value;
        
         if(number1==""||number2==""){
         alert("Fill all the require field");
       document.location.reload();
       }
         let res= parseFloat((3.14*number1*number2)+(3.14*number1*number1));
         document.getElementById("resultCalculator").innerHTML=res;
   
       }
   
    });
   
   }