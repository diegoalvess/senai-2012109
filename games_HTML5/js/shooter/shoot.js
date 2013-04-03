//shoot.js
function Shoot(player_position_x, player_position_y, up)
{
	this.img = new Image();
	this.img.src="imgs/ball.png";//mudar para a imagem de um tiro
	this.loaded = false;
	this.visible = true;
	
	this.img.onload = function()
	{
		loaded = true; 
		console.log("carregamento pela classe SHOOT " + loaded);//to carregando repetidamente...
	};
	
	this.size_x = 40;
    this.size_y = 40;
    this.position_x = player_position_x - this.size_x/2;
    this.position_y = player_position_y - this.size_y;
    this.velocity_x =  0;
    this.velocity_y =  -20 * up;
    this.velocity_MAX = 15;
    
    this.update=function()
    {
    	//move the shoot
    	this.position_x += this.velocity_x;	

    	this.position_y += this.velocity_y;	
    	
		//TO DO fazer os outros cantos?
    	if(this.position_y < 0)
		{
			this.visible = false;	
		}
		
		//TO DO REMOVER O TIRO QD ELE NAO ESTIVER MAIS VISIVEL (ou saiu da tela ou bateu no inimigo)
	
    };
    
     this.draw=function()
    {
    	if(this.visible)
    	screen.drawImage(this.img, this.position_x, this.position_y);
    };
    
   
 }
