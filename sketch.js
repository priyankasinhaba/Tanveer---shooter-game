var Splashscreen;
var gameState = "wait"
   function preload(){
    Splashscreen=loadImage("Untitled design.gif")
   }
   function setup(){
    createCanvas(900,600);
playbutton=createImg("play button.jpg")
playbutton.size(70,70)
playbutton.position(600,500)
aboutbutton=createImg("about button.png")
aboutbutton.size(40,40)
aboutbutton.position(400,500)
playbutton.hide();
aboutbutton.hide(); 
   }
   function draw(){
    if (gameState == "wait"){
    background (Splashscreen);
    playbutton.show();
    aboutbutton.show(); 
    playbutton.mousePressed(()=>{

        playbutton.show();
        aboutbutton.show();
        Gamestate="play";
        
        })
        
        aboutbutton.mousePressed(()=>{
        
            playbutton.hide();
            aboutbutton.hide();
            gameState="about";
            
            })
        }
        if (gameState == "play"){
            background ("white"); 
        }
        if (gameState==="about"){
        aboutgame();
   }
}
   function aboutgame(){

    swal({
    title:"How To Play",
    text:"move around using arrow keys ,and use the space button to shoot the oppponent players,Win the game! .",
    textAllign:"center",
    confirmButtonText:"Let's Play ",
    confirmButtonColor:"red",
    
    },
       function ()  {
            gameState = "wait"
        }
    )
   }