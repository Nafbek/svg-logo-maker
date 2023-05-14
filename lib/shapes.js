// //parent class
// class Shapes {
// // anything the children classes can inherit 
// constructor(color){
//     this.color = color;
// }
// colorRender(){
// return `${this.color}`
// }
// }

// class Triangle extends Shapes{
//     constructor(text, shape){
//        super(color)
//     this.text = text;
//     this.shape = shape;

//     }

//     render(){
//         return `

// <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

// <text x="10" y="10">${this.text}</text>


//   <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
//       stroke="${this.color}" fill="transparent" stroke-width="5"/>

// </svg>




//         `// a string for the corresponding SVG file with the given shape color

//         //may be i need to use the if logic..kind of(if (circle) return....else if(square)return....else....   )
//     }
// }


// class Circle extends Shapes {
//     constructor(text, shape){
//         super(color)
//         this.text = text;
//         this.shape = shape;

//     }
//     render(){
//         return `

//         <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
//         <text x="10" y="10">${this.text}</text>


//   <circle cx="25" cy="75" r="20" stroke="${this.color}" fill="transparent" stroke-width="5"/>

// </svg>
// `// a string for the corresponding SVG file with the given shape color

//         //may be i need to use the if logic..kind of(if (circle) return....else if(square)return....else....   )
//     }
// }
// class Square extends Shapes{
//     constructor(text, shape){
//         super(color)
//         this.text = text;
//         this.shape = shape;

//     }
// render(){
//     return `

//     <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

//     <text x="10" y="10">${this.text}</text>


//   <path one" stroke="${this.color}" stroke-width="5"/>
// </svg>
// `// a string for the corresponding SVG file with the given shape color

//     //may be i need to use the if logic..kind of(if (circle) return....else if(square)return....else....   )
// }
// }



// module.exports = {
//     Shapes: Shapes,
//     Triangle: Triangle,
//     Circle: Circle,
//     Square: Square
//   }


//parent class
function Shapes(textColor, shapeColor, logoName) {
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.logoName = logoName
  }
  
  function render(shape, textColor, shapeColor, logoName) {
    if (shape === 'Circle') {
      return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="100" stroke="none" fill="#${shapeColor}" stroke-width="5"/>
          <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" style="fill: ${textColor}; font-size: 32px">${logoName}</text>
          
        </svg>`;
    } else if (shape === 'Triangle') {
      return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <polygon points="125 150 250 150 150 50"
            stroke="none" fill="#${shapeColor}" stroke-width="5"/>
          <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" style="fill: ${textColor}; font-size: 32px">${logoName}</text>
          
        </svg>`;
    } else {
      return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect x="150" y="50" width="100" height="100" stroke="none" fill="#${shapeColor}" stroke-width="5"/>
          <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" style="fill: ${textColor}; font-size: 32px">${logoName}</text>
          
        </svg>`;
    }
  }
  
  function Circle(textColor, shapeColor) {
    return {
      render: function (logoName) {
        return render('Circle', textColor, shapeColor, logoName);
      },
    };
  }
  
  function Triangle(textColor, shapeColor) {
    return {
      render: function (logoName) {
        return render('Triangle', textColor, shapeColor, logoName);
      },
    };
  }
  
  function Square(textColor, shapeColor) {
    return {
      render: function (logoName) {
        return render('Square', textColor, shapeColor, logoName);
      },
    };
  }
  
  module.exports = {
    Shapes: Shapes,
    Triangle: Triangle,
    Circle: Circle,
    Square: Square,
  };
  