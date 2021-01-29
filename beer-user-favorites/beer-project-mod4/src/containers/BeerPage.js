import React, { Component } from "react";
import BeerCollection from "./BeerCollection.js";

import Filter from "../components/Filter.js";

import Popup from '../components/Popup.js'

class App extends Component {
    state = {
    beers: [],
    name: "",
    };

    componentDidMount() {
    this.getBeers();
    }

    getBeers() {
    fetch("http://localhost:3000/beers")
        .then((response) => response.json())
        .then((results) => this.setState({ beers: results.beers }))
        .then(this.activateSticky);
    }

    activateSticky() {
    window.onscroll = function () {
        myFunction();
    };
    const mainHeader = document.getElementById("mainHeader");
    const sticky = mainHeader.offsetTop;
    function myFunction() {
        if (window.pageYOffset > sticky) {
        mainHeader.classList.add("sticky");
        } else {
        mainHeader.classList.remove("sticky");
        }
    }
    }

    handleClick = (eachBeer) => {
        console.log(eachBeer)
        // const popUpBeer = event
    }

    handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    };

    filteredBeers = () => {
    const { beers, name } = this.state;

    return beers.filter((beer) => {
        return beer.name.toLowerCase().includes(name.toLowerCase());
    });
    };

    render() {
        const { name } = this.state;
        return (
        <div className="App">
            <div className="mainHeader" id="mainHeader">
            Fucking love IPAs
        </div>
        <Filter name={name} handleChange={this.handleChange} />
        <Popup />
        <BeerCollection beers={this.filteredBeers()} handleClick={this.handleClick} />
        </div>
        );
    }
}

export default App;
