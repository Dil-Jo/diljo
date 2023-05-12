"use client";
import { GoogleMap, Marker, useLoadScript, CircleF } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import Modal from "./components/Modal"
import PocketBase from "pocketbase";
import Drive from "./components/Drive"
import VolunteerModal from "./components/VolunteerModal";


const nearbyDonations = () => {
    const [numDrives, setNumDrives] = useState([]);
    const [volunteer, setVolunteer] = useState(false);
    const [volTit, setVolTit] = useState("");
    const [volId, setVolId] = useState("");
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

        // ModalIsOpen(true);
        setLat(e.latLng.lat());
        setLng(e.latLng.lng());
        console.log({ modalRef })
        modalRef.current.className += ' modal-open '
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
            const response = await pb.collection("volunteers").getList();
            console.log({ response })
            setNumDrives(response.items);
            getMarkers(response.items)

            // return response.items

        } catch (error) {
            console.error("Failed to get collection data:", error);
        }
    };
    const getMarkers = async (prop) => {
        getLocation();
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
    const modalRef = useRef(null)
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

                                {numDrives.map((drive) => {
                                    return (
                                        <label htmlFor="my-drawer-2" className="drawer-overlay">
                                            <Drive title={drive.title} category={drive.category} lat={drive.latitude} lng={drive.longitude} stDate={drive.startingDate} endDate={drive.endingDate} map={map} setVolunteer={setVolunteer} setVolTit={setVolTit} setVolId={setVolId} id={drive.id} volTit={volTit} volId={volId} />
                                        </label>

                                    )
                                }
                                )}
                            </ul>

                        </div>)}
                </div>
            </div>

            {/* {ModalOpen && <Modal ModalIsOpen={ModalIsOpen}
                lat={lat} lng={lng} />} */}
            <AddDriveModal id={'alphabetical-gamma-tistan'} lat={lat} lng={lng} referer={modalRef} />
            {volunteer && <VolunteerModal setVolunteer={setVolunteer} volTit={volTit} volId={volId} setVolTit={setVolTit} setVolId={setVolId} />}
        </>
    );
}

const AddDriveModal = ({ id, lat, lng, referer }) => {

    const closeModal = () => {
        referer.current.className = 'modal cursor-pointer'
    }

    const [formData, setFormData] = useState({ title: '', category: '', startingDate: '', endingDate: '' })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const saveDataToPocketBase = async (e) => {
        e.preventDefault();
        // console.log({ e })
        console.log({ formData })
        if (!formData.category) {
            alert('Please select a donation type');
            return;
        }
        if (!formData.title) {
            alert('Please enter a title');
            return;
        }
        if (!formData.startingDate) {
            alert('Please enter a starting date');
            return;
        }

        const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
        const organizer = JSON.parse(localStorage.getItem("Login")).record.id
        try {
            const response = await pb.collection('volunteers').create({
                title: formData.title,
                longitude: lng,
                latitude: lat,
                category: formData.category,
                startingDate: formData.startingDate,
                endingDate: formData.endingDate,
                organizer: organizer,
            });
            alert('Alright youre all set to go')
            console.log('Data saved successfully:');
        }
        catch (error) {
            console.error('Failed to save data:', error);
        }
    };
    return (
        <div onClick={(e) => e.stopPropagation()}>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id={`drive-modal-${id}`} className="modal-toggle" />
            {/* <input type="checkbox" ids={`volunteer-modal-${volId}`} className="modal-toggle bg-red-700" /> */}
            <div className="modal cursor-pointer" ref={referer}>
                <div className="modal-box relative">
                    <label onClick={closeModal} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="model-content flex flex-col justify-center items-start my-5">
                        <h2 className="text-2xl font-bold tracking-tighter"> Enter the details of the donation drive:</h2>
                        <form id="addDrive" onSubmit={saveDataToPocketBase} className="text-slate-800">
                            {/* --------------------------- */}

                            <label className="label text-lg tracking-tight font-semibold" htmlFor="title">
                                What is your name?
                            </label>
                            <input type="text" placeholder="Title goes here" id='title' className="input input-bordered w-full max-w-xs" name='title' required value={formData.title} onChange={handleChange} />
                            {/* --------------------------- */}

                            <label className="label text-lg tracking-tight font-semibold" htmlFor="category">
                                Pick up the category of the drive:
                            </label>
                            <select className="select select-bordered" id="category" name="category" required value={formData.category} onChange={handleChange}>
                                <option disabled selected>Pick one</option>
                                <option value="food"  >Food Drive</option>
                                <option value="clothing" >Clothing Drive</option>
                                <option value="blood">Blood Drive</option>
                                <option value="books">Books Drive</option>
                            </select>
                            {/* --------------------------- */}

                            <label htmlFor="starting" className="label text-lg tracking-tight font-semibold">Select the starting date for the drive:</label>
                            <div className={''}>
                                <div className= "relative max-w-sm">
                                    <div className= "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className= "w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type='date' name="startingDate" id="startingDate" className= "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" value={formData.startingDate} onChange={handleChange} />
                                </div>
                            </div>
                            {/* --------------------------- */}
                            <label htmlFor="ending" className="label text-lg tracking-tighter font-semibold">Select the ending date for the drive:</label>
                            <div className= "relative max-w-sm">
                                <div className= "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className= "w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input type="date" name="endingDate" id="endingDate" className= "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" value={formData.endingDate} onChange={handleChange} />
                            </div>
                        </form>
                    </div>
                    <div className="flex justify-evenly">
                        <label className="btn btn-warning" onClick={closeModal}>Cancel</label>
                        <label className="btn btn-info " type='submit' form='addDrive' onClick={saveDataToPocketBase}>Add Drive</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default nearbyDonations;