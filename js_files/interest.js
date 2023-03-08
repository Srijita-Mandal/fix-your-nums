

document.querySelector('#submit').addEventListener('click', function(){
    
    let p= document.getElementById('amount').value;
    let time= document.getElementById('time').value;
    let rate= document.getElementById('rate').value;
   
    
    
  let  amt= p*(1+((rate*time*1.0)/(100*1.0)));


    let res1= document.querySelector('#resultCalculator1');
    let res2= document.querySelector('#resultCalculator2');
    
    res1.innerHTML= parseFloat(amt-p);
    
    res2.innerHTML= parseFloat(amt);
    let amount = p * (Math.pow((1 + (rate / (100))), (time)));
    
    let res3= document.querySelector('#resultCalculator3');
    let res4= document.querySelector('#resultCalculator4');
    res3.innerHTML= parseFloat(amount-p);
    res4.innerHTML= parseFloat(amount);
    
    

})

    document.querySelector("#reset").addEventListener('click', function () {
        window.location.reload();
    });