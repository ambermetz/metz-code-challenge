import React from 'react';

import classes from './Employee.css';

const employee = props => (
  <article className={classes.Employee}>
    <section className={classes.EmployeeSection}>
      <div className={classes.Image}>
        <i className='far fa-user fa-4x'></i>
      </div>
      <div className={classes.EmployeeInfo}>
        <p>Employee ID: {props.id}</p>
        <p>Name: {props.name}</p>
        <p>
          Salary:{' '}
          {Intl.NumberFormat('en', {
            style: 'currency',
            currency: 'USD'
          }).format(props.salary)}
        </p>
        <p>Age: {props.age}</p>
      </div>
    </section>
  </article>
);

export default employee;
