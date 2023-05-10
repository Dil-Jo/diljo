"use client";
import { GoogleMap, Marker, useLoadScript, CircleF } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import Modal from "./components/Modal"
import PocketBase from "pocketbase";
import Drive from "./components/Drive"
import { get } from "http";

const nearbyDonations = () => {
    const [numDrives, setNumDrives] = useState([]);

    const [markers, setMarkers] = useState({});
    const [shameekhMarkers, setShameekhMarkers] = useState([]);

    const [map, setMap] = useState(/**@type google.maps.Map */(null));
    const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
    const [ModalOpen, ModalIsOpen] = useState(false);
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const [loading, setLoading] = useState(true);
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,

    });
    const openForm = (e) => {
        ModalIsOpen(true);
        setLat(e.latLng.lat());
        setLng(e.latLng.lng());
    };

    const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });

    const getLocation = () => {
        if (navigator.geolocation) {
            console.log("start get location")
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
        console.log("end get location")

    };

    const getCollectionData = async () => {
        try {
            console.log("start get collection")
            const response = await pb.collection("volunteers").getList();
            console.log({ response })
            setNumDrives(response.items);
            console.log("end get collection")

            getMarkers(response.items)

            // return response.items

        } catch (error) {
            console.error("Failed to get collection data:", error);
        }
    };
    const getMarkers = async (prop) => {
        console.log("start get marker")
        console.log({ prop })
        getLocation();
        console.log({ numDrives })
        let newArr = [];
        prop.map((data) => {
            //     const newMarkers = {};
            //     console.log(data);
            //     data.forEach(volunteer => {
            //         const title = volunteer.title;
            //         const latitude = volunteer.latitude;
            //         const longitude = volunteer.longitude;
            //         const category = String(volunteer.category);
            //         newMarkers[title] = { lat: latitude, lng: longitude, cat: category };
            //     });
            //     setMarkers(newMarkers);
            //     setLoading(false)
            //     console.log('emd get marker')
            // });
            // const newMarker = {};
            console.log({ data })
            const title = data.title;
            const latitude = data.latitude;
            const longitude = data.longitude;
            const start = data.startingDate;
            const end = data.endingDate;
            const category = String(data.category);
            const newMarker = { title: title, lat: latitude, lng: longitude, cat: category, end: end, start: start };
            newArr.push(newMarker)
        })
        setShameekhMarkers(newArr)
        setLoading(false)


    }
    useEffect(() => {
        // getCollectionData(/).then((res) => getMarkers(res));
        getCollectionData();
    }, []);

    useEffect(() => {
        console.log({ shameekhMarkers }, [shameekhMarkers])
    })

    const center = { lat: Number(currentLocation.lat), lng: Number(currentLocation.lng) };

    return (
        <>
            <div className="flex mb-4 border-4 border-solid  border-slate-900">
                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-end">

                        <div className="relative App h-full w-full">
                            {(!isLoaded) ? (
                                <h1>Loading...</h1>
                            ) : (
                                <>
                                    <label htmlFor="my-drawer-2" className="drawer-overlay absolute btn btn-primary text-sm drawer-button lg:hidden z-10 top-4 right-4">Show Drives</label>
                                    <GoogleMap id="map"
                                        mapContainerClassName="map-container h-full w-full"
                                        center={center}
                                        options={
                                            {
                                                disableDefaultUI: true,
                                                zoomControl: true,
                                                fullscreenControl: false

                                            }}
                                        zoom={14}
                                        onLoad={map => setMap(map)}
                                        onClick={(e) => openForm(e)}
                                    >
                                        <Marker position={{ lat: Number(currentLocation.lat), lng: Number(currentLocation.lng) }} />
                                        {shameekhMarkers.map((marker) => {
                                            var url;
                                            switch (marker.cat) {
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
                                                <Marker title={`${marker.title}\nStarting on : ${String(marker.start).slice(0, 10)}\nEnding on : ${String(marker.end).slice(0, 10)}`} key={marker.title} position={{ lat: Number(marker.lat), lng: Number(marker.lng) }} icon={{ url: url, scaledSize: new window.google.maps.Size(45, 45), origin: new window.google.maps.Point(0, 0), anchor: new window.google.maps.Point(15, 15) }} />)
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
                                </>
                            )}
                        </div>


                    </div>
                    {!loading && (
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                            <div className="flex justify-center py-4 bg-slate-900 sm:w-full md:w-[30rem]">
                                <h1 className="text-3xl text-white">Nearby Donation Drives</h1>
                            </div>
                            <ul className="p-4 bg-base-100 text-base-content border-r-4 border-slate-900 w-full md:w-[30rem] overflow-y-auto">

                                {numDrives.map((drive) => (
                                    <label htmlFor="my-drawer-2" className="drawer-overlay">
                                        <Drive title={drive.title} category={drive.category} lat={drive.latitude} lng={drive.longitude} stDate={drive.startingDate} endDate={drive.endingDate} map={map} />


                                    </label>

                                ))}
                            </ul>

                        </div>)}
                </div>
            </div>

            {ModalOpen && <Modal ModalIsOpen={ModalIsOpen}
                lat={lat} lng={lng} />}
        </>
    );
}

export default nearbyDonations;