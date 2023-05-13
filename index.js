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
    const {textColor, logoName, shapeColor} = data
    

    let logo;
    if(data.shape === 'Cirle'){
        logo = new Circle(textColor, logoName, shapeColor)
    } else if (data.shape === 'Triangle'){
        logo = new Triangle(textColor, logoName, shapeColor)
    } else {
        logo = new Square(textColor, logoName, shapeColor)
    }

    fs.writeFile(`./lib/logo.svg`, logo.render(), (err) =>
    err ? console.log(err) : console.log('Your logo has been created!'))
}).catch((err) => {
    console.log(`Error: ${err}`)
})

