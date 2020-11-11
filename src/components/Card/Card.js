import React from 'react';
import './Card.css';
import numeral from 'numeral';

const Card = ({clicked,countryData,cardType}) => {

    let today,total;

    if(cardType === 'Cases')
    {
        today = 'todayCases'; total = 'cases';
    }
    else if(cardType === 'Recovered')
    {
        today = 'todayRecovered'; total = 'recovered'; 
    }
    else{
        today = 'todayDeaths'; total = 'deaths'; 
    }


    return (
        <div onClick={clicked} className={`card ${cardType}`}>
            <h2 className={cardType}>{cardType}</h2>
            <h1 className={cardType}>+{numeral(countryData[today]).format()}</h1>
            <h3 className={cardType}>{numeral(countryData[total]).format('0.00a')}</h3>
        </div>
    )
}

export default Card
