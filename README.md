
# SVG Logo Maker

## Description
This SVG Logo Maker is a command-line application that generates a logo in svg format based on the user's input. Users are prompted to answer questions to customize the feature of the logo. Once the user has entered input for all the prompts, and the length of the logo name is not higher than 3, the logo.svg file will be generated. The application uses Node.js and the inquirer module for user input.

## User Story

AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Installation
In order to use this application, make sure to have Node.js and Node Package Manager (npm) on your local machine. Clone the repository, open the root directory of the application on your terminal, and run the command <npm install> to install any required dependecies. This application does not require any other installation otherwise.

## Usage
Open the root directory of the application, and run a command <node index.js> in your terminal. You will be then prompted to questions about your logo. Press the 'Enter' key to proceed to the next question. Once you have answered the prompts, your logo.svg file will be generated in the `lib` directory. 
  
You can also follow the syntax below to view a walkthrough video that demonsatrates the functionality of the application.

  ![Demo Video] ( https://drive.google.com/file/d/1PndoUeqoZpa1ayzvFm2NdY1JWZFsq5K-/view ) 
  
## License
N/A

 