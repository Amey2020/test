class Game{
    constructor(){};
    getState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if (gameState=== 0){
            player=new Player();
            var playerCountRef=await database.ref('playerCount').once("value");
            if (playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }
            form=new Form();
            form.display();
        }
        
        

        
        kayo=createSprite(0,0);
        omen=createSprite(0,0);
        robot=createSprite(0,0);


    
    }
    

    play(){
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            image(backgroundImg,0,0,width,height);
        }
        
    }
}