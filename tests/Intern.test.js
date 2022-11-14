// In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'

// TO TEST //
//--------//
// npm run test Intern.test //
//--------//


it('should test the Intern school and role', () => {

    const Intern = require('../lib/Intern');
    const employee = new Intern("Tom", 123, "test@gmail.com", "school.example");
    
    const employeeSchool = "school.example";
    const employeeRole = "Intern";

    expect(employee.getSchool()).toEqual(employeeSchool);
    expect(employee.getRole()).toEqual(employeeRole);

});