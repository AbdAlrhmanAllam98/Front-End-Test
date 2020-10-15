var myImages=Array.from(document.getElementsByClassName("img-item"));
var lightbox=document.querySelector(".lightbox-container");
var close=document.getElementById("close");
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var currentImageIndex=0;

for(var i=0;i<myImages.length;i++)
{
    myImages[i].addEventListener("click",showLightBox);
}

close.addEventListener("click",hideLightBox);
prev.addEventListener("click",goPrev);
next.addEventListener("click",goNext);
function hideLightBox()
{
    lightbox.style.display="none";
    /*
    lightbox.style.transform="scale(0,0)"; 
    
    dah 3ashan a5fy el lightbox 3ashan ana 7atet LL lightbox-container d-flex fe HTML  
    w bt7km feha 3n tareq transform b scale 
    scale(0,0)-> for hide
    scale(1,1)->for show
    */
}
function goPrev()
{
    if(currentImageIndex==0)
    {
        currentImageIndex=(myImages.length)-1;
    }
    else
        currentImageIndex--;
    showImage(myImages[currentImageIndex].src);
}
function goNext()
{
    if(currentImageIndex==(myImages.length)-1)
    {
        currentImageIndex=0;
    }
    else
        currentImageIndex++;
    showImage(myImages[currentImageIndex].src);
}

function showImage(img)
{
    lightbox.firstElementChild.style.backgroundImage="url("+img+")";
}
function showLightBox(e)
{
    lightbox.style.display="flex";
    //lightbox.style.transform="scale(1,1)"; dah 3ashan el lightbox K Kol
    
    //lightbox.firstElementChild.style.transform="scale(1,1)"; dah 3ashan el image

    var imgClicked=e.target.src;
    currentImageIndex=myImages.indexOf(e.target);
    showImage(imgClicked);    
}
document.addEventListener("keydown",function(e)
{
   if(e.code=="ArrowRight")
   {
       goNext();
   } 
   else if(e.code=="ArrowLeft")
   {
       goPrev();
   }
   else if(e.code=="Escape")
   {
        hideLightBox();
   }
});