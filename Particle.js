class Particle
{
	constructor(x,y)
	{
		var options={
            restitution:0.4
        }
		this.body=Bodies.circle(x, y, 10, options);
		this.color = color(random(0, 255) ,random(0, 255), random(0, 255));
		World.add(world, this.body);
    } 
	display()
	{
			
			var plinkopos = this.body.position;		
			var anglepos = this.body.angle;

			push();
			translate(plinkopos.x, plinkopos.y);
			rotate(anglepos);
			fill(this.color);
			ellipse(0,0,10,10);
			pop();
			
	}

}
