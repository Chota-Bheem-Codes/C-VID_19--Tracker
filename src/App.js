import React from 'react';
import './App.css';
import CountryList from './components/CountryList/CountryList';

function App() {
  const imageUrl='https://image.freepik.com/free-vector/coronavirus-cells-banner_1035-18753.jpg';
  return (
    <div className="app">
      <img src={imageUrl}/>
      <CountryList/>
    </div>
  );
}

export default App;
