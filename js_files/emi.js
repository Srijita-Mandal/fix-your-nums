let emi;

document.querySelector('#submit').addEventListener('click', function(e){
    e.preventDefault();
    let totalamt= document.getElementById('amount').value;
    let time= document.getElementById('time').value;
    let rate= document.getElementById('rate').value;

    let monthlyRate= rate/(12*100);
    let n= Math.pow(1+monthlyRate, time);
    let d= n-1;

    emi=(totalamt * monthlyRate * (n/d));

    let res1= document.querySelector('#resultCalculator1');
    let res2= document.querySelector('#resultCalculator2');
    const finalamt= Math.round(time*parseFloat(emi));
    emi= Math.round(emi);
    res1.innerHTML= parseFloat(emi);
    res2.innerHTML= parseFloat(finalamt);
})

    document.querySelector("#reset").addEventListener('click', function () {
        window.location.reload();
    });