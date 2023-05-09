import { useEffect, useState } from 'react';
import React from "react";
import styles from "../Modal.module.css"
import PocketBase from "pocketbase";


const Modal2 = () => {

    const [title, setTitle] = useState();
    const [donlat, setDonLat] = useState();
    const [donlng, setDonLng] = useState();
    const [category, setCategory] = useState();
    const [stDate, setStDate] = useState();
    const [endDate, setEndDate] = useState();
    const organizer = JSON.parse(localStorage.getItem("Login")).record.id
    useEffect(() => {
        setDonLat(lat);
        setDonLng(lng);
    }, [lat, lng]);

    const saveDataToPocketBase = async () => {
        const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

        //----------REMOVED AREA AND FUNDRAISER FROM THE DATABASE--------------

        try {
            const response = await pb.collection('volunteers').create({
                title: title,
                longitude: donlng,
                latitude: donlat,
                category: category,
                startingDate: stDate,
                endingDate: endDate,
                organizer: organizer,
            });
            console.log('Data saved successfully:', response.data);
        } catch (error) {
            console.error('Failed to save data:', error);
        }
    };

    const onSubmit = () => {
        console.log("Final latitude = ", donlat);
        console.log("Final Longitude = ", donlng);
        console.log(category);
        console.log(title);
        console.log(stDate);
        console.log(endDate);
        console.log(organizer);

        if (!category) {
            alert('Please select a donation type');
            return;
        }

        saveDataToPocketBase();
        setCategory('');
    };

    return (
        <>
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Modal2