import React, { Component } from 'react'

class Popup extends Component {

    render(){
        return(
            <div className='wholePopUp'>
                <p className='popUpDescription'> {this.props.collectedBeer.description}</p>
                <div className='popUpFood'>
                    <html> {this.props.collectedBeer.food_pairing}</html>
                </div>
            </div>
        )
    }
}

export default Popup