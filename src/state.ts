import {Schema, type, MapSchema, ArraySchema} from "@colyseus/schema"

// /!\ Toutes les infos ici seront partagées avec les clients !
// Si on modif ce fichier, il faut regénérer les fichier .cs correspondant (ces fichiers sont utilisés par unity)
// Pour cela utliser la commande suivante (depuis le bon dossier):
//npx schema-codegen ./src/state.ts --csharp --output ../Script

export class Player extends Schema {
    //repr d'un joueru coté serveur
    @type("string")
    sessionId:string
}

export class Position extends Schema {
    @type("float64")
    x : number

    @type("float64")
    y : number

    constructor (x,y) {
        super()
        this.x=x
        this.y=y
    }
}

export class Asteroid extends Schema {
    @type(Position)
    position: Position = new Position(0,0)

    @type("float64")
    angle: number

    @type("float64")
    angularVelocity: number

    constructor (position, angle, angularVelocity) {
        super()
        this.position = position;
        this.angle = angle;
        this.angularVelocity = angularVelocity;
    }
}

export class Spaceship extends Schema {
    @type("string")
    id:string

    @type(Position)
    position : Position = new Position(0,0)//la position du spaceship

    @type("float64")
    direction : number//la direction du spaceship indiquée par un angle en degré

    constructor (id : string) {
        super()
        this.id=id
        this.direction=0
    }

}

export class State extends Schema {
    //On garde une ref des joueurs en ligne
    @type({map:Player})
    players:MapSchema<Player>=new MapSchema<Player>();

    //la liste des spaceship
    @type({map:Spaceship})
    spaceships:MapSchema<Spaceship>=new MapSchema<Spaceship>();

}