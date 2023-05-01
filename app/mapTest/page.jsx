// import { Loader } from '@googlemaps/js-api-loader';
'use client'
import React, { useEffect, useState } from "react";
// import ReactGoogleMapLoader from "react-google-maps-loader"
// import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
// import ReactGoogleMap from "react-google-map"



import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function MyComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBaiLOU2zqe1_ioaPOSwMNoLuUueoK54I0"
    })

    const [map, setMap] = useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}


const Map = ({ location, zoomLevel }) => (
    <div className="map">
        <h2 className="map-h2">Come Visit Us At Our Campus</h2>

        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBaiLOU2zqe1_ioaPOSwMNoLuUueoK54I0' }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    </div>
)

const LocationPin = ({ text }) => (
    <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
    </div>
)

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
}

// const YourComponent = () => {


//     return (
//         <ReactGoogleMapLoader
//             params={{
//                 key: "AIzaSyCLTirc_kwH5fV0RkzOIH_cP5J9SJHW2QA",
//                 libraries: "places,geometry",
//             }}
//             render={(googleMaps, error) =>
//                 googleMaps ? (
//                     <div>
//                         {/*Show a custom error if SDK Authentication Error. See N/B 2 below.*/}
//                         {error ? error : "Google Maps is loaded !"}
//                     </div>
//                 ) : (
//                     <div>
//                         {/*Check for network error so loading state ends if user lost connection.*/}
//                         {error === "Network Error" ? (
//                             <p>{error}</p>
//                         ) : (
//                             <p>isLoading...</p>
//                         )}
//                     </div>
//                 )
//             }
//         />
//     )
// }


const page = () => {

    return (
        <div>
            {/* <YourComponent /> */}
            <MyComponent location={location} zoomLevel={17} />
        </div>
    )
}

export default page