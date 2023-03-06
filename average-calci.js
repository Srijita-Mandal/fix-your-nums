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
    
    document.getElementById('inputarray').innerHTML= `<p>Entered Array is: <b>${input}</b></p>`;
     
     
     document.getElementById('result').innerHTML= `<p>Average: <b>${res}</b></p>`;
})