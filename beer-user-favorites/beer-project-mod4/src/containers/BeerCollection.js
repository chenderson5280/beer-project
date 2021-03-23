import React, { Component } from "react";
import BeerCard from '../components/BeerCard.js';

class BeerCollection extends Component {

    showBeers = () => this.props.beers.map( eachBeer => <BeerCard key={eachBeer.id} eachBeer={eachBeer} collectedBeer={this.props.collectedBeer} />)

    render(){
        return(
            <div className='BeerCollection'>

                {this.showBeers()}
            </div>
        );
    }
}

export default BeerCollection;