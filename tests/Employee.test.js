// The first class is an Employee parent class with the following properties and methods:

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'


// TO TEST //
//--------//
// npm run test Employee.test //
//--------//






describe('Unit test for Employee', () => {
// You use describe as like a gouping container for your tests, see below the following const values can now be used in all the following tests   
    const Employee = require('../lib/Employee');
    // This imports the informations from the file Employee.js
    const employee = new Employee("Tom", 123, "test@gmail.com");
    // This is a new variable to grab the value of the constructor Employee and add new properties to a 'new Employee'

    test('Should set constructor properties', () => {
    // the use of test or it as seen below do the same thing 

    //below are the value we want the test to equal too, these are the values the tester will add in
        const name = "Tom";
        const id = 123;
        const email = "test@gmail.com";

        // the employee.name is a new Employee with the values as stated above .toEqual what the tester is comparing with 
        // expect(employee.name).toEqual(employee.getName()); would be another way as to below
        // test will fail if written using the Constructer(Capital letter) eg: expect(employee.name).toEqual(Employee.getName());
        expect(employee.name).toEqual(name);
        expect(employee.id).toEqual(id);
        expect(employee.email).toEqual(email);

    })
    it('Should return the Employee name', () => {
        const employeeName = "Tom";

        expect(employee.getName()).toEqual(employeeName)

    })
    it('Should return the Employee ID', () => {
        const employeeId = 123;

        expect(employee.getId()).toEqual(employeeId);

    })
    it('Should return the Employee email', () => {
        const employeeEmail = "test@gmail.com"

        expect(employee.getEmail()).toEqual(employeeEmail);
    })
    it('Should return the Employee role', () => {
        const employeeRole = "Employee";

        expect(employee.getRole()).toEqual(employeeRole)
        // same as below 
        // expect(employee.title).toEqual(employeeRole)
    })
    // FAIL TESTER
    it('Should return the Employee email', () => {
        const employeeEmail = "tom@gmail.com";

        expect(employee.getEmail()).toEqual(employeeEmail);
    })
});
