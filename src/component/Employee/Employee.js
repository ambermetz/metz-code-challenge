import React from 'react';

import './Employee.css';

const employee = props => (
  <article className='Employee'>
    <h1>Employee: {props.name}</h1>
    <p>Employee ID: {props.id}</p>
    <p>Salary: {props.salary}</p>
    <p>Age: {props.age}</p>
    <p>Image? {props.profile_image}</p>
  </article>
);

export default employee;
