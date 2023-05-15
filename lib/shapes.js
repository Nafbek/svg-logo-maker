
//parent class
function Shapes(textColor, shapeColor, logoName) {
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.logoName = logoName
  }
  
  //
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
  