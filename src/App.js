import React, {useState} from 'react';
import SearchForm from './Components/search-form';
import FlightList from './Components/Flight-List';

const App = ()=>{
  const [flights, setFlights]= useState([]);
  
  const handleSearch=(data)=>{
    console.log(data);
      setFlights(data);
    
    //console.log(data)
    // return set flight
   
    

  };

 return (
  <div>
    <h3>Search flight</h3>
    <SearchForm onSearch={handleSearch}/>
    {/* if flight length is less than 0, display the flight list */}
    {flights.length> 0 &&<FlightList flights={flights}/>}
  </div>
 )
}


export default App;
