import axios from "axios";
const API_BASE_URL ='http://localhost:5281';

// export search flight method
export const SearchFlights = async (departure, destination, date)=>{
 try{
   //const response = await axios.get(`${API_BASE_URL}/booking/search?departure=${departure}&destination=${destination}&date=${date}`);
   const response = await axios.get(`${API_BASE_URL}/api/booking/search?departure=${departure}&destination=${destination}&date=${date}`
    //{
  //   params:{
  //     departure,
  //     destination,
  //     date
   // }
    //}
  );
   return response;
 }catch(error){
  console.error('Error searching flight', error);
  throw error;
 }
};

export const bookFlight = async(bookFlightRequest)=>{
 try{
const config={
 headers:{
  "content-type":"application/json" ,        
 }
};
 const response = await axios.post(`${API_BASE_URL}/booking/book`,bookFlightRequest,config);
 return response;
 }catch(error){
  console.error('Error booking flight',error);
  throw error;
 }
}