import React, { Component } from "react";
import Header from './Header';
import Search from './Search';
import EmployeeContainer from './EmployeeContainer';
import API from '../utils/API'

class Directory extends Component {
  state= {
    search: '',
    results: [],
    filterResults: [],
    order: 'ascend'
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
    const search = event.target.value
    const filterResults = this.state.results.filter(result => {
      let data = Object.values(result).join('').toLowerCase();
      return data.indexOf(search.toLowerCase()) !== -1;
    })    
    this.setState({filterResults: filterResults})
  };

  handleSort = () => {
    if (this.state.order === 'ascend') {
      this.setState({order: 'descend'})
    } else {
      this.setState({order: 'ascend'})
    }

    if (this.state.order === 'ascend') {
      const sortResults = this.state.results.sort((a,b) => {
        return (a.name.first < b.name.first) ? -1 : 1
      })
      this.setState({results: sortResults})
    } else {
      const sortResults = this.state.results.sort((a,b) => {
        return (b.name.first < a.name.first) ? -1 : 1
      })
      this.setState({results: sortResults})
    }
  }

  render () {
    return <>
      <Header />
      <Search handleFormSubmit={this.handleFormSubmit}/>
      <EmployeeContainer  filterResults={this.state.filterResults} handleSort={this.handleSort}/>
    </>
  }
}

export default Directory;