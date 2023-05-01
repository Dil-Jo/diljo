"use client";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import Form from "./components/form";
const nearbyDonations = () => {

    // const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });

    // const getLocation = () => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //             position => {
    //                 setCurrentLocation({
    //                     lat: position.coords.latitude,
    //                     lng: position.coords.longitude,
    //                 });
    //             },
    //             error => console.error(error),
    //             { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    //         );
    //     } else {
    //         console.error("Geolocation is not supported by this browser.");
    //     }
    // };

    // useEffect(() => {
    //     getLocation();
    // }, []);

    // const { isLoaded } = useLoadScript({
    //     googleMapsApiKey: "AIzaSyAB1EQb-2K8ZD5RFHpKnewx-t3zKZMI0PE",
    // });

    // const center = { lat: Number(currentLocation.lat), lng: Number(currentLocation.lng) };

    return (
        // <div className="App h-[60rem] w-[60rem]">
        //     {!isLoaded ? (
        //         <h1>Loading...</h1>
        //     ) : (
        //         <GoogleMap
        //             mapContainerClassName="map-container h-full w-full"
        //             center={center}
        //             zoom={10}
        //         ><Marker position={{ lat: Number(currentLocation.lat), lng: Number(currentLocation.lng) }} />
        //         </GoogleMap>
        //     )}
        // </div>
        <>
            <Form />
        </>
    );
}
export default nearbyDonations;