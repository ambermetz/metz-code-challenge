import React, { Component } from 'react';
import axios from 'axios';

import Employee from '../component/Employee/Employee';
import './Directory.css';

class Directory extends Component {
  componentDidMount() {
    axios
      .get('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => {
        console.log(response);
      });
  }

  render() {
    return (
      <div>
        <section className='Employees'>
          <Employee />
          <Employee />
          <Employee />
        </section>
      </div>
    );
  }
}

export default Directory;
