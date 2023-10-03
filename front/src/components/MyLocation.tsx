
import styles from "../App.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { LocationDetail } from "./LocationDetail";
import { GeoAltFill } from "react-bootstrap-icons";

export const MyLocation = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [myLocation, setMyLocation] = useState({lat:"", lng:""});

   useEffect(() => {
     const fetchLocation = async () => {
       try {
        //console.log(`env: ${import.meta.env.VITE_GOOGLE_API_KEY} `)
        const config = {
        url:`https://www.googleapis.com/geolocation/v1/geolocate?key= ${import.meta.env.VITE_GOOGLE_API_KEY}`,
        method: "POST"
       };
         const response = await axios(config);
         //console.log(response.data.location)
         setMyLocation(response.data.location);
         setLoading(false);
       } catch (error) {
         setError("Failed to connect to server :(");
         setLoading(false);
       }
     };
     fetchLocation();
   }, []);

   if (loading) {
     return <div className="error-messages">Loading...</div>;
   }

    console.log(`My Location: ${myLocation.lat},  ${myLocation.lng} to detail Component`)
  return !error && !loading? (
    <>
    <section id='my-location' className={styles.mylocation}>
      <GeoAltFill />
      <div className={styles.geolocation}>  
        {myLocation.lat} - {myLocation.lng}
        <LocationDetail lat={myLocation.lat} lng={myLocation.lng}/>
      </div>
      </section>
    </>
  ) : (
    error
  );
};
