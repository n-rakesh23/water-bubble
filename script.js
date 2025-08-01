const bodyEl=document.querySelector("body");

bodyEl.addEventListener("mousemove", (e)=>{
    const xPos=e.offsetX;
    const yPos=e.offsetY;
    
    const spanEl=document.createElement("span");
    spanEl.style.left=xPos+"px";
    spanEl.style.top=yPos+"px";
    bodyEl.appendChild(spanEl);

    const size = Math.random()*100;
    spanEl.style.width=size+"px";
    spanEl.style.height=size+"px";

const audioEl= document.createElement("audio");
audioEl.src = "bubble-pops.mp3";
audioEl.autoplay=true;
audioEl.loop=true;

 bodyEl.appendChild(audioEl);
    
    

    setTimeout(()=>{
            spanEl.remove();
            
    },1000)

    setTimeout(()=>{
        audioEl.remove();
    },1000)




}

);
