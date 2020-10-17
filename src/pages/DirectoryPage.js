import React, { Component } from "react";
import API from "../utilities/API";
import Container from "../components/Container";
import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";

class Directory extends Component{
  //inititalize state
  state = {
    employees: [],
    search: "",
    filteredEmployees: [],
    isSorted: false
  }

  //gets data from API when the page loads
  componentDidMount() {
    API.getEmployees()
      .then(res => {
        console.log(res);
        this.setState({ 
          employees: res.data.results, 
          filteredEmployees: res.data.results 
        });
        this.filterEmployees();
      })
      .catch(err => console.log(err));
  }

  // input change in search bar
  handleInput = (event) => {
    this.setState({ search: event.target.value });
    //filters employee array by searched term
    const filtered = this.state.employees.filter((employee) => {
      return (employee.name.first.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
    })
    // Set the state of filterEmployees 
    this.setState({ filteredEmployees: filtered })
  }

  // Declare a function that handle the sort by first name
  handleSortFirst = () => {
    function alphabetical(a, b) {
      const firstA = a.name.first.toLowerCase();
      const firstB = b.name.first.toLowerCase();
      let comparison = 0;
      if (firstA > firstB) {
        comparison = 1;
      } else {
        comparison = -1;
      }
      return comparison;
    }
  
    // Check to see the current state to sort 
    if (this.state.isSorted) {
      this.state.filteredEmployees.sort(alphabetical);
      this.setState({
        isSorted: true
      })
    } else {
      this.setState({
        isSorted: false
      })
    }
    this.setState({ filteredEmployees: this.state.filteredEmployees });
    }
    // Declare a function that handles the sort by last name
    handleSortLast = () => {
      function alphabetical(a, b) {
        const lastA = a.name.last.toLowerCase();
        const lastB = b.name.last.toLowerCase();
        let comparison = 0;
        if (lastA > lastB) {
          comparison = 1;
        } else if (lastA < lastB) {
          comparison = -1;
        }
        return comparison;
      }
      // Check to see the current state to sort 
      if (this.state.isSorted) {
        this.state.filteredEmployees.sort(alphabetical);
        this.setState({
          isSorted: true
        })
      } else {
        this.setState({
          isSorted: false
        })
      }

      this.setState({ filteredEmployees: this.state.filteredEmployees });
    }

  render(){
     // A variable that stores the result from the map method
     const employeeInfo = this.state.filteredEmployees.map((employee, i) => {
      return (
        <Results
          key={i}
          image={employee.picture.thumbnail}
          first={employee.name.first}
          last={employee.name.last}
          email={employee.email}
          phone={employee.phone}
          birthday={employee.dob}
        />
      )
  })
    return (
      <Container>
        <Hero/>
        <SearchForm handleInput={this.handleInput}
        value={this.state.search} />
        <div className={"container-fluid"}>
          <div className={"table-responsive"}></div>
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>First Name<i onClick={this.handleSortFirst} className={"fa fa-fw fa-sort"}></i></th>
                  <th scope="col">Last Name<i onClick={this.handleSortLast} className={"fa fa-fw fa-sort"}></i></th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Birthday</th>
                </tr>
              </thead>
              {employeeInfo}
            </table> 
      </Container>
    );
  }
}

export default Directory;
