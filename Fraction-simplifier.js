
document.querySelector("#submit").addEventListener('click',function(){
const a = parseInt(document.getElementById('numerator').value);
  const b = parseInt(document.getElementById('denominator').value);
  let h=0;
  
  let a1
  let b1
  if(a<0)
  a1=-a;
  else
  a1=a;
  if(b<0)
  b1=-b;
  else
  b1=b;
    for (let i = 1; i <= a1 && i <= b1; i++) {
      if (a1 % i == 0 && b1 % i == 0){
        h = i;}
    }
    let x= a/h;
    let y= b/h;
     
    if(x<0&&y<0){
        x=-x;
        y=-y;
    }
if(a==0&&b==0){
    document.getElementById("resultIntegral").innerHTML = `<p>Your entered expression: <b>${a}/${b}</b></p>`;
    
    document.getElementById("resultIntegral").innerHTML = `<p>Indeterminate form</p>`;
}
else if(a==0){
    document.getElementById("inputExpression").innerHTML = `<p>Your entered expression: <b>${a}/${b}</b></p>`
    
    document.getElementById("resultIntegral").innerHTML = `<p>Simplified Fraction: 0</p>`;
}
else if(b==0){
    document.getElementById("inputExpression").innerHTML = `<p>Your entered expression: <b>${a}/${b}</b></p>`
    document.getElementById("resultIntegral").innerHTML = `<p>Infinite</p>`;
}
else{
    document.getElementById("inputExpression").innerHTML = `<p>Your entered expression: <b>${a}/${b}</b></p>`
    
    


    document.getElementById("resultIntegral").innerHTML = `<p>Simplified Fraction: <b>${x}/${y}</b></p>`;
}
})
