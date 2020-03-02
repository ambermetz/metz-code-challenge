import React, { Component } from 'react';
import axios from 'axios';

import Employee from '../component/Employee/Employee';
import './Directory.css';

class Directory extends Component {
  state = {
    employees: []
  };
  componentDidMount() {
    axios
      .get('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => {
        this.setState({ employees: response.data.data });
        console.log(response);
      });
  }

  render() {
    const employees = this.state.employees.map(employee => {
      return (
        <Employee
          key={employee.id}
          name={employee.employee_name}
          id={employee.id}
          salary={employee.employee_salary}
          age={employee.employee_age}
          profile_image={employee.profile_image}
        />
      );
    });

    return (
      <div>
        <section className='Employees'>{employees}</section>
      </div>
    );
  }
}

export default Directory;
