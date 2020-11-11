import React,{useEffect,useState} from 'react';
import VisualData from '../VisualData/VisualData';
import numeral from 'numeral';
import Plot from '../Plot/Plot';
import './Graph.css'

const Graph = ({plotShow,card,country,countryData}) => {



    const url = (country==='Worldwide')?
                'https://disease.sh/v3/covid-19/historical/all?lastdays=120':
                `https://disease.sh/v3/covid-19/historical/${country}`;

    const [historicalData,sethistoricalData] = useState();

    useEffect(() => {
        fetch(url).then(res => res.json())
                  .then(data => {
                      console.log('Graph useEffect triggered');
                      (country==='Worldwide')?sethistoricalData(data):sethistoricalData(data.timeline);
                    });
                  
    },[country]);

    const heading = (country==='Worldwide')?(<h1>Worldwide <span>{numeral(countryData.active).format('00.00a')} </span> active cases</h1>):
    (<h1>{country} has currently <span>{numeral(countryData.active).format('0.00a')}</span> active cases </h1>);
    return (
        <div className="graph">
                {heading}    
                {plotShow ?
                <Plot card={card} data={historicalData[card]}/>:
                <VisualData country={country} countryData={countryData}/>
            }
        </div>
    )
}

export default Graph
