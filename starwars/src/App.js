import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
         <a href="https://fontmeme.com/star-wars-font/"><img src="https://fontmeme.com/permalink/190111/f4a4a9fcd5ec89534738f5748ddde01c.png" alt="star-wars-font" border="0"/></a>

        <CharacterList 
        starwarsChars={this.state.starwarsChars}
        />
      </div>
    );
  }
}

export default App;
