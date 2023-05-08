"use client";
import { GoogleMap, Marker, useLoadScript, CircleF } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import Modal from "./components/Modal"
import PocketBase from "pocketbase";
import Sidebar from "./components/Sidebar"

const nearbyDonations = () => {

    // dotenv.config();
    // console.log(process.env.GOOGLE_API_KEY);

    const [markers, setMarkers] = useState({});
    const [map, setMap] = useState(/**@type google.maps.Map */(null));
    const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
    const [ModalOpen, ModalIsOpen] = useState(false);
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,

    });
    console.log('gKey', process.env.NEXT_PUBLIC_GOOGLE_API_KEY)
    const openForm = (e) => {
        ModalIsOpen(true);
        setLat(e.latLng.lat());
        setLng(e.latLng.lng());
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
        pb.collection("volunteers").getList().then(data => {
            const newMarkers = {};
            data.items.forEach(volunteer => {
                const title = volunteer.title;
                const latitude = volunteer.latitude;
                const longitude = volunteer.longitude;
                const category = String(volunteer.category);
                newMarkers[title] = { lat: latitude, lng: longitude, cat: category };
            });
            setMarkers(newMarkers);
        });

    }, []);

    const center = { lat: Number(currentLocation.lat), lng: Number(currentLocation.lng) };

    return (
        <>
            <div className="flex">

                <Sidebar map={map} />
                <div className="App h-[50rem] w-2/3">
                    {!isLoaded ? (
                        <h1>Loading...</h1>
                    ) : (
                        <GoogleMap id="map"
                            mapContainerClassName="map-container h-full w-full"
                            center={center}
                            zoom={14}
                            onLoad={map => setMap(map)}
                            onClick={(e) => openForm(e)}
                        >
                            <Marker position={{ lat: Number(currentLocation.lat), lng: Number(currentLocation.lng) }} />
                            {Object.entries(markers).map(([title, coords]) => {
                                var url;
                                switch (coords.cat) {
                                    case "food":
                                        // code block
                                        url = '/assets/food.png'
                                        break;
                                    case "clothing":
                                        // code block
                                        url = '/assets/clothing.png'
                                        break;
                                    case "blood":
                                        url = '/assets/blood.png'
                                        break;
                                    case "books":
                                        url = '/assets/books.png'
                                        break;
                                    default:
                                        break;

                                }
                                console.log(url);
                                return (
                                    <Marker title={String(title)} key={title} position={{ lat: Number(coords.lat), lng: Number(coords.lng) }} icon={{ url: url, scaledSize: new window.google.maps.Size(45, 45), origin: new window.google.maps.Point(0, 0), anchor: new window.google.maps.Point(15, 15) }} />)
                            })}
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
            {ModalOpen && <Modal ModalIsOpen={ModalIsOpen}
                lat={lat} lng={lng} />}

        </>
    );
}

export default nearbyDonations;