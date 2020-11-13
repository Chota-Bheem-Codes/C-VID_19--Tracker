import React,{useState} from 'react';
import numeral from 'numeral';
import StatsCards from '../StatsCards/StatsCards'
import './Table.css'
  
const findCountryData = (list,data) =>{

    return list.find(item => item.country===data)
}

const Table = ({countryList}) => {

    const [country,setCountry] = useState('Worldwide');
    const [countryData,setCountryData] = useState({});

    //On Country Click
    const displayDetails = (e) => {
        console.log('Event target',e.target.getAttribute('class'));
        if(e.target.getAttribute('class')!=='countryName') return; //event delegation

        const currentCountry = e.target.getAttribute('value');
        const data = findCountryData(countryList,currentCountry);
        
        setCountry(currentCountry);
        setCountryData(data);
    }

    return (
        <div className="mainBody">

            <div className="table">
                <table>
                <thead>
                    <tr>
                        <th>Country</th><th>Today</th><th>Total</th>
                    </tr>
                </thead>
                <tbody className="content">
                    {countryList.map(({country,todayCases,cases,countryInfo}) =>(
                        <tr onClick={displayDetails} key={country}>
                            <td className="countryName" value={country}>
                                {country} 
                                <img className="countryName" value={country} src={countryInfo.flag}/> 
                            </td>
                            <td><span>+{numeral(todayCases).format()}</span></td>
                            <td><strong>{numeral(cases).format()}</strong></td>
                        </tr>
                        
                    ))}
                </tbody>
                </table>
            </div>

             <StatsCards country={country} countryData={countryData} />

        </div>
    )
}

export default Table
