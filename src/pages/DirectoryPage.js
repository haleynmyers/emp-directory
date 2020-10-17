import React, { Component } from "react";
import API from "../utilities/API";
import Container from "../components/Container/index";
import Hero from "../components/Hero/index";
import Row from "../components/Row/index";
import SearchForm from "../components/SearchForm/index";
import Table from "../components/Table/index";

class Directory extends Component{

  return (
    <Container>
      <Hero/>
      <SearchForm handleInput={this.handleInput}
      value={this.state.search} />
      <Table>

      </Table>  
    </Container>
  );
}

export default Directory;
