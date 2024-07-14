let leftButton=document.getElementById("slide-left-btn")
let rightButton=document.getElementById("slide-right-btn")
// console.log(leftButton);
let imgItem=document.querySelectorAll(".image-item")
console.log(imgItem);

let slideStart=0;
let slideEnd=(imgItem.length-1)*100;

leftButton.addEventListener("click",function(){
    if(slideStart<0){
        slideStart+=100;
    }
   else if(slideStart==0){
     slideStart=-slideEnd;
   }
    
    imgItem.forEach(element=>{
        element.style.transform=`translateX(${slideStart}%)`
    })
});



// rightButton.addEventListener("click",()=>{
// // alert("right");
// if(slideStart>=-slideEnd+100){
//     slideStart-=100;
// }
// else{
//     slideStart=0;
// }

// imgItem.forEach(element=>{
//     element.style.transform=`translateX(${slideStart}%)`
// })
// })


rightButton.addEventListener("click", () => {
    if (slideStart === -slideEnd) {
        slideStart = 0;
    } else {
        slideStart -= 100;
    }

    imgItem.forEach((element) => {
        element.style.transition = "transform 0.5s"; // Add smooth transition
        element.style.transform = `translateX(${slideStart}%)`;
    });
});