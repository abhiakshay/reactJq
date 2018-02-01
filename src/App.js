import React, { Component } from 'react';
import Header  from './views/header';
import Container from './views/container'
import $ from 'jquery';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header></Header>
       <Container></Container>
      </div>
    );
  }
}

export default App;
