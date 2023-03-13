const level=document.getElementById("bsl");
getButtonsubmit=document.getElementById("submit-bsl");
getButtonreset=document.getElementById("bslSet");
ans=document.getElementById("resultBSR")


getButtonreset.addEventListener("click",()=>{
    level.value="";
    ans.innerHTML='Converting...';
})

function check(){
    //console.log(level);
    if(level.value<=100){
        ans.innerHTML='You have normal blood sugar level';
    }
    if(level.value>100){
        ans.innerHTML='You have high blood sugar level. Try to be in the 80-100 range'
    }
    console.log(ans);
}

getButtonsubmit.addEventListener("click",()=>{
    check();
});
