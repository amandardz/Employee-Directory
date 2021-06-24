import React from 'react';

function Search(props) {
  return (
    <form className="form-inline d-flex justify-content-center">
      <input onChange={props.handleInputChange} value={props.search}  name="search" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button onClick={props.handleFormSubmit} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  )
};

export default Search;