"use client";
import { GoogleMap, Marker, useLoadScript, CircleF } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import Form from "./components/Form"
import Sidebar from "./components/Sidebar"

const nearbyDonations = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyAB1EQb-2K8ZD5RFHpKnewx-t3zKZMI0PE",
    });
    const [formIsOpen, setFormIsOpen] = useState(false);
    const openForm = (e) => {
        console.log("latitude = " + e.latLng.lat());
        console.log("longitude = " + e.latLng.lng());
        setFormIsOpen(true);
        console.log('form is open');
    };


    const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });


    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setCurrentLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                error => console.error(error),
                { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

    useEffect(() => {
        getLocation();
    }, []);
    const center = { lat: Number(currentLocation.lat), lng: Number(currentLocation.lng) };

    return (
        <>
            <div className="flex">
                {/* {formIsOpen ? <Form /> : null} */}
                <Sidebar />
                <div className="App h-[50rem] w-3/4">
                    {!isLoaded ? (
                        <h1>Loading...</h1>
                    ) : (
                        <GoogleMap
                            mapContainerClassName="map-container h-full w-full"
                            center={center}
                            zoom={14}
                            onClick={openForm}
                        ><Marker position={{ lat: Number(currentLocation.lat), lng: Number(currentLocation.lng) }} />
                            {[2000, 4000].map((radius, idx) => {
                                return (
                                    <CircleF
                                        key={idx}
                                        onClick={(e) => openForm(e)}
                                        center={center}
                                        radius={radius}
                                        onLoad={() => console.log('Circle Load...')}
                                        options={{
                                            fillColor: radius > 2000 ? 'red' : 'green',
                                            strokeColor: radius > 2000 ? 'red' : 'green',
                                            strokeOpacity: 0.4,
                                            fillOpacity: 0.2,
                                        }}
                                    />
                                );
                            })}
                        </GoogleMap>


                    )}
                </div>
            </div>

        </>
    );
}

export default nearbyDonations;