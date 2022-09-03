
    let cb=document.querySelector("canvas");
   cb.height = window.innerHeight;
   cb.width = window.innerWidth;
    tool = cb.getContext("2d");
       // tool.strokeRect(0,0,200,200);
      
       // tool.strokeRect(0,0,200,200);
   body=document.querySelector("body");
   let iX,iY,fY,fX;
   //console.log(cb.getBoundingClientRect());
   let changetop=cb.getBoundingClientRect().top;
   let changeleft=cb.getBoundingClientRect().left;
   let drawing=false;
   body.addEventListener("mousedown",function(e){
       
      
       iX=e.clientX-changeleft;
       iY=e.clientY-changetop;
       if(ctool=="pencil"||ctool=="eraser"){
       drawing=true;
       tool.beginPath();
       tool.moveTo(iX,iY);
       }

   })

   body.addEventListener("mouseup",function(e){
       if(ctool=="pencil"||ctool=="eraser"){
       drawing=false;
       }else if(ctool=="rect"||ctool=="line"){
           fX=e.clientX-changeleft;
           fY=e.clientY-changetop;
           let w=fX-iX;
           let h=fY-iY;
           if(ctool=="rect"){
           tool.strokeRect(iX,iY,w,h);
           }else if(ctool=="line"){
            tool.beginPath();
           tool.moveTo(iX,iY);
           tool.lineTo(fX,fY);
           tool.stroke();
      //console.log("pencil tool is pending");
           }
       } 
   })

   body.addEventListener("mousemove",function(e){
        if(drawing==false){
        return;
        }

       if(ctool=="pencil"||ctool=="eraser"){
       fX=e.clientX-changeleft;
       fY=e.clientY-changetop;
       // tool.beginPath();
       // tool.moveTo(iX,iY);
       tool.lineTo(fX,fY);
       tool.stroke();
       iX=fX;
       iY=fY;
       }
   })
