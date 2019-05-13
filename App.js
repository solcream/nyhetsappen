import React, { Component } from 'react'; 8.5K (gzipped: 3.4K)
import logo from './logo.png';
import './App.css';
import Nyhetslista from './components/Nyhetslista';
import data from './fuskdata; '

class App extends Component {
  constructor(props) {
  super(props);
  this.state= {articles: [{},{}]};   
  }
  render() {
    return (
    <Nyhetslista /> 
    );
  }
}

 
 export default App;
  