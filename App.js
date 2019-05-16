import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Nyhetslista from './components/Nyhetslista';
import data from './fuskdata; '
 
class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    articles: [
{
     urlTomage: "https://source.unsplash.com/random/200*125/?cat",
     title:"Testnyhet 1",
     description:"Beskrivning av testnyheten",
  },
  {
  urlTomage: "https://source.unsplash.com/random/200*125/?cat",
  title: "Testnyhet 2",
    description:"Beskrivning av den andra testnyheten",
    }]};
  }
 
  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=se&apiKey=f7d96f9fff3445bf9d132c9b4dba09aa")
    .then( function (response) {
      // Gör något med det som kom tillbaka
      if (response.status !== 200) {
        throw Error(`status: ${response}`)
      }  
        this.setState({
          articles: [
            {title}
          {
            title: "Något gick fel",
            description: `Vi fick  status ${responde.status}`
          }
      }
      // gör något med det som kom
    return response.json()
} ).then( jsondata => {
  // gör något med json-objektet
  this.setState({ articles:jsondata.articles  })
}).catch(error =>{
  this.setState({
    articles: [{
      urlTomage: "fejk.jpg",
      title: "Något gick fel",
      description: "Du verkar inte vara ansluten till internet..."
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
  