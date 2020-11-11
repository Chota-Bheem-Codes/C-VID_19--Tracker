import React,{useEffect,useState} from 'react';
import Table from '../Table/Table';
import './CountryList.css'

const sortData = (data) =>{
    const sortedData = [...data]; 

    sortedData.sort((a,b) => b.cases-a.cases);

    return sortedData;
};

const CountryList = () => {

    let [countryList,setCountryList] = useState([]);

    const fetchCountryList = () => {

        fetch('https://disease.sh/v3/covid-19/countries')
        .then(res => res.json())
        .then(data =>{
          const sortedData = sortData(data);
          setCountryList(sortedData);
        })
    }

    useEffect(() => {
        fetchCountryList();
        console.log('CountryList useEffect');
      },[]);

    const [search,setSearch] = useState('');
    
    const handleSearch = (e) => {
        setSearch(e.target.value);
    } 

    
    if (countryList.length > 0) {
        let str = search.trim().toLowerCase();
        countryList = countryList.filter(item => item.country.toLowerCase().match(str));
      }


    return (
        <div className="countryList">
            
            <input 
                type="text"
                placeholder="Search Country..."
                onChange={handleSearch}
                value={search}
            />
            <Table countryList={countryList}/>
        </div>
    )
}

export default CountryList
