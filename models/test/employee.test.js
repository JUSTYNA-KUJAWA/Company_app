const Employee = require('../employee.model.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Employee', () => {

 after(() => {
     mongoose.models = {};
 });

  it('should throw an error if no "firstNname", "lastName", "department" arg', () => {

    const cases = [
      {
        firstName: 'Jane',
      },
      {
        lastName: 'Doe',
      },
      {
        Department: 'IT',
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
      },
      {
        firstName: 'Jane',
        Department: 'IT',
      },
      {
        lastName: 'Doe',
        Department: 'IT',
      },
    ];

    for (let employees of cases) {
      const emp = new Employee(employees);
      emp.validate(err => {
      expect(err.errors).to.exist;
      });
    }
  });

  it('should throw an error if "firstName" is not a string', () => {

    const cases = [{}, []];
    for(let firstName of cases) {
      const emp = new Employee(firstName);
      emp.validate(err => {
      expect(err.errors).to.exist;
      });
    }
  });

  it('should throw an error if "lastName" is not a string', () => {

    const cases = [{}, []];
    for(let lastName of cases) {
      const emp = new Employee(lastName);
      emp.validate(err => {
      expect(err.errors).to.exist;
      });
    }
  });

  it('should throw an error if "department" is not a string', () => {

    const cases = [{}, []];
    for(let department of cases) {
      const emp = new Employee(department);
      emp.validate(err => {
      expect(err.errors).to.exist;
      });
    }
  });

  it('should not throw an error if data is okay', () => {

    const emp = new Employee({firstName: 'Jane', lastName: 'Doe', department: 'Human Resources'});
      emp.validate(err => {
      expect(err).to.not.exist;
      });
    });
  });