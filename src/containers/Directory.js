import React, { Component } from 'react';
import axios from 'axios';

import Employee from '../component/Employee/Employee';
import classes from './Directory.css';

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
          profile_image={employee.profile_image} // The api does not actually provide images.  Keeping this here to show that I know how to get them but I am using an icon in place of the image.
        />
      );
    });

    return (
      <div>
        <nav className={classes.Nav}>
          <span className={classes.Logo}>
            <i className='fas fa-map-marker-alt'></i>dynamo
          </span>
          metrics Code Challenge
        </nav>
        <h1 className={classes.Header}>Employee Directory</h1>
        <section className={classes.Employees}>{employees}</section>
      </div>
    );
  }
}

export default Directory;
