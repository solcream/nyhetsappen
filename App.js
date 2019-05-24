import React , {component} from 'react';
import logo from './logo.svg ' ;
import "./App.css ";
import Nyhetslista  from './components/Nyhetslista';

class  App  extends  component {
constructor(props) {
super (props);
    this.state = {
      articles: [
        {
          urlToImage :  " https://source.unsplash.com/random/200×125/?cat ",
    titel : "Testnyhet 1",
   beskrivning : " Beskrivning av testnyheten ",
    },
      {
        urlToImage :  " https://source.unsplash.com/random/200×125/?cat ",
   titel : "Testnyhet 2",
  beskrivning : " Beskrivning av den andra testnyheten ",
  }]}
  }

  componentDidMount () {
    fetch ("https://newsapi.org/v2/top-headlines?country=se&apiKey=ae24bb6763034855bf26908e36dcd782 " )
      .then(function(response) {
      // gör något med det som kom tillbaka
        if(response.status ==! 200) {
          throw Error(`state: ${response.status}`)
        }
        return response.json()
    } ).then(jsondata => {
      // gör något med json-objektet
      this.setState({articles: jsondata.articles})
    } ).catch (error => {
    this.setState ({  
        artiklar: [{
          urlToImage:   "fejk.jpg " ,
          titel:  " Något gick fel " ,
          description:  `Något gick fel, $ {error.message}`,
 }]
      });
    })
  }
  
render() {
  return (
      <Nyhetslista
        minaArtiklar = {this.state.articles} / >
    );
  }
}

export default App;
  