document.querySelector("#submit").addEventListener('click',function(){
    let num= document.getElementById('fact').value ;
    let prime=[];
    let num1=num;
    for(let i=2;i<num1;i++){
       if(num%i==0){
           prime.push(i);
           while(num%i==0){
               num=num/i;
           }
       }
    }   
    console.log(prime);
    let ans=' ';
    for(let i=0;i<prime.length;i++){
       ans+=prime[i];
       if(i==(prime.length-1))
       ans+=' ';
       else
       ans+=', ';
    }
    document.getElementById('resultFact').innerHTML= `${ans}`;
})
    

