import React from 'react';

function Header(){
  return (
    <div className="jumbotron jumbotron-fluid" style={{background: '#151d43', color:'white', borderBottom: '5px solid #c52d3c'}}>
      <div className="container">
        <h1 className="text-center">Employee Directory</h1>
      </div>
      <div className="mt-3">
        <h5 className="text-center">Manage your list of employees.</h5>
        <p className="text-center">Search by employee's name or sort alphabetically by employee names.</p>
      </div>
    </div>
  )
}

export default Header;