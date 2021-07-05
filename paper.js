class Paper {
  constructor(x,y,r)
	{
		var options = { 
      density: 1, 
      friction:0,
      restitution:0.3,
      isStatic: false

    };
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			pop()
			
	}
}
