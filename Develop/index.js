//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

//function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('\nThe file has been sucessfully generated!\nIt will be called "README.md" is located in this folder/directory.\nIf there was already a README.md in this directory, it has been overwritten.\n'));
}

//function to initialize app
function init() {
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'title',
        message: "1. What's the title of your project?",
        validate: (value) => {if(value){return true}else{return "Please enter a title for your project."}}
    },
    {
        type: 'input',
        name: 'description1', //motivaation
        message: "2. What was your motivation for making this project?",
        validate: (value) => {if(value){return true}else{return "Please enter in a response."}},
        
    },
    {
        type: 'input',
        message: "3. What problem does your project solve?",
        name: 'description2', //problems solved
        validate: (value) => {if(value){return true}else{return "Please enter in a response."}},
    },
    {
        type: 'input',
        message: "4. What did you learn?",
        name: 'description3', //what was learned
        validate: (value) => {if(value){return true}else{return "Please enter in a response."}},
    },
    {
        type: 'input',
        message: "5. What makes your project stand out?",
        name: 'description4', //how you stand out
        validate: (value) => {if(value){return true}else{return "Please enter in a response."}},
    },
    {
        type: 'input',
        message: "6. What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        name: 'installation',
        validate: (value) => {if(value){return true}else{return "Please enter in a response."}},
    },
    {
        type: 'input',
        message: "7. Provide instructions for how to use your project.",
        name: 'usage',
        validate: (value) => {if(value){return true}else{return "Please enter in a response."}},
    },
    {
        type: 'list',
        message:  "8. Do you want to use the Contributors Covenant Guideline for your \"Contributors\" section?",
        name: 'contributors',
        choices: ["Yes", "No"],  
    },
    {
        type: 'input',
        message: "9. What is your github username?",
        name: 'github',
        validate: (value) => {if(value){return true}else{return "Please enter in a response."}},
    },
    {
        type: 'list',
        name: 'license',
        message: "9. What license do you want to use?",
        choices: ['MIT License', 'Apache License 2.0', 'GNU GPLv3', 'ISC License', 'None'],
    },
    {
        type: 'input',
        name: 'email',
        message: "10. What is your email?",
        validate: (value) => {if(value){return true}else{return "Please enter in a response."}},
    },
    {
        type: 'input',
        name: 'tests',
        message: "11. If you have any tests, provide examples of how to run them here. If not, just write 'N/A'",
        validate: (value) => {if(value){return true}else{return "Please enter in a response."}},
    }
  ])
  .then((data) => {
    writeToFile("README.md", generateMarkdown(data));
  });
    
}

// Function call to initialize app
init();