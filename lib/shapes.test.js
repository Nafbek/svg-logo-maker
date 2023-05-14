
const {Circle} = require ('./shapes.js')

const data = {
                textColor: 'red',
            logoName: 'svg',
            shape: 'circle',
            shapeColor: 'FFF'
            }

describe ('Shape', ()=> {
    describe ('Circle', ()=> {
        it('should generate a circle svg', ()=>{
            
            
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