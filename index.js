const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name:"description",
        message:"Please enter a short description of your project",
    },
    {
        type:"list", 
        name: "license",
        message:"What kind of license would you like to included for your project?",
        choices: ["MIT", "GPL 3.0", "APACHE 2.0", "None"],
    }, 
    {
        type:"input",
        name:"installation",
        message:"What command should be run to install dependencies?",
        default:"npm i",
    }, 
    {
        type:"input", 
        name: "test", 
        message:"What commando should be used to run tests?", 
        default:"npm test",
    }, 
    {
        type: "input",
        name:"usage",
        message: "What does the user need to know about using the repo?",
    },
    {
        type:"input",
        name: "contributing", 
        message: "What does the user need to know about contributing to the repository?",        
    },


];

function writeToFile (fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    
}

function init() {
    inquirer.prompt(questions).then((inquirerResponses)=> {
        console.log("Generating README...");
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
        
    });
}
init();