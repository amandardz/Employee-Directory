import React from 'react';

function Search(props) {
  return (
    <form className="form-inline d-flex justify-content-center">
      <input onChange={e => props.handleFormSubmit(e)} value={props.search}  name="search" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
  )
};

export default Search;