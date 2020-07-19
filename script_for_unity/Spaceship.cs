// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 0.5.40
// 

using Colyseus.Schema;

public class Spaceship : Schema {
	[Type(0, "string")]
	public string id = "";

	[Type(1, "ref", typeof(Position))]
	public Position position = new Position();

	[Type(2, "float64")]
	public double direction = 0;
}

