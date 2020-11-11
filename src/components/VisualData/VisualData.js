import React from 'react';
import {RadialChart} from 'react-vis';
import './VisualData.css'

const VisualData = ({card,country,countryData}) => {


    //const myData = [ {angle: 1, radius: 10}, {angle: 2, label: 'Super Custom label', subLabel: 'With annotation', radius: 20}, {angle: 5, radius: 5, label: 'Alt Label'}, {angle: 3, radius: 14}, {angle: 5, radius: 12, subLabel: 'Sub Label only', className: 'custom-class'} ];               
    const pieStyle = {
        'color':'grey',
    };
    
    const labelStyle = {
        'color': 'grey',
        
    }

    const popData = [{label:'Affected',angle: countryData.cases,radius:1.5,color: 'orange',style:{pieStyle}}, 
                     {label:'Total Population',angle: countryData.population,radius:1,color:'teal'}];
    const casesData = [{label:'Cases',angle: countryData.cases,radius:1,color:'red'},
                      {label:'Deaths',angle: countryData.deaths,radius:2,color:'grey'},
                      {label:'Recovered',angle: countryData.recovered,radius:1.5,color:'green'}];
    
    return (
        <div className='pies'>   
            <RadialChart
            labelsStyle={labelStyle}
            showLabels={true}
            colorType="literal"
            labelsAboveChildren={true}
            animation= {true}
            data={popData}
            width={300}
            height={300} />
        
            <RadialChart 
            showLabels={true}
            colorType="literal"
            labelsAboveChildren={true}
            animation= {true}
            className='Donut'
            data={casesData}
            width={300}
            height={300}/>
    
        </div>
    )
}

export default VisualData
