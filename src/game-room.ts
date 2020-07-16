import {Room, Client} from "colyseus"
import {State, Player, Spaceship, Position} from "./state"

export class GameRoom extends Room<State> {
    maxClients=30

    playerCount: number=0

    onCreate(options){
        console.log("GameRoom created !", options)
        let state=new State()
        this.setState(state)


        this.onMessage("message", (client, message) => {
            console.log(client.sessionId, "sent a message: ", message);
        })
    
        this.onMessage("update", (client, message) => {
            let player : Player = this.state.players[client.sessionId]//on met le ": Player" car pas de Typescript lors du runtime
            if (!player){
                //un joueur inconnu nous envoi un message
                return
            }
            let name = message.name
            let commands=["position", "direction"]//todo je vomis
            if (! commands.includes(name)){
                console.log(`Le joueur ${player.sessionId} nous envoi une demande d'update incunnu : ${name}`)
                return
            }
            //console.log(`${client.sessionId} demande une update de ${name}`);

            if (name=="position"){
                //TODO C'est ici qu'il faut check s'il la position est possible avant de changer this.state
                //this.state.spaceships[client.sessionId].position.x=message.x
                //this.state.spaceships[client.sessionId].position.y=message.y
                this.state.spaceships[client.sessionId].position=new Position(message.x, message.y)
            }else if (name=="direction"){
                //TODO C'est ici qu'il faut check s'il la direction est possible avant de changer this.state
                this.state.spaceships[client.sessionId].direction = message.direction
            }else{
                console.log(`${name} is not yet supported as a update command`)
            }


        })

    }

    onJoin(client : Client){
        
        console.log(`${client.sessionId} joined the game`)
        
        let player:Player = new Player()
        player.sessionId=client.sessionId
        this.state.players[player.sessionId]=player
        this.playerCount++

        let spaceship : Spaceship = new Spaceship(client.sessionId)
        this.state.spaceships[player.sessionId]=spaceship
        
    }

    onLeave(client : Client){
        console.log(`${client.sessionId} left the game`)

        delete this.state.players[client.sessionId]
        delete this.state.spaceships[client.sessionId]
        this.playerCount--
    }

    onDispose(){
        console.log("GameRoom disposed")
    }    

    reset(){
        let state=new State()
        
        
        //faire ici un state bien vide


        this.setState(state)
    }

}