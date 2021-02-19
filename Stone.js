class Stone{
    constructor(x,y,width,height){
       var options={
          restitution:0,
          isStatic:false,
          friction:1,
          density:1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image= loadImage("Plucking mangoes/stone.png")
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER);
        image(this.image, 100, 570,40, 30);
        
    }
}