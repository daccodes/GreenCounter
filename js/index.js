let decrease=document.querySelector('.decrease');
let currentvalue=document.querySelector('.currentvalue');
let increase=document.querySelector('.increase');
let count=0;
let cont=document.querySelector(".row1");
setcounter();
decrease.addEventListener("click",()=>{
    count--;
    setcounter();
});
currentvalue.addEventListener("click", ()=>{
    count=0;
    setcounter();
});
increase.addEventListener("click",()=>{
    count++;
    setcounter();
});
document.addEventListener("keydown", (e)=> {
    switch(e.key){
        case "ArrowLeft":
            count--;
            setcounter();
            break;
            
        case "ArrowRight":
            count++;
            setcounter();
            break;
           
        case "ArrowDown":
            count--;
            setcounter();
            break;
            
        case "ArrowUp":
            count++;
            setcounter();
            break;
        case " ":
            count=0;
            setcounter();
            break;
        default:         
    }
});

function setcounter(){
    currentvalue.innerHTML=count.toString();
    if(parseInt(currentvalue.innerHTML)%2==0){
        decrease.classList.remove("black");
        currentvalue.classList.remove("black");
        increase.classList.remove("black");
        decrease.classList.add("whitesmoke");
        currentvalue.classList.add("whitesmoke");
        increase.classList.add("whitesmoke");
    }
    else{
        decrease.classList.remove("whitesmoke");
        currentvalue.classList.remove("whitesmoke");
        increase.classList.remove("whitesmoke");
        decrease.classList.add("black");
        currentvalue.classList.add("black");
        increase.classList.add("black");
    }
}

