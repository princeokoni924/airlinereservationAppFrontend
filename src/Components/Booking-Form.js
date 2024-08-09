import React,{useState} from "react";
import '../styles/Airline_Booking_System_styles.css'
import { bookFlight } from "../services/booking-api";

const BookingForm = ({bkFlights})=>{
const[name, setName]=useState('');
const[email, setEmail]=useState('');
const[phoneNumber, setPhone]=useState('');

// handle booking
const handleBooking = async(e)=>{
e.preventDefault();

const response = await bookFlight({
flightNumber: bkFlights.flightNumber,
name,
email,
phoneNumber
});
console.log(response.data);
};

// return html
return(
  < div className="container booking-form">
  <h2>Book flight</h2>
  <form onSubmit={handleBooking}>
 <label>Name</label>
 <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

 <label>Email</label>
 <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>

 <label>Contact Number</label>
 <input type="text" value={phoneNumber} onChange={(e)=> setPhone(e.target.value)}/>
 <button type="submit" onClick={()=> handleBooking(bkFlights)}>Book</button>
  </form>
  </div>
)


};
export default BookingForm;