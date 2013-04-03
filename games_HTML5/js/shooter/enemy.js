//alien_ship.js
function Alien_Ship(source, hp)
{
	this.img = new Image();
	this.img.src=source;
		
	this.loaded = false;
	this.visible = true;
	
	this.hp = hp;
	
	this.points = this.hp*2;
	
	this.shoot = false;
	
	this.timetoshoot = 0;
	
	this.chancetoshoot = Math.random();//20%?
		
	this.img.onload = function()
	{
		loaded = true; 
		console.log("carregamento pela classe BLOCK " + loaded);
	};
	
    this.size_x = 120;
    this.size_y = 40;
    this.position_x = 0;
    this.position_y = 0;
    this.velocity_x = 0;
    this.velocity_y = 1;
    this.velocity_MAX = 15;
         
    this.update=function()
    {
    	this.position_x += this.velocity_x;	
    	this.position_y += this.velocity_y;
    	
    	this.timetoshoot++;
    	
    	if(Math.random()<0.02)
    	{
    		this.shoot = true;
    	}
    	
    	
    };
    
    this.draw=function()
    {
    	if(this.visible)
    	screen.drawImage(this.img, this.position_x, this.position_y);
    };
    
    this.mouse_down=function(mouse)
    {
    	
    };
    
    
    this.key_down=function(key)
    {
    	   	
    	
    };
    
        
    this.mouse_up=function(mouse)
    {
    	
    	
    };
    
    this.key_up=function(key)
    {
    	
    	
    };

 
 }