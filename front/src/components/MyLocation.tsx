
import { useGeolocated } from "react-geolocated";
import styles from '../App.module.css';

export const MyLocation = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: true,
            },
            userDecisionTimeout: 5000,
        });

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <section id='geolocation' className={styles.geolocation}>
            <div>latitude: {coords.latitude}<br />longitude: {coords.longitude}</div>
        </section>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
};

