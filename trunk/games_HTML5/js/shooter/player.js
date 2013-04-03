//TO DO fazer dois players?
function Player(file, initial_x, initial_y, player_key)
{
	this.img = new Image();
	this.img.src=file;
	this.loaded = false;
	this.visible = true;
	
	this.player_key = player_key;
	
	this.shoots = new Array();
	
	this.img.onload = function()
	{
		loaded = true; 
		console.log("carregamento pela classe BALL " + loaded);
	};
	
    this.position_x = initial_x;
    this.position_y = initial_y;
    this.velocity_x = 5;
    this.velocity_y = 5;
    this.size_x = 40;
    this.size_y = 40;
    this.velocity_MAX = 15;
    
    this.right = false;
    
    this.left = false;
    
    this.up = false;
    
    this.down = false;
    
    this.update=function()
    {
    	    	
    	this.move();
    	
    	this.keepInScreen();
	
    };
    
    this.move=function()
    {
    	if(this.right)
    	{
    		this.position_x += this.velocity_x;
    	}
    	if(this.left)
    	{
    		this.position_x -= this.velocity_x;
    	}
    	
    	if(this.up)
    	{
    		this.position_y -= this.velocity_y;
    	}
    	if(this.down)
    	{
    		this.position_y += this.velocity_y;
    	}
    }
    
    this.keepInScreen=function()
    {
    	//saida pela esquerda
    	if(this.position_x < 0)
    	{
    		this.position_x = 0;
    	}
    	
    	//saida por cima
    	if(this.position_y < 0)
    	{
    		this.position_y = 0;
    	}
    	
    	//saida pela esquerda
    	if(this.position_x > SCREENWIDTH - this.size_x)
    	{
    		this.position_x = SCREENWIDTH - this.size_x;
    	}
    	
    	//saida por baixo
    	if(this.position_y > SCREENHEIGHT - this.size_y)
    	{
    		this.position_y = SCREENHEIGHT - this.size_y;
    	}
    }
    
    this.draw=function()
    {
    	if(this.visible)
    	screen.drawImage(this.img, this.position_x, this.position_y);
    };
    
    this.mouse_down=function(mouse)
    {
    	
    };
        
    this.mouse_up=function(mouse)
    {
    	
    	
    };
    
    this.key_down=function(key, shoots)
    {
    	if(this.player_key == "setas")
    	{
    		if(key.keyCode == 39)
    		{
    			this.right = true;
    		}
    		else if(key.keyCode == 37)
    		{
    			this.left = true;
    		}
    	
    		if(key.keyCode == 38)
    		{
    			this.up = true;
    		}
    		else if(key.keyCode == 40)
    		{
    			this.down = true;
    		}
    		
    		if(key.keyCode == 17)
    		{    			
    			this.shoots.push(new Shoot(this.position_x+this.size_x/2, this.position_y, 1));   
    			//shoots.push(new Shoot(200, 800, 1));
 
    		}
    	}  	
    	
    	if(this.player_key == "wasd")
    	{
    		if(key.keyCode == 68)
    		{
    			this.right = true;
    		}
    		else if(key.keyCode == 65)
    		{
    			this.left = true;
    		}
    	
    		if(key.keyCode == 87)
    		{
    			this.up = true;
    		}
    		else if(key.keyCode == 83)
    		{
    			this.down = true;
    		}
    		
    		if(key.keyCode == 32)
    		{
    			this.shoots.push(new Shoot(this.position_x+this.size_x/2, this.position_y, 1));    
    		}
    	}  	

    };
    
    this.key_up=function(key)
    {
    	if(this.player_key == "setas")
    	{
    		if(key.keyCode == 39)
    		{
    			this.right = false;
    		}
    		else if(key.keyCode == 37)
    		{
    			this.left = false;
    		}
    	
    		if(key.keyCode == 38)
    		{
    			this.up = false;
    		}
    		else if(key.keyCode == 40)
    		{
    			this.down = false;
    		}
    	}  	
    	
    	if(this.player_key == "wasd")
    	{
    		if(key.keyCode == 68)
    		{
    			this.right = false;
    		}
    		else if(key.keyCode == 65)
    		{
    			this.left = false;
    		}
    	
    		if(key.keyCode == 87)
    		{
    			this.up = false;
    		}
    		else if(key.keyCode == 83)
    		{
    			this.down = false;
    		}
    	}  	

    	
    };

 
 }
