// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'

// TO TEST //
//--------//
// npm run test Manager.test //
//--------//

it('should test the Manager office number and role', () => {

    const Manager = require('../lib/Manager');
    const employee = new Manager("Tom", 123, "test@gmail.com", 1234);
    
    const employeeOfficeNumber = 1234;
    const employeeRole = "Manager";

    expect(employee.getOfficeNumber()).toEqual(employeeOfficeNumber);
    expect(employee.getRole()).toEqual(employeeRole);
    
});