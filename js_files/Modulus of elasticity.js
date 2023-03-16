
document.querySelector("#submit").addEventListener("click",function(){
  
    const operation = document.getElementById("cal");

    const valOpe = operation.value;
    
    let Stress= parseFloat(document.getElementById("num1").value);

    let Strain= parseFloat(document.getElementById("num2").value);
    
    if(valOpe=="ym"){
     

        let Y= (Stress*1.0)/(Strain*1.0);

        document.getElementById("resultCalculator").innerHTML=" Young's Modulus of Elasticity is "+ Y;

    }
    else if(valOpe=="bm"){

        let B= (Stress*1.0)/(Strain*1.0);

        document.getElementById("resultCalculator").innerHTML="Bulk Modulus of Elasticity is "+B;

    }
    else{
    
        let S= (Stress*1.0)/(Strain*1.0);

        document.getElementById("resultCalculator").innerHTML="Shear Modulus of Elasticity "+ S;

    }
}
)

  

