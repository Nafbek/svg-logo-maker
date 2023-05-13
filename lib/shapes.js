//parent class
class Shapes {
// anything the children classes can inherit 
constructor(color){
    this.color = color;
}
colorRender(){
return `${this.color}`
}
}

class Triangle extends Shapes{
    constructor(text, shape){
       super(color)
    this.text = text;
    this.shape = shape;
 
    }
    
    render(){
        return `
        
<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

<text x="10" y="10">${this.text}</text>


  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="${this.color}" fill="transparent" stroke-width="5"/>

</svg>

        
        
        
        `// a string for the corresponding SVG file with the given shape color
    
        //may be i need to use the if logic..kind of(if (circle) return....else if(square)return....else....   )
    }
}


class Circle extends Shapes {
    constructor(text, shape){
        super(color)
        this.text = text;
        this.shape = shape;

    }
    render(){
        return `
        
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="10">${this.text}</text>

 
  <circle cx="25" cy="75" r="20" stroke="${this.color}" fill="transparent" stroke-width="5"/>
  
</svg>
`// a string for the corresponding SVG file with the given shape color
    
        //may be i need to use the if logic..kind of(if (circle) return....else if(square)return....else....   )
    }
}
class Square extends Shapes{
    constructor(text, shape){
        super(color)
        this.text = text;
        this.shape = shape;

    }
render(){
    return `
    
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

    <text x="10" y="10">${this.text}</text>


  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="${this.color}" stroke-width="5"/>
</svg>
`// a string for the corresponding SVG file with the given shape color

    //may be i need to use the if logic..kind of(if (circle) return....else if(square)return....else....   )
}
}



module.exports = {
    Shapes: Shapes,
    Triangle: Triangle,
    Circle: Circle,
    Square: Square
  }