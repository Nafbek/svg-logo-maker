
//Parent class for all shapes
function Shapes(textColor, shapeColor, logoName) {
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.logoName = logoName
  }
  
  //A function that render the `svg` based on the user input
  function render(shape, textColor, shapeColor, logoName) {
    if (shape === 'Circle') {
      return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="100" stroke="none" fill="#${shapeColor}" stroke-width="5"/>
          <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" style="fill: ${textColor}; font-size: 32px">${logoName}</text>
        </svg>`;
    } else if (shape === 'Triangle') {
      return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <polygon points="10 200 300 200 150 10"
            stroke="none" fill="#${shapeColor}" stroke-width="5"/>
          <text x="150" y="120" text-anchor="middle" dominant-baseline="middle" style="fill: ${textColor}; font-size: 32px">${logoName}</text>
        </svg>`;
    } else {
      return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="300" height="200" stroke="none" fill="#${shapeColor}" stroke-width="5"/>
          <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" style="fill: ${textColor}; font-size: 32px">${logoName}</text>
          
        </svg>`;
    }
  }
  
  //A circle class attached to the render method that generates a circle shape svg 
  function Circle(textColor, shapeColor) {
    return {
      render: function (logoName) {
        return render('Circle', textColor, shapeColor, logoName);
      },
    };
  }
  
  //A triangle class attached to the render method that generates a triangle shape svg
  function Triangle(textColor, shapeColor) {
    return {
      render: function (logoName) {
        return render('Triangle', textColor, shapeColor, logoName);
      },
    };
  }
  
  //A square class attached to the render method that generates a square shape svg
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
  