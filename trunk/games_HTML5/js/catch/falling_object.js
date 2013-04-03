function FallingObject(file, size_x, size_y, sei_la, extra_life)
{
	this.img = new Image();
	this.img.src=file;
	this.loaded = false;
	this.visible = true;
	
	this.img.onload = function()
	{
		loaded = true; 
		console.log("carregamento pela classe BALL " + loaded);
	};
	
	this.size_x = size_x;
    this.size_y = size_y;
    this.position_x = Math.floor((Math.random()*(SCREEN_WIDTH-this.size_x))); 
    this.position_y = 0;
    this.velocity_x = 0;// Math.floor((Math.random()*10)+1);
    this.velocity_y = Math.floor((Math.random()*10)+5);
    
    this.velocity_MAX = 15;
    
    this.jacy = sei_la;
    
    this.extra_life = extra_life;
    
    this.update=function()
    {
    	//move the ball
    	this.position_x += this.velocity_x;	

    	this.position_y += this.velocity_y;	
    	
    	/*if(this.position_y > SCREEN_HEIGHT)
    	{
    		this.goupandrandompositionandvelocity();
    	}*/
    	
    		
    };
    
    this.goupandrandompositionandvelocity=function()
    {   	
		this.position_y = 0;
		this.position_x = Math.floor((Math.random()*(SCREEN_WIDTH-this.size_x))); 
		this.velocity_y = Math.floor((Math.random()*10)+1);
    	
    }
 
 }