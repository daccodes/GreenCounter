let decrease=document.querySelector('.decrease');
let currentvalue=document.querySelector('.currentvalue');
let increase=document.querySelector('.increase');
let count=0;
let cont=document.querySelector(".row1");
setvalue();
decrease.addEventListener("click",()=>{
    count--;
    setvalue();
});
currentvalue.addEventListener("click", ()=>{
    count=0;
    setvalue();
});
increase.addEventListener("click",()=>{
    count++;
    setvalue();
});
document.addEventListener("keydown", (e)=> {
    switch(e.key){
        case "ArrowLeft":
            count--;
            setvalue();
            break;
            
        case "ArrowRight":
            count++;
            setvalue();
            break;
           
        case "ArrowDown":
            count--;
            setvalue();
            break;
            
        case "ArrowUp":
            count++;
            setvalue();
            break;
        case " ":
            count=0;
            setvalue();
            break;
        default:         
    }
});
function setvalue(){
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
document.body.style.cursor="url('img/myhand1.png'), auto";

