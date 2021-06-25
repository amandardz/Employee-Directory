import React from 'react';
import EmployeeDetails from './EmployeeDetails';

function EmployeeContainer(props) {
  return (
    <div className='table-responsive d-sm-flex justify-content-sm-center px-4' style={{overflow: 'auto'}}>
      <table className="table table-striped table-hover mt-2">
        <thead>
          <tr>
            <th scope='col'>Image</th>
            <th scope='col'>Name <button className='btn btn-sm px-1' onClick={props.handleSort}><i className="bi bi-arrow-down-up"></i></button></th>
            <th scope='col'>Phone</th>
            <th scope='col'>Email</th>
            <th scope='col'>DOB</th>
          </tr>
        </thead>
          <EmployeeDetails {...props}/>
      </table>
    </div>
  )
}

export default EmployeeContainer