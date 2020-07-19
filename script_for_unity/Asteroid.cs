// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 0.5.40
// 

using Colyseus.Schema;

public class Asteroid : Schema {
	[Type(0, "ref", typeof(Position))]
	public Position position = new Position();

	[Type(1, "float64")]
	public double angle = 0;

	[Type(2, "float64")]
	public double angularVelocity = 0;
}

