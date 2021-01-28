import React, { Component } from 'react';
// import BeerCard from '../components/BeerCard.js';
import BeerCollection from './BeerCollection.js'


class App extends Component {

    state = {
    beers: []

    }


    componentDidMount(){
        this.getBeers()
    }

    getBeers(){
        fetch('http://localhost:3000/beers')
        .then(response => response.json())
        .then(results => this.setState({ beers: results.beers }))
        .then(this.activateSticky)
    }

    activateSticky(){
        window.onscroll = function() {myFunction()};
        const mainHeader = document.getElementById("mainHeader")
        const sticky = mainHeader.offsetTop;
        function myFunction() {
            if (window.pageYOffset > sticky) {
                mainHeader.classList.add("sticky");
            } else {
                mainHeader.classList.remove("sticky");
            }
    }
    }
        

    render () {
        console.log(this.state.beers)
        return (
        <div className="App">
            <div className='mainHeader' id='mainHeader'> Fucking love IPAs</div>
            <BeerCollection beers={this.state.beers}/>
        </div>
        );
    }
}

export default App;
