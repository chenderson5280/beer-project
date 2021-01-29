import React from 'react';

const BeerCard = (props) => {
    return (
        <div className='wholeCard' key={props.eachBeer.id} onClick={() => props.handleClick(props.eachBeer)}>
            <div className='heading'>
                <div className='beerName'>
                    {props.eachBeer.name}
                </div>
                <div className='firstBrewDate'>
                    <div>First Brew Date:</div>
                    {props.eachBeer.first_brewed}
                </div>
            </div>

            <img  className='beerImage' src={props.eachBeer.image} alt={props.eachBeer.name}></img>
            
            <div className='beerTagLine'>
                {props.eachBeer.tagline}
            </div>
        </div>
    )
}

export default BeerCard;