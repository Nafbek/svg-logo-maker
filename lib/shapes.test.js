
const {Circle, Triangle, Square} = require ('./shapes.js')



describe ('Shape', ()=> {
    describe ('Circle', ()=> {
        it('should generate a circle svg', ()=>{
            let data = {
            textColor: 'red',
            logoName: 'svg',
            shape: 'circle',
            shapeColor: 'FFF'
            }
            
            returnSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" stroke="none" fill="#${data.shapeColor}" stroke-width="5"/>
                <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" style="fill: ${data.textColor}; font-size: 32px">${data.logoName}</text>
              </svg>`
              const circle = new Circle(data.textColor, data.shapeColor)

              expect(circle.render(data.logoName).replace(/\s/g, '')).toBe(returnSvg.replace(/\s/g, ''))

        })
    })
})

//why it fails?????????????whitespace character????????????????????????

describe ('Shape', ()=> {
    describe ('Triangle', ()=> {
        it('should generate a triangle svg', ()=>{
            
            let data = {
                textColor: 'red',
                logoName: 'svg',
                shape: 'triangle',
                shapeColor: 'FFF'
                }
            returnSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon points="125 150 250 150 150 50"
                  stroke="none" fill="#${data.shapeColor}" stroke-width="5"/>
                <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" style="fill: ${data.textColor}; font-size: 32px">${data.logoName}</text>
                
              </svg>`
              const triangle = new Triangle(data.textColor, data.shapeColor)

              expect(triangle.render(data.logoName).replace(/\s/g, '')).toBe(returnSvg.replace(/\s/g, ''))

        })
    })
})


describe ('Shape', ()=> {
    describe ('Square', ()=> {
        it('should generate a square svg', ()=>{
            
            let data = {
                textColor: 'red',
                logoName: 'svg',
                shape: 'square',
                shapeColor: 'FFF'
                }
            returnSvg = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="150" y="50" width="100" height="100" stroke="none" fill="#${data.shapeColor}" stroke-width="5"/>
                <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" style="fill: ${data.textColor}; font-size: 32px">${data.logoName}</text>
                
              </svg>`
              const square = new Square(data.textColor, data.shapeColor)

              expect(square.render(data.logoName).replace(/\s/g, '')).toBe(returnSvg.replace(/\s/g, ''))

        })
    })
})
