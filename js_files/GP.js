

document.querySelector('#submit').addEventListener('click', function(){
    
    let a1= document.getElementById('A1').value;
    let a2= document.getElementById('A2').value;
    let a3= document.getElementById('A3').value;
    let aN= document.getElementById('An').value;
    
    let r= (a2*1.0)/(a1*1.0);
    let r1= (a3*1.0)/(a2*1.0);
    if(r!=r1)
    {
        alert("It is not a Geometric Progression Series");
    }
    


    let a=a1;
    let res="";
    let fact=0;
    if(r>=1){
    while(a!=aN){
        res+=a;
        res+=", ";
        a=a*r;
        if(a>aN){
            alert("Nth term is not in GP of the Given Series");
            fact=1;
            
            break;
        }
    }
    res+=a;}
    else{
        while(a!=aN){
            res+=a;
            res+=", ";
            a=a*r;
            if(a<aN){
                alert("Nth term is not in GP of the Given Series");
                fact=1;
                break;
            }
        }
        res+=a;
    }
console.log(fact);
    if(fact==0)
    document.querySelector("#resultCalculator1").innerHTML=res;
    else{
        window.location.reload();
    }
    

})

    document.querySelector("#reset").addEventListener('click', function () {
        window.location.reload();
    });