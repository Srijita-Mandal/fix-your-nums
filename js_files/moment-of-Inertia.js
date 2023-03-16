
document.querySelector("#submit").addEventListener("click",function(){
  
    const operation = document.getElementById("cal");

    const valOpe = operation.value;
    
    let m= parseFloat(document.getElementById("num1").value);

    let r= parseFloat(document.getElementById("num2").value);
    
    if(valOpe=="ring"){
     

        let I= m*r*r;

        document.getElementById("resultCalculator").innerHTML=" Moment of inertia of ring is "+ I;

    }
    else if(valOpe=="disc"){

        let I1= (m*r*r*1.0)/(2*1.0);

        document.getElementById("resultCalculator").innerHTML="Moment of inertia of Disc is "+I1;

    }
    else if(valOpe=="solid-sphere"){

        let I2= 0.4*m*r*r;

        document.getElementById("resultCalculator").innerHTML="Moment of inertia of Solid-sphere is "+I2;

    }
    else if(valOpe=="hollow-sphere"){

        let I3= (m*r*2*r*1.0)/(3*1.0);

        document.getElementById("resultCalculator").innerHTML="Moment of inertia of Hollow-sphere is "+I3;

    }
    else if(valOpe=="cylinder"){

        let I4= (m*r*r*1.0)/(2*1.0);

        document.getElementById("resultCalculator").innerHTML="Moment of inertia of Cylinder is "+I4;

    }
    else{
    
        let I5= (m*r*r*1.0)/(12*1.0);

        document.getElementById("resultCalculator").innerHTML="Moment of inertia of Rod is "+I5;

    }
}
)

  

