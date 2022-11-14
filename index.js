// consider adding validation to ensure that user input provided is in the proper expected format.

// Node Modules
const inquirer = require("inquirer");
const fs = require("fs");

// ./lib Modules 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// An array for each employee card to be added to
const employee = [];

// Prompted questions for the user in CL
function addTeamMember(data) {
    inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "What is your role?",
                choices: ["Manager", "Engineer", "Intern"],
            },
            {
                type: "input",
                name: "name",
                message: "What is your name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is your employee I.D?",
                validate: function (input) {
                    if (!input) {
                        console.log('Please enter a valid I.D number');
                        return false;
                    } else if (isNaN(parseInt(input))) {
                        console.log(' Please enter a number')
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is your email address?",
            },
            // Additional questions as per role selected
            // data = the users input
            // Manager selection
            {
                type: "input",
                name: "officeNumber",
                message: "What is your office number?",
                when: (data) => data.role === "Manager",
            },
            // Engineer Selection
            {
                type: "input",
                name: "github",
                message: "What is your GitHub username?",
                when: (data) => data.role === "Engineer",
            },
            // Intern Selection
            {
                type: "input",
                name: "school",
                message: "What school do you attend?",
                when: (data) => data.role === "Intern",
            },
            {
                type: "list",
                name: "addAnother",
                message: "Who you like to add another employee?",
                choices: ["Yes", "No"],
            },
        ])
        .then(function (data) {
            if (data.role === "Manager") {
                const manager = new Manager(
                    data.name,
                    data.id,
                    data.email,
                    data.officeNumber
                );

                employee.push(manager);
            }
            if (data.role === "Engineer") {
                const engineer = new Engineer(
                    data.name,
                    data.id,
                    data.email,
                    data.github
                );

                employee.push(engineer);
            }
            if (data.role === "Intern") {
                const intern = new Intern(
                    data.name,
                    data.id,
                    data.email,
                    data.school
                );

                employee.push(intern);
            }
            if (data.addAnother === "Yes") {
                addTeamMember();
              } else {
            // Writes data (users input) to the HTML
            fs.writeFile("./dist/output.html", generateTeam(employee), (err) => {
                if (err) {
                    return console.log(err);
                }
                console.log("Team cards generated successfully")
            });
        }});
}

addTeamMember();