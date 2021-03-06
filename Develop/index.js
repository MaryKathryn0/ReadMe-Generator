const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync=util.promisify(fs.writeFile);
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
function promptUser() {
    return inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "Title"
      },
      {
        type: "input",
        message: "Write brief description of your project:",
        name: "Description"
      },
      {
        type: "input",
        message: "Write any installation details (if needed):",
        name: "Installation"
      },
      {
        type: "input",
        message: "How will your project be used?",
        name: "Usage"
      },
      {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
      {
        type: "input",
        message: "List any contributors that collaborated on this project(github ids?):",
        name: "Contributors"
      },
      {
        type: "input",
        message: "List test instructions:",
        name: "Test"
      },
      {
        type: "input",
        message: "Enter Github username, and email ",
        name: "Questions"
      },
      
      

]);

}


promptUser()
  .then(function(response) {
    const md = generateMarkdown(response);

    return writeFileAsync("readme.md", md);
  })
  .then(function() {
    console.log("Successfully wrote to readme.md");
  })
  .catch(function(err) {
    console.log(err);
  });

// function to initialize program
//function init() {

//}


// function call to initialize program
//init();
