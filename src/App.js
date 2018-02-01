import React, { Component } from 'react';
import Header  from './views/header';
import Container from './views/container'
import Footer  from './views/footer';
import $ from 'jquery';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header></Header>
       <Container></Container>
       <Footer></Footer>
      </div>
    );
  }
}

export default App;
