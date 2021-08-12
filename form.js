class Form{
    constructor(){
        this.input=createInput(" ").attribute("placeholder","Enter Your Name:");
        this.playButton=createButton("Play");
        this.title=createElement("h1");
        this.greeting=createElement("h2")
    }
    setElementsPosition(){
        this.title.position(570,170);
        this.input.position(width/2-109,height/2-80);
        this.playButton.position(width/2-50,height/2-35);
        this.greeting.position(width/2-200,height/2-100);
    }
    
    setElementStyle(){
        this.input.class("customInput");
        this.playButton.class("customButton");
        this.greeting.class("greeting");
    }

    hide(){
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
    }
    handleMousePressed(){
        this.playButton.mousePressed(()=>{
            this.input.hide();
            this.playButton.hide();
            var message=`
            Hello ${this.input.value()}
            wait for another player to join...`;
            
            playerCount+=1;
            player.name=this.input.value();
            player.index=playerCount;
            player.addPlayer();
            player.updateCount(playerCount);
            this.greeting.html(message);
            this.greeting.position(550,200)
        })
    }
    display(){
        this.title.html("RADIANITE");
        this.setElementsPosition();
        this.setElementStyle();
        this.handleMousePressed();
        
    }
}