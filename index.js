//
const fs = require ('fs')
const inquirer = require ('inquirer')
const {Shapes, Triangle, Circle, Square} = require ('./lib/shapes.js')
const {validateTextLength} = require('./lib/svg.js')

inquirer.prompt([
    {
        type:'input',
        message: 'Enter your logo name',
        name: 'logoName'
    },
    {
        type:'input',
        message: 'Enter a color keyword or hexadecimal for text',
        name: 'textColor'
    },
    {
        type:'list',
        message: 'Choose shape for your logo',
        name: 'shape',
        choices: [
            'Circle',
            'Triangle',
            'Square',
        ]
    },
    {
        type:'input',
        message: 'Enter a color keyword or hexadecimal for the shape',
        name: 'shapeColor'
    }

]).then((data)=> {
    const {textColor, logoName, shape, shapeColor} = data
       
    if (validateTextLength(logoName)) {
     let logo;
    if(shape === 'Circle'){
        logo = new Circle(textColor, shapeColor)
    } else if (shape === 'Triangle'){
        logo = new Triangle(textColor, shapeColor)
    } else {
        logo = new Square(textColor, shapeColor)
    }
    fs.writeFile(`./lib/logo.svg`, logo.render(logoName), (err) =>
    err ? console.log(err) : console.log('logo.svg has been generated!'))
    }

    
}).catch((err) => {
    console.log(`Error: ${err}`)
})

