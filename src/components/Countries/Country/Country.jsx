
import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountry}) => {
     const{name,flags,population,area}=country;
const [visited,setVisited]=useState(false);
const handleVisited =() => {
    setVisited(!visited);
}
console.log(handleVisitedCountry);

  
    return (
        <div className={`country ${visited? 'visited':'non-visite' }`}>
            <h3 style={{ color: visited ? 'Purple' : 'White' }}>Name:{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population} </p>
            <p>area:{area}</p>
            <button>Mark visited</button>
            <button onClick={handleVisited}> {visited? 'visited':'Going'} </button><br />
            {visited?   'I have visited this country.':'I want to visit'}
        </div>
    );
};

export default Country;