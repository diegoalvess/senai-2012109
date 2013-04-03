//background.js
function Background(source)
{
	this.img = new Image();
	this.img.src = source;
	this.loaded = false;
		
	this.img.onload = function()
	{
		loaded = true; 
		console.log("carregamento pela classe BACKGROUND" + loaded);
	};
	
	this.size_x = 40;
    this.size_y = 40;
    this.position_x = 400;
    this.position_y = 600 - this.size_y;
    this.velocity_x = 5;
    this.velocity_y = 5;
    this.velocity_MAX = 15;
    
    this.update=function()
    {
    	if(direita)
    	{
    		this.position_x += this.velocity_x;
    	}
    	if(esquerda)
    	{
    		this.position_x -= this.velocity_x;
    	}
    };
    
    this.draw=function()
    {
    	
    };
    
    
 
 }