import React, { Component } from "react";
import Header from './Header';
import Search from './Search';
import EmployeeContainer from './EmployeeContainer';
import EmployeeDetails from './EmployeeDetails'
import API from '../utils/API'

class Directory extends Component {
  state= {
    search: '',
    results: [],
    filterResults: []
  };

  componentDidMount() {
      API.search()
        .then(res => this.setState({results: res.data.results, filterResults: res.data.results}))
        .catch(err => console.log(err));


  }

  handleInputChange = event =>  {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const filterResults = this.state.results.filter(result => result.name.last.toLowerCase() === this.state.search.toLowerCase())
    
    this.setState({filterResults: filterResults})
  };

  handleSort = () => {
    console.log('is this working')
    // console.log(this.state.results)
    const sortResults = this.state.results.sort((a, b) => { 
      console.log(a.name.first) 
      return a.name.first - b.name.first})
    console.log(sortResults)
    this.setState({results: sortResults})
  }

  render () {
    return <>
      <Header />
      <Search handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/>
      <EmployeeContainer  filterResults={this.state.filterResults} handleSort={this.handleSort}/>
    </>
  }
}

export default Directory;