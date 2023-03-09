
            document.querySelector("button").addEventListener('click',function(){
                document.getElementById("square_millimetres").value="";
                document.getElementById("square_centimetres").value="";
                document.getElementById("acres").value="";
                document.getElementById("square_metres").value="";
                document.getElementById("square_feet").value="";
                document.getElementById("square_inches").value="";
                document.getElementById("hectares").value="";
            });
            let hectare    =document.getElementById("hectares");
            let sqmetre   =document.getElementById("square_metres");
            let sqinch    =document.getElementById("square_inches");
            let sqcm      =document.getElementById("square_centimetres");
            let sqfeet    =document.getElementById("square_feet");
            let sqmm      =document.getElementById("square_millimetres");
            let acre   =document.getElementById("acres");

            function sqfeetToOther(val){
                sqmetre.value =  val*0.0929; 
                hectare.value =  val/107639.104;   
                sqcm.value    =  val*929.0304; 
                sqinch.value  =  val*144;  
                acre.value    =  val/43560; 
                sqmm.value  =  val*92903.04;       
            }
            function sqmetreToOther(val){
                sqfeet.value = val*10.763;
                sqinch.value = val*1550.003;  
                sqcm.value   = val*10000;
                sqmm.value = val*1000000; 
                acre.value   = val/4046.8564;
                hectare.value = val/10000;
            }
            function sqinchToOther(val){
                sqfeet.value = val*0.0069444;
                sqmetre.value = val/1550.003;  
                sqcm.value = val*6.4516;
                sqmm.value = val*645.16; 
                acre.value = val/6272640;
                hectare.value = val/15500031.000062;
            }
            function sqcmToOther(val){
                sqfeet.value = val*0.001076391;
                sqmetre.value = val/10000;  
                sqinch.value = val*0.15500031;
                sqmm.value = val*100; 
                acre.value = val/40468564.224 ;
                hectare.value = val/100000000;
            }
            function sqmmToOther(val){
                sqfeet.value =(val*0.001076391)/100;
                sqinch.value = (val*0.15500031)/100;  
                sqcm.value = val/100;
                sqmetre.value = (val/10000)/100; 
                acre.value = (val/40468564.224)/100;
                hectare.value = (val/100000000)/100;
            }
            function hectareToOther(val){
                sqfeet.value = val*107639.1041671;
                sqinch.value = val*15500031.000062;  
                sqcm.value = val*100000000;
                acre.value = val*2.471; 
                sqmetre.value = val*10000;
                sqmm.value = val*0.10000000000;
            }
            function acreToOther(val){
                sqfeet.value = val*43560;
                sqinch.value = val*6272640;  
                sqcm.value = val*40468564.224;
                sqmm.value = val*4046856422.4; 
                sqmetre.value = val*4046.8564;
                hectare.value = val*0.4046856;
 
            }
            // *********************//



            function convertToOthers(convertFrom,value){    
                switch(convertFrom){
                    case "sqfeet" : sqfeetToOther (parseFloat(value)); break;
                    case "sqmetre": sqmetreToOther(parseFloat(value)); break;
                    case "sqinch" : sqinchToOther(parseFloat(value)); break;
                    case "sqcm"   : sqcmToOther(parseFloat(value)); break;
                    case "acre" : acreToOther (parseFloat(value)); break;
                    case "sqmm"   : sqmmToOther (parseFloat(value)); break;
                    case "hectare" : hectareToOther(parseFloat(value)); break;
                }
            }
       