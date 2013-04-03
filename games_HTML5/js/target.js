//target.js
function Target(file)
{
	this.img = new Image();
	this.img.src = file;
	this.loaded = false;
	this.visible = false;
	
	//cada carta tem os seus (veja a lógica no método):
    //int proximoAparecer, tempoParaAparecer;
    //este é estático porque é um só para todos
    //public static int tempoAtual;
	
	this.currentTime = 0;
	
	this.timeToAppear = Math.floor((Math.random()*(200))+100);
	
	this.timeForAppear = 200;
	
	this.img.onload = function()
	{
		loaded = true; 
		console.log("carregamento pela classe TARGET " + file);
	};
	
    this.size_x = 40;
    this.size_y = 40;
    this.position_x =  Math.floor((Math.random()*(tela_W - this.size_x))+1);
    this.position_y =  Math.floor((Math.random()*(tela_H - this.size_y))+1);
   
    this.velocity_x = 0;
    this.velocity_y = 0;
    
    this.velocity_MAX = 15;
    
    this.update=function()
    {
    	//move the target
    	this.position_x += this.velocity_x;	

    	this.position_y += this.velocity_y;	
    	
    	this.currentTime++;
    	
    	if (!this.visible)
            {
            	//console.log("AAAAAA");
                if (this.currentTime > this.timeToAppear)  // colocar as outras condições
                {
                	//console.log("BBBBBBBB");
                    this.visible = true;
                }
            }
	
			
    	
    		
    };
    
    this.draw=function()
    {
    	if(this.visible)
		screen.drawImage(this.img, this.position_x, this.position_y);
    }
    
    //colocar tudo no update, inclusive a parte de tempo e aparece e desaparece e sorteia posicao
 
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
