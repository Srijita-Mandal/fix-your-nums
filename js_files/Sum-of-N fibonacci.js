document.querySelector("#submit").addEventListener("click",function(){

    let n= document.getElementById("subtotal").value;
    let sum=1;
    
    let first=0;
    let second=1;
    let s=0;
    if(n==1){
        sum=0;
        second=0;

    }else if(n==2){
        sum=1;
        second=1;
    }
    else{
    for(let i=3;i<=n;i++){
s=first+second;
           sum+=s;
           first=second;
               
           second=s;
    }
    }
    document.getElementById("sum").innerHTML=sum;
    document.getElementById("nth").innerHTML=second;
})