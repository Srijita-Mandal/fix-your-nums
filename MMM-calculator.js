let sizeInput = document.getElementById('size');
/*let elementInput = document.getElementById('ele');

[sizeInput].forEach(input=>{
    input.addEventListener('keypress',function(event){
        event.preventDefault();
        let value= parseInt(event.key);
        if(!isNaN(value)) return input.value += value;
        if(input == elementInput && event.key == ' ') return input.value += event.key;
    })
})

/*document.querySelector("#add").addEventListener('click',function(){
let element= elementInput.value;
resArray.push(element);
document.getElementById('ele').innerHTML='';
})*/

var resArray=[];
document.querySelector("#add").addEventListener('click',function(){

let size = parseInt(sizeInput.value);
if(isNaN(size)) return alert('Please enter valid size.'); 
for(let i=0;i<size;i++){
       resArray.push(prompt('Enter Element'+(i+1)));
   
}
})
console.log(resArray);
document.querySelector("#submit").addEventListener('click',function(event){
    event?.preventDefault(); 
    

    let size1 = parseInt(sizeInput.value);
    

   

   /* elements = elements.trim(); 
    elements = elements.replace(/  +/g, ' '); 
    elements = elements.split(' '); */




    var avg=0;
    let input=' ';
    for(let i=0;i<resArray.length;i++){
        input+=resArray[i];
        input+=' ';

        avg+=parseInt(resArray[i],10);

    }
    let res= (avg*1.0)/(size1*1.0); 
    resArray.sort();
    
    document.getElementById('inputarray').innerHTML= `<p>Entered Sample is: <b>${input}</b></p>`;
     
     
     document.getElementById('result1').innerHTML= res;

     let median
     
     if(size1%2==0){
            console.log(resArray[size1/2]);
            console.log(resArray[(size1/2)-1]);
            let m1= parseInt(resArray[size1/2])+ parseInt(resArray[(size1/2)-1]);
            console.log(m1);
        median= ((m1)*1.0)/(2*1.0);
        console.log(median);
     }else{
        median= resArray[(size1-1)/2];
        console.log(median);
     }

     document.getElementById('result2').innerHTML= median;

     var modes = [], count = [], i, number, maxIndex = 0;
 
     for (i = 0; i < resArray.length; i += 1) {
         number = resArray[i];
         count[number] = (count[number] || 0) + 1;
         if (count[number] > maxIndex) {
             maxIndex = count[number];
         }
     }
  
     for (i in count)
         if (count.hasOwnProperty(i)) {
             if (count[i] === maxIndex) {
                 modes.push(Number(i));
             }
         }
         let mode1=' ';
         for(let i=0;i<modes.length;i++){
            mode1+=modes[i];
            mode1+=' ';
    
            
    

        }
    
         document.getElementById('result3').innerHTML= `${mode1}`;
})