function SceneLevel01()
{
	var player01 = new Player("imgs/ball.png", 20, 20, "setas");
    var player02 = new Player("imgs/ball2.png", 400, 400, "wasd");
    
    var shoots = new Array();
    
    var wave01 = new Array();
    
    for(var i = 0 ; i < 10; i++)
    {
    	wave01[i] = new Alien_Ship("imgs/block.png", 1);
    	wave01[i].position_x = 350;
    	wave01[i].position_y = 350 - (i * 100);
    }
    
    var background = new Background("imgs/background.png");
    background.position_y = SCREENHEIGHT - background.size_y;
           
    this.update=function()
    {
    	background.update();
    	
    	player01.update();
    	player02.update();
    	
    	for(var i = 0; i < shoots.length ; i++)
    	{
    		//shoots[i].update();
    	}
    	
    	for(var i = 0; i < player01.shoots.length ; i++)
    	{
    		//console.log("LISTA TIRO PLAYER 01" + i);
    		player01.shoots[i].update();
    	}
    	
    	for(var i = 0 ; i < 10; i++)
    	{
    		wave01[i].update(); 
   		}
   		
   		
    	
    };
    
    this.draw=function()
    {    	
    	background.draw();
    	
    	player01.draw();    	
    	player02.draw();
        	
    	//atualizando as posicoes dos tiros em tela
    	for(var i = 0; i < shoots.length ; i++)
    	{
    		shoots[i].draw();
    	}
    	
    	for(var i = 0; i < player01.shoots.length ; i++)
    	{
    		player01.shoots[i].draw();
    	}
    	
    	for(var i = 0 ; i < 10; i++)
    	{
    		wave01[i].draw(); 
   		}
    	
    	screen.font = "20px Comic Sans MS";
		screen.fillStyle="#000000";
		screen.fillText("LEVEL01", 20, 20);
    };
        
    this.mouse_down=function(mouse)
    {
    	console.log("LEVEL 01 mouse X " + mouse.x + " mouse Y " + mouse.y );
    };

    this.mouse_up=function(mouse)
    {
    	
    	
    };

    this.key_down=function(key)
    {
    	console.log("LEVEL 01 keyCode " + key.keyCode );
    	
    	player01.key_down(key, shoots);
    	player02.key_down(key);
    	
    };
    
    this.key_up=function(key)
    {
    	player01.key_up(key);
    	player02.key_up(key);   	
    };    
}