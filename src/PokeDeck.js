import React, {Component} from "react";
import PokeCard from "./pokecard";
import "./PokeDeck.css";


class PokeDeck extends Component{
    render(){
       let title;
       if(this.props.isWinner){
           title = <h1 className="PokeDeck-winner">You Won!</h1>
       } else{
        title = <h1 className="PokeDeck-looser">You Lost !</h1>
       }
        return (
            <div className="PokeDeck">
                <h1>Here is your Hand of Pokemon Cards</h1>
                <h2>Total Experience points: {this.props.exp}</h2>
                {title}
                <div className="PokeDeck-cards">
                {this.props.pokemon.map((card)=>
                    <PokeCard id={card.id} name={card.name} type={card.type} exp={card.base_experience} /> 
                )}
                </div>
                
            </div>
        );
    }
}

export default PokeDeck;