
let pencil=document.querySelector("#pencil");
let eraser=document.querySelector("#eraser");
let rect=document.querySelector("#rect");
let line=document.querySelector("#line");
let options=document.querySelectorAll(".size-box");
let ctool="pencil";
let pencilSize=5;
let eraserSize=5;
let rectSize=5;
let lineSize=5;

let sizeBoxArr=document.querySelectorAll(".size-box");

pencil.addEventListener("click",function(e){
   if(ctool=="pencil"){

       options[0].style.display= "flex";  
   }else{
       for(let i=0;i<options.length;i++){
           options[i].style.display= "none";   
        }
        ctool="pencil"; 
        tool.lineWidth=pencilSize;
   }
})

eraser.addEventListener("click",function(e){
    if(ctool=="eraser"){
       options[1].style.display="flex"; 
    }else{
        ctool="eraser";
        tool.lineWidth=eraserSize;
        tool.strokeStyle="white";
        for(let i=0;i<options.length;i++){
            options[i].style.display="none";
        }
        
    }
})

rect.addEventListener("click",function(e){
    if(ctool=="rect"){
       options[2].style.display= "flex";
    }else{
        for(let i=0;i<options.length;i++){
            options[i].style.display= "none";
        }
        ctool="rect";
        tool.lineWidth=rectSize;
    }
})

line.addEventListener("click",function(e){
    if(ctool=="line"){
       options[3].style.display="flex";
    }else{

        for(let i=0;i<options.length;i++){
            options[i].style.display= "none";
        }
        ctool="line";
        tool.lineWidth=lineSize;
    }
})



//Pencil Size
sizeBoxArr[0].addEventListener("click",function(e){
    //actual event occur ->target
    let elems=["size1","size2","size3","size4"];
    //console.log(e.target);
    let allTheClasses=e.target.classList;
    let firstClass=allTheClasses[0];
    let test=elems.includes(firstClass);

    if(test){
        if(firstClass=="size1"){
            pencilSize=10;
        }else if(firstClass=="size2"){
            pencilSize=12;
        }else if(firstClass=="size3"){
            pencilSize=17;
        }else if(firstClass=="size4"){
            pencilSize=25;  
        }
    }
    tool.lineWidth=pencilSize;

})

//for eraser
sizeBoxArr[1].addEventListener("click",function(e){
    //actual event occur ->target
    let elems=["size1","size2","size3","size4"];
    //console.log(e.target);
    let allTheClasses=e.target.classList;
    let firstClass=allTheClasses[0];
    let test=elems.includes(firstClass);

    if(test){
        if(firstClass=="size1"){
            eraserSize=10;
        }else if(firstClass=="size2"){
            eraserSize=12;
        }else if(firstClass=="size3"){
            eraserSize=17;
        }else if(firstClass=="size4"){
            eraserSize=25;  
        }
    }
    tool.lineWidth=eraserSize;

})

//For rectangle
sizeBoxArr[2].addEventListener("click",function(e){
    //actual event occur ->target
    let elems=["size1","size2","size3","size4"];
    //console.log(e.target);
    let allTheClasses=e.target.classList;
    let firstClass=allTheClasses[0];
    let test=elems.includes(firstClass);

    if(test){
        if(firstClass=="size1"){
            rectSize=10;
        }else if(firstClass=="size2"){
            rectSize=12;
        }else if(firstClass=="size3"){
            rectSize=17;
        }else if(firstClass=="size4"){
            rectSize=25;  
        }
    }
    tool.lineWidth=rectSize;

})
//For line
sizeBoxArr[3].addEventListener("click",function(e){
    //actual event occur ->target
    let elems=["size1","size2","size3","size4"];
    //console.log(e.target);
    let allTheClasses=e.target.classList;
    let firstClass=allTheClasses[0];
    let test=elems.includes(firstClass);

    if(test){
        if(firstClass=="size1"){
            lineSize=10;
        }else if(firstClass=="size2"){
            lineSize=12;
        }else if(firstClass=="size3"){
            lineSize=17;
        }else if(firstClass=="size4"){
            lineSize=25;  
        }
    }
    tool.lineWidth=lineSize;

})