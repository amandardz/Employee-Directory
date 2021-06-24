import React from 'react';
import EmployeeDetails from './EmployeeDetails';

function EmployeeContainer(props) {
  return (
    <table className="table mt-4">
      <thead>
        <th scope='col'>Image</th>
        <th scope='col'>Name <button className='btn btn-outline-dark' onClick={props.handleSort}><i className='fa fa-chevron-circle-down'></i></button></th>
        <th scope='col'>Phone</th>
        <th scope='col'>Email</th>
        <th scope='col'>DOB</th>
      </thead>
        <EmployeeDetails {...props}/>
    </table>
  )
}

export default EmployeeContainer