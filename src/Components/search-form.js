import React,{useState} from "react";
import '../styles/Airline_Booking_System_styles.css';
import { SearchFlights } from "../services/booking-api";
//import { bookFlight } from "../services/booking-api";

const SearchForm=({onSearch})=>{
const [queryDeparture, setQueryDeparture]= useState('');
const [queryDestination,setQueryDestination]= useState('');
const [date, setDate]=useState('');
// handle search async
const handleSearch = async(event)=>{
 event.preventDefault();
 const response = SearchFlights(queryDeparture, queryDestination, date)
 // return the data
 onSearch(response.data);
 //onsearch((await response).data);
};
// taking advantage of the styling
return (
<form className="Search-booking-form" onSubmit={handleSearch}>
 {/* handle departure */}
<input type="text" placeholder="Enter departure" value={queryDeparture} onChange={(event)=> setQueryDeparture(event.target.value)}/>
<input type="text" placeholder="Enter destination" value={queryDestination} onChange={(event)=>setQueryDestination(event.target.value)}/>
<input type="date" placeholder="Pick your date" value={ date} onChange={( dateEvent)=>setDate(dateEvent.target.value)}/>
<button type="submit">search flight</button>
</form>
)
};

export default SearchForm;