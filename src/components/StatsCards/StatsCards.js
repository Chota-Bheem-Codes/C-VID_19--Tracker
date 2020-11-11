import React,{useEffect,useState} from 'react';
import Graph from '../Graph/Graph';
import Card from '../Card/Card';
import './StatsCards.css';

const StatsCards = ({country,countryData}) => {

    const [worldwide,setWorldwide] = useState({});
    const [selectedCard,setSelectedCard] = useState();
    const [isCardClicked,setIsCardClicked] = useState(false);

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all")
          .then((response) => response.json())
          .then((data) => {
            setWorldwide(data);
          });
          
          console.log('StatsCards 1st useEffect triggered',worldwide);
      }, []);

    useEffect(() => {
        console.log('StatCard 2nd useEffect Country Changed');
        setSelectedCard();
        setIsCardClicked(false);
    },[country]);

      if(country==='Worldwide') {countryData = worldwide;}

      const clickHandler = (type) => {
        console.log('Card Click',type);
        setIsCardClicked(true);
        setSelectedCard(type);

    }


    return (
        <div className="statsCard">
            <div className="cards">
                <Card clicked={()=>clickHandler('cases')} cardType='Cases' countryData={countryData}/>
                <Card clicked={()=>clickHandler('recovered')} cardType='Recovered' countryData={countryData}/>
                <Card clicked={()=>clickHandler('deaths')} cardType='Deaths' countryData={countryData}/>
            </div>
            <Graph plotShow={isCardClicked} card={selectedCard} country={country} countryData={countryData} />
        </div>
    )
}

export default StatsCards;
