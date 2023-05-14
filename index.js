//import, user input, write a file...............


const fs = require ('fs')
const inquirer = require ('inquirer')
const {Shapes, Triangle, Circle, Square} = require ('./lib/shapes.js')

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
    

    let logo;
    if(shape === 'Circle'){
        logo = new Circle(textColor, shapeColor)
    } else if (shape === 'Triangle'){
        logo = new Triangle(textColor, shapeColor)
    } else {
        logo = new Square(textColor, shapeColor)
    }

    fs.writeFile(`./lib/logo.svg`, logo.render(logoName), (err) =>
    err ? console.log(err) : console.log('Your logo has been created!'))
}).catch((err) => {
    console.log(`Error: ${err}`)
})

