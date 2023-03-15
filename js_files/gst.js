let gst;

document.querySelector('#submit').addEventListener('click', function(e){
    e.preventDefault();
    let totalamt= document.getElementById('amount').value;
    let rate= document.getElementById('rate').value;

    gst= parseInt(totalamt)+(totalamt * (rate/100));

    console.log(totalamt);
    console.log(rate);
    console.log(gst);

    let res1= document.querySelector('#resultCalculator1');
    // gst= Math.round(gst);
    res1.innerHTML= gst;
})

    document.querySelector("#reset").addEventListener('click', function () {
        window.location.reload();
    });