let roi;

document.querySelector('#submit').addEventListener('click', function(e){
    e.preventDefault();
    let net= document.getElementById('net').value;
    let cost= document.getElementById('cost').value;

    roi= ((net-cost)/cost)*100;


    let res1= document.querySelector('#resultCalculator1');
    roi= Math.round(roi);
    res1.innerHTML= roi;
})

    document.querySelector("#reset").addEventListener('click', function () {
        window.location.reload();
    });