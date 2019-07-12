import React, {Component} from "react";
import PokeDeck from "./PokeDeck";  
import PokeGame from "./PokeGame";
import './App.css';

class App extends Component {
  render (){
    return(
      <div className="App">
       <PokeGame/>
    </div>
      
    )
  }
}

export default App;
