//sceneintro.js
//Esta classe vai representar tudo o que aparece
//durante a tela de introdução do jogo
//tem que contar a história...
function SceneIntro()
{
	
    
    this.update=function()
    {
    	
    };
    
    this.draw=function()
    {
    	screen.font = "20px Comic Sans MS";
		screen.fillStyle="#000000";
		screen.fillText("INTRO", 20, 20);
		
    };
    
    this.mouse_down=function(mouse)
    {
    	console.log("INTRO mouse X " + mouse.x + " mouse Y " + mouse.y );
    	
    	currentScene = SCENES.CREDITS;
    };
    
    this.key_down=function(key)
    {
    	console.log("INTRO keyCode " + key.keyCode );
    	
    	currentScene = SCENES.LEVEL01;
    };
    
    this.mouse_up=function(mouse)
    {
    	console.log("INTRO mouse UP X " + mouse.x + " mouse Y " + mouse.y );
    	
    };
    
    this.key_up=function(key)
    {
    	console.log("INTRO key UP keyCode " + key.keyCode );
    	
    };

    
}