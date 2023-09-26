import style from '../App.module.css'
import styles from '../styles/pages/SearchPage.module.css'
import { SearchBar } from '../components/SearchBar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductCard } from '../components/ProductCard'
import { Link } from 'react-router-dom'
import { string } from 'prop-types'


export const SearchPage = () => {
  const [location, setLocation] = useState(null);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }


  function success(position: { coords: { latitude: string; longitude: string } }) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`---Latitude: ${latitude}, Longitude: ${longitude}`);
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  return (
    <section id='searchPage' className={style.container}>
      <div className={style.content}>
      <h1>Anima't a menjar sa  <br />de la mà dels teus veïns.{latitude}</h1>
      
      </div>
    </section>
  )
}
