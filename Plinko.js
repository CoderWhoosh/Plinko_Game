class Plinko
{
	constructor(x,y,r)
	{
		var options={
            isStatic:true,
        }
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}
	display()
	{
		var particlepos=this.body.position;
		push();
		translate(particlepos.x,particlepos.y);
		noStroke();
		fill("white");
		ellipse(0,0,this.r,this.r);
		pop();
	}
}
