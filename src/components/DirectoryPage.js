import React, { Component } from "react";
import API from "../utilities/API";
import Container from "./Container";
import Hero from "./Hero";
import SearchForm from "./SearchForm";
import Results from "./Results";

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
    event.preventDefault();
    const value = event.target.value.toLowerCase();
    this.setState({ 
      search: event.target.value,
      //filters employee array by searched term
      filtered: this.state.employees.filter(emp => {
        const name = emp.first.toLowerCase().trim() + emp.last.toLowerCase().trim();
        return (name.includes(value));
      })
     });
  }

  // Declare a function that handle the sort by first name
  handleSortFirst = () => {
    //sort A-Z
    function compareAZ(a, b) {
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
    //sortZ-A
    function compareZA(a, b) {
      const firstA = a.name.first.toLowerCase();
      const firstB = b.name.first.toLowerCase();
      let comparison = 0;
      if (firstB > firstA) {
          comparison = 1;
      } else {
          comparison = -1;
      }
      return comparison;
  }
  // Check to see the current state to sort 
  if (this.state.isSorted) {
      this.state.filteredEmployees.sort(compareZA);
      this.setState({
          isSorted: false
      })
  } else {
      this.state.filteredEmployees.sort(compareAZ);
      this.setState({
          isSorted: true
      })
  }
    this.setState({ filteredEmployees: this.state.filteredEmployees });
  }

  // Declare a function that handles the sort by last name
  handleSortLast = () => {
    //Sort A-Z
    function compareAZ(a, b) {
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
    //Sort Z-A
    function compareZA(a, b) {
      const lastA = a.name.last.toLowerCase();
      const lastB = b.name.last.toLowerCase();
      let comparison = 0;
      if (lastB > lastA) {
        comparison = 1;
      } else {
        comparison = -1;
      }
      return comparison;
    }
    // Check to see the current state to sort 
    if (this.state.isSorted) {
      this.state.filteredEmployees.sort(compareZA);
      this.setState({
        isSorted: false
      })
    } else {
      this.state.filteredEmployees.sort(compareAZ);
      this.setState({
        isSorted: true
      })
    }

    this.setState({ filteredEmployees: this.state.filteredEmployees });
  }

  handleSortLocation = () => {
    //function A-Z
    function compareAZ(a, b) {
      const locA = a.location.state.toLowerCase();
      const locB = b.location.state.toLowerCase();
      let comparison = 0;
      if (locA > locB) {
        comparison = 1;
      } else if (locA < locB) {
        comparison = -1;
      }
      return comparison;
    }
    //function Z-A
    function compareZA(a, b) {
      const locA = a.location.state.toLowerCase();
      const locB = b.location.state.toLowerCase();
      let comparison = 0;
      if (locA > locB) {
        comparison = 1;
      } else if (locA < locB) {
        comparison = -1;
      }
      return comparison;
    }
    // Check to see the current state to sort 
    if (this.state.isSorted) {
      this.state.filteredEmployees.sort(compareZA);
      this.setState({
        isSorted: false
      })
    } else {
      this.state.filteredEmployees.sort(compareAZ);
      this.setState({
        isSorted: true
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
          location={employee.location.state}
        />
      )
  })

    return (
      <Container>
        <Hero/>
        <SearchForm handleInput={this.handleInput}
        value={this.state.search} />
        <div className={"container-fluid"}>
          <div className={"table-responsive"}>
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>First Name<i onClick={this.handleSortFirst} className={"fa fa-fw fa-sort"}></i></th>
                  <th scope="col">Last Name<i onClick={this.handleSortLast} className={"fa fa-fw fa-sort"}></i></th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Location<i onClick={this.handleSortLocation} className={"fa fa-fw fa-sort"}></i></th>
                </tr>
              </thead>
              {employeeInfo}
            </table>
          </div>
        </div>
      </Container>   
    )
  };
};

export default Directory;