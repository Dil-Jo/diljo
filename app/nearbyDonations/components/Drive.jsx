import Image from "next/image";
import { useEffect, useState } from "react";
import PocketBase from "pocketbase";

const Drive = ({ title, category, lat, lng, stDate, endDate, map, setVolunteer, setVolTit, setVolId, id, volTit, volId }) => {
    useEffect(() => {
    }, [volTit, volId])

    const getStatus = async () => {
        try {
            const user = JSON.parse(localStorage.getItem("Login")).record.id
            const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
            const response = await pb.collection('user_volunteers').getFullList({ filter: `users="${user}"&&drives="${id}"` });
            if (response.length === 0) {
                return false; //false for not going
            }
            else {
                return true;
            }
        }
        catch (error) {
            console.error('Failed to get data:', error);
        }
    };

    const [stautsState, setStautsState] = useState(false) //  for not going

    useEffect(() => {
        getStatus().then((res) => {
            setStautsState(res);
        })
    }, [])

    return (
        <div className={`shadow-lg flex border transition-all border-solid border-black rounded-xl mb-[1rem] active:bg-blue-900 active:text-white ${stautsState ? 'border-green-500' : ''}`} onClick={(e) => {
            e.stopPropagation();
            map.panTo(({ lat: Number(lat), lng: Number(lng) }))
        }}>
            <div className="flex flex-col w-5/6">
                <h3 className="text-[1.3rem] font-normal ml-4 mt-4">Donation Name: {title}</h3>
                <div className="flex flex-row ml-4 mt-2">
                    <h3 className="text-[1.3rem] font-normal mb-3">Category: {String(category).toUpperCase()}</h3>
                    <h3 hidden>Start Date: {stDate}</h3>
                    <h3 hidden>End Date: {endDate}</h3>
                </div>
            </div>
            <div className="flex flex-row">
                <h3 hidden >Latitude: {lat}</h3>
                <h3 hidden >Longitude: {lng}</h3>
            </div>
            <div className="flex justify-evenly w-2/6 items-end my-auto px-2">
                {!stautsState &&
                    (
                        <label htmlFor={`volunteer-modal-${id}`} className="relative h-8 w-8 " onClick={(e) => e.stopPropagation()}>
                            <Image title="Volunteer for this drive" src={"/assets/volunteer.png"} className="bg-white rounded-full " fill alt="volunteer-here" />
                        </label>)
                }



                <Image title="Open directions for this drive" alt="go-here" className="rounded-full bg-white" width={30} height={30} src={'/assets/arrow.png'} />
            </div>
            <Modal id={id} title={title} setStautsState={setStautsState} />
        </div>
    );
}

const Modal = ({ id, title, setStautsState }) => {
    const saveDataToPocketBase = async () => {
        const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
        const user = JSON.parse(localStorage.getItem("Login")).record.id
        try {
            const response = await pb.collection('user_volunteers').create({
                users: user,
                drives: id,
            });
            alert('Alright youre all set to go')
            console.log('Data saved successfully:', response.data);
            setStautsState(true);
        }
        catch (error) {
            console.error('Failed to save data:', error);
        }
    };
    return (
        <div onClick={(e) => e.stopPropagation()}>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id={`volunteer-modal-${id}`} className="modal-toggle" />
            {/* <input type="checkbox" ids={`volunteer-modal-${volId}`} className="modal-toggle bg-red-700" /> */}
            <div className="modal cursor-pointer">
                <div className="modal-box relative">
                    <label htmlFor={`volunteer-modal-${id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Do you want to volunteer for the {title} drive</h3>
                    <p className="py-4">This Donation drive ends on : </p>
                    <div className="flex justify-evenly">
                        <label htmlFor={`volunteer-modal-${id}`} className="btn btn-warning">I'll pass!</label>
                        <label className="btn btn-info " onClick={saveDataToPocketBase}>Count me In</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drive;