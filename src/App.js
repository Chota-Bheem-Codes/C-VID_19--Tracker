import React from 'react';
import './App.css';
import CountryList from './components/CountryList/CountryList';
import WorldwideGraph from './components/WorldwideGraph/WorldwideGraph';

function App() {
  const imageUrl='https://image.freepik.com/free-vector/covid-19-coronavirus-outbreak-design-with-virus-cell-microscopic-view-blue-background-illustration-template-dangerous-sars-epidemic-theme-promotional-banner-flyer_1314-2644.jpg';
  return (
    <div className="app">
      <img src={imageUrl}/>
      <CountryList/>
      <WorldwideGraph/>
    </div>
  );
}

export default App;
