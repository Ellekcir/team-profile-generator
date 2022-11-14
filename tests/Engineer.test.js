// In addition to Employee's properties and methods, Engineer will also have:

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'


// TO TEST //
//--------//
// npm run test Engineer.test //
//--------//

// const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');


it('should test the engineer Github and role', () => {
        const employeeGithub = "github.example";
        const employeeRole = "Engineer";

        const employee = new Engineer("Tom", 123, "test@gmail.com", "github.example");

        expect(employee.getGithub()).toBe(employeeGithub);
        expect(employee.getRole()).toEqual(employeeRole);
    });