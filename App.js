import React, { Component } from 'react';
import './App.css';
import Nyhetslista from '../src/components/Nyhetslista';
 
class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    articles: [
  {
  urlTolmage: "https://source.unsplash.com/random/200*125/?furniture",
  title:  "Testnyhet 1",
  description: "Beskrivning av testnyheten",
  },
  {
  urlTolmage: "https://source.unsplash.com/random/200*125/?furniture",
title: "Testnyhet 2",
 description: "Beskrivning av den andra testnyheten",
  }]};
}

componentDidMount() {
    fetch ( " https://newsapi.org/v2/top-headlines?country=se&apiKey=f7d96f9fff3445bf9d132c9b4dba09aa " )
    .then( function (response) {
        // gör något med det som kom tillbaka 
    if ( response.status ==! 200) {
        throw Error( `status: ${response.status}`);
      }
     return response.json()
} ).then( jsondata => {
  // gör något med json-objektet
  this.setState({ articles: jsondata.articles  })
}).catch(error => {
  this.setState({
    articles: [{
      urlTomage: "fejk.jpg",
      titel: "Något gick fel",
      description: "Något gick fel. $(error.message)",
    }]
  });
})
}

render() {
  return (
  <Nyhetslista
  minArtiklar ={this.state.articles}/>
  );
}
}

export default App;