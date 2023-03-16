document.querySelector("#submit").addEventListener("click",function(){
    let a= document.getElementById("num1").value ;
    let b= document.getElementById("num2").value;
    let res= (a*1.0)/(b*1.0);
    document.getElementById("result").innerHTML="Normality of a Solution is "+res +' N';
})