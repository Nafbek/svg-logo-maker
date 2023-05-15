
//Validate 
const validateTextLength = (logoName)=> {

    if (logoName.length > 3) {
        return console.log ('logo.svg is NOT generated. Please enter a maximum of 3 characters for a logo name!')
    }
    return true
}

module.exports = {validateTextLength}



