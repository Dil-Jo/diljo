import { useEffect, useState } from 'react';
import React from "react";
import styles from "../Modal.module.css"
import PocketBase from "pocketbase";

const Modal = ({ ModalIsOpen, lat, lng }) => {

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
            <div className={styles.darkBG + "z-50"} onClick={() => ModalIsOpen(false)} />
            <div className={styles.centered} >
                <form className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>Add a new Donation Drive</h5>
                    </div>
                    <button className={styles.closeBtn} onClick={() => ModalIsOpen(false)}>
                        X
                    </button>
                    <div className={styles.modalContent}>
                        Enter the details of the donation drive:
                    </div>
                    <div className={styles.stuff}>
                        <div className={styles.title}>
                            <div  >
                                {/*Taking title of the drive*/}
                                <label htmlFor="title" className="text-slate-800 mx-4">Title:</label>
                                <input
                                    type="text"
                                    placeholder="Title goes here"
                                    name="title"
                                    className="text-slate-800 input input-bordered w-5/6 mx-4 center max-w-xs pb-3 px-4 pr-9 md:mt-5 mt-5 border-2 border-solid border-black  rounded-md text-lg sm:p-5 my-auto"
                                    onChange={(event) => setTitle(event.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className='flex mt-4'>
                            <label htmlFor="category" className="text-slate-800 mt-2 mx-4 sm:flex sm:flex-col">Select the category of donation drive:</label>
                            <select id="category" name="category" onChange={(event) => setCategory(event.target.value)} className="text-slate-800 h-11 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border-2 border-solid border-black mr-3 " required>
                                <option value="food"  selected>Food Drive</option>
                                <option value="clothing" >Clothing Drive</option>
                                <option value="blood">Blood Drive</option>
                                <option value="books">Books Drive</option>
                            </select>
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="starting" className="text-slate-800 mx-4 mt-6">Select the starting date for the drive:</label>
                            <div className={styles.box}>
                                <input className="text-slate-800 border-2 border-solid border-slate-600" id="starting" type='date' required onChange={(e) => setStDate(e.target.value)} /></div>
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="ending" className="text-slate-800 ml-4 mt-6">Select the ending date for the drive:</label>
                            <div className={styles.box}>
                                <input className="text-slate-800 border-b-gray-800 border-2 border-solid border-slate-600" id="ending" type='date' onChange={(e) => setEndDate(e.target.value)} /></div>
                        </div>
                    </div>
                    <div className={styles.modalActions}>
                        <div className={styles.actionsContainer}>
                            <button className={styles.deleteBtn} onClick={() => ModalIsOpen(false)}>
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className={styles.cancelBtn}
                                onClick={() => {
                                    if (title !== undefined || category !== undefined || stDate !== undefined) {
                                        setDonLat(lat); setDonLng(lng); onSubmit(); ModalIsOpen(false);
                                    }
                                }}
                            >
                                Yes
                            </button>

                        </div>
                    </div >
                </form>
            </div >
        </>
    );
};

export default Modal;
