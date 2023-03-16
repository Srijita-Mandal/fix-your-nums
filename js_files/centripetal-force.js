document.querySelector("#submit").addEventListener("click",function(){
    let a= document.getElementById("num1").value ;
    let b= document.getElementById("num2").value;
    let c= document.getElementById("num3").value;
    let res= a*b*b*c;
    document.getElementById("result").innerHTML="Centripetal Force is "+res+" N";
})