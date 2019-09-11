
var numberOfDrumButtons = document.querySelectorAll(".drum").length
for (var i = 0 ; i < numberOfDrumButtons; i++)
{

    document.querySelectorAll(".drum")[2].addEventListener("click" , function()
    {
    
     var audio = new Audio('sounds/tom-2.mp3');
     audio.play();
  
        
    });

    document.querySelectorAll(".drum")[i].addEventListener("click" , function()
    {
    
     var audio = new Audio('sounds/tom-1.mp3');
     audio.play();
  
        
    });


    document.querySelectorAll(".drum")[3].addEventListener("click" , function()
    {
    
     var audio = new Audio('sounds/tom-3.mp3');
     audio.play();
  
        
    });
}