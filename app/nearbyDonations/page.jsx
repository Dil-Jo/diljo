"use client";
import { GoogleMap, Marker, useLoadScript, CircleF } from "@react-google-maps/api";
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

// import Form from "./components/form.jsx";

const libraries = ["places"];
const nearbyDonations = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyAB1EQb-2K8ZD5RFHpKnewx-t3zKZMI0PE",
        libraries,
    });
    const [formIsOpen, setFormIsOpen] = useState(false);
    const openForm = () => {
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
        <div>
            {/* {formIsOpen ? <Form /> : null} */}
            <Search />
            <div className="App h-[60rem] w-[60rem]">
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

    );
}

function Search() {
    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => currentLocation.lat, lng: () => currentLocation.lng },
            radius: 400 * 1000,
        },
    });
    return (
        <>
            <Combobox onSelect={(address) => { console.log(address) }}>
                <ComboboxInput className="mt-4 input input-bordered w-full max-w-xs" value={value} onChange={(e) => { setValue(e.target.value); setLocation(e.target.value) }} placeholder="Enter an Address" />
            </Combobox>
            {/* <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" &&
                        data.map(({ id, description }) => (
                            <ComboboxOption key={id} value={description} />
                        ))}
                </ComboboxList>
            </ComboboxPopover> */}
        </>
    )
}


export default nearbyDonations;