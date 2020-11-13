import React from 'react';
import {XYPlot,YAxis,LineMarkSeries, XAxis, HorizontalGridLines, VerticalGridLines} from 'react-vis';
import './Plot.css';
import 'react-vis/dist/style.css';

const plotTheData = (data) => {
const ans=[];
for(let date in data)
{
    let newData = {
        x: new Date(date),
        y: data[date]/1000000,
    };
    ans.push(newData);
}
return ans;
}

const Plot = ({card,data}) => {

    const plotedData = plotTheData(data);

    let type,dotColor,stroke;
    if(card==='cases'){
        type='Total Cases';
        dotColor = 'red';
        stroke = 'lightred';
    }
    else if(card==='deaths'){
        type='Total Deaths';
        dotColor = 'grey';
        stroke = 'lightgrey';
    }
    else{
        type='Total Recovered';
        dotColor = 'green';
        stroke = 'lightgreen'
    }
    
    return (
        <div className='plot'>
            <XYPlot
            animation= {true}
            width={400}
            height={400}>
                        <LineMarkSeries
                            margin= {{left: 0, right: 0, top: 0, bottom: 0}}
                            padding= {{left: 0, right: 0, top: 0, bottom: 0}}
                            stackBy="x"
                            curve={'curveMonotoneY'}    
                            color={dotColor}
                            lineStyle={{stroke:"#87556f"}}
                            markStyle={{stroke:{stroke}}}
                            data={plotedData}/>

                        <YAxis title="Numbers(Millions)" />
                        
                        <HorizontalGridLines />
                        
            </XYPlot>


            <h2>{type} Stats Day By Day</h2>
            
        </div>
    )
}

export default Plot
