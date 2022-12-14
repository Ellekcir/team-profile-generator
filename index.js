// consider adding validation to ensure that user input provided is in the proper expected format.

// Node Modules
const inquirer = require("inquirer");
const fs = require("fs");

// ./lib Modules 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateTeam = require("./src/templatehtml")

// An array for each employee card to be added to
const employees = [];

// Prompted questions for the user in CL
function addTeamManager(data) {
    inquirer
        .prompt([

            //   console.log("Let's get started")

            {
                type: "input",
                name: "name",
                message: "Team Manager's name:",
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
            }])
        .then(function (data) {

            const manager = new Manager(
                data.name,
                data.id,
                data.email,
                data.officeNumber
            );
            //console.log("test1" + manager);
            //console.log("Manager" + manager);
            employees.push(manager);
        addTeamMember()},
        
       
)}; 


function addTeamMember(data) {
    inquirer
        .prompt([
            {
                type: "list",
                name: "addEmployee",
                message: "Would you like to add an Engineer or Intern?",
                choices: ["Intern", "Engineer"],
            },
            {
                type: "input",
                name: "name",
                message: "What is the team member's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the team member's employee I.D?",
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
                message: "What is the team member's email address?",
            },
            // Engineer Selection
            {
                type: "input",
                name: "github",
                message: "What is the team member's GitHub username?",
                when: (data) => data.addEmployee === "Engineer",
            },
            // Intern Selection
            {
                type: "input",
                name: "school",
                message: "What school does the team member attend?",
                when: (data) => data.addEmployee === "Intern",
            },
            {
                type: "list",
                name: "finish",
                message: "Would you like to add another employee?",
                choices: ["Add another Employee", "Finish"],
            },

        ]).then(function (data) {
            //console.log("calling data" + JSON.stringify(data));
            //data = JSON.stringify(data);
            if (data.addEmployee === "Engineer") {
                const engineer = new Engineer(
                    data.name,
                    data.id,
                    data.email,
                    data.github
                ); //console.log("engineer" + engineer);
                employees.push(engineer);

            }
            if (data.addEmployee === "Intern") {
                const intern = new Intern(
                    data.name,
                    data.id,
                    data.email,
                    data.school
                ); //console.log("test1" + intern);
                employees.push(intern);

            }

            //console.log("test 3 " + data.finish);
            if (data.finish !== "Finish") {
                addTeamMember();
                // Writes data (users input) to the HTML
            } else {
                // console.log("HEALLLO" + employees);
                fs.writeFile("./dist/output.html", generateTeam(employees), (err) => {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("Team cards generated successfully");
                });
            }
        });

}


addTeamManager();
