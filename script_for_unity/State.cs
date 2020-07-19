// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 0.5.40
// 

using Colyseus.Schema;

public class State : Schema {
	[Type(0, "map", typeof(MapSchema<Player>))]
	public MapSchema<Player> players = new MapSchema<Player>();

	[Type(1, "map", typeof(MapSchema<Spaceship>))]
	public MapSchema<Spaceship> spaceships = new MapSchema<Spaceship>();

	[Type(2, "map", typeof(MapSchema<Asteroid>))]
	public MapSchema<Asteroid> asteroids = new MapSchema<Asteroid>();
}

