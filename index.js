const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please provide a description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "What are the contribution guidelines",
    name: "contribution",
  },
  {
    type: "input",
    message: "How do you use the application",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the test instructions?",
    name: "test",
  },
  {
    type: "list",
    message: "What license would you like to use?",
    name: "license",
    choices: [
        "Apache License 2.0",
        "Boost Software License 1.0",
        'BSD 2-clause "Simplified" license',
        'BSD 3-clause "New" or "Revised" license',
        "Creative Commons Zero v1.0 Universal",
        "Do What The F*ck You Want To Public License",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "MIT License",
        "Mozilla Public License 2.0",
        "The Unlicense",
    ],
  },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log("Completed Successfully")
    );
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile("README.md", generateMarkdown(response));
        });
}

// function call to initialize program
init();
