import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface LocationProps {
  lat: string,
  lng: string,

}

export const LocationDetail = ({lat,lng}:LocationProps) => {

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [myLocation, setMyLocation] = useState<string | null>(null);

   useEffect(() => {
     const fetchLocation = async () => {
      
       try {
        const config = {
         url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBJOGgATeWGC_lFVOaQl-L5Vu4Wjt3psYM`,
         method: "GET",

       };
       // console.log(`Detail Location:latitude: ${lat} - longitude: ${lng}`)
         const response = await axios(config);
         console.log(response.data.results[7].formatted_address)
         setMyLocation(response.data.results[7].formatted_address);
         setLoading(false);
       } catch (error) {
         setError("Failed to connect to server :(");
         setLoading(false);
       }
     };
     fetchLocation();
   }, []);

//   if (loading) {
//     // Display loading state
//     return <div className="error-messages">Loading...</div>;
//   }
//   if (error) {
//     // Display error message
//     return <div className="error-messages">Something went wrong: {error}<br></br></div>;

//   }

  return !error ? (
    <>
      <div>¿ {myLocation} ? </div>
    </>
  ) : (
    error
  );
}
