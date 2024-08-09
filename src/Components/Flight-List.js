import React,{useState} from "react";
import '../styles/Airline_Booking_System_styles.css'
import BookingForm from "./Booking-Form";

const FlightList =({flights})=>{


const [selectFlight, setSelectFlight]=useState(null);
const handleFlightSelect=(flight)=>{
// pass the value of set flight select
setSelectFlight(flight);
}


// return html
return(
<div>
<h1>Av flights</h1>
{/* mapping the flight */}
{flights.map(flight=>(
   <div className="flight-card" key={flight.flightNumber}>
 <h3>{flight.flightNumber}</h3>
 <p>{flight.departureAirport}to {flight.destinationAirport}</p>
 <p>Departure Time{flight.departureTime}</p>
 <p>Arrival Time {flight.arrivalTime}</p>
 <p>Price: ₦{flight.tickePrice}</p>
 <button className="booking-btn"
 onClick={()=> handleFlightSelect(flight)}>Book</button>
   </div>         
))}
{selectFlight && <BookingForm flight={selectFlight}/>}
</div>

);
};

export default FlightList;