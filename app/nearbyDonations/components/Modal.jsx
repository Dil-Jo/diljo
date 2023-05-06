import { useEffect, useState } from 'react';
import React from "react";
import styles from "../Modal.module.css"
import PocketBase from "pocketbase";

const Modal = ({ ModalIsOpen, lat, lng }) => {

    const [donationType, setDonationType] = useState('');
    const [donlat, setDonLat] = useState();
    const [donlng, setDonLng] = useState();
    const [title, setTitle] = useState();
    useEffect(() => {
        setDonLat(lat);
        setDonLng(lng);
    }, [lat, lng]);

    const saveDataToPocketBase = async () => {
        const pocketbase = new PocketBase("http://127.0.0.1:8090");

        try {
            const response = await pocketbase.insert('donation-drives', {
                type: donationType,
                location: {
                    latitude: donlat,
                    longitude: donlng
                }
            });

            console.log('Data saved successfully:', response.data);
        } catch (error) {
            console.error('Failed to save data:', error);
        }
    };

    const onSubmit = () => {
        console.log("Final latitude = ", donlat);
        console.log("Final Longitude = ", donlng);
        console.log(donationType);

        if (!donationType) {
            alert('Please select a donation type');
            return;
        }

        saveDataToPocketBase();
        setDonationType('');
    };

    return (
        <>
            <div className={styles.darkBG} onClick={() => ModalIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>Dialog</h5>
                    </div>
                    <button className={styles.closeBtn} onClick={() => ModalIsOpen(false)}>
                        X
                    </button>
                    <div className={styles.modalContent}>
                        Adding a new donation drive?
                    </div>
                    <div>
                        {/*Taking title of the drive*/}
                        <label htmlFor="title" className="text-slate-800">Title:</label>
                        <input
                            type="text"
                            placeholder="Title goes here"
                            name="title"
                            className=" input input-bordered w-full max-w-xs pb-3 px-4 pr-9 md:mt-0 mt-5 border-gray-200 rounded-md text-lg sm:p-5 my-auto"
                            onChange={(event) => setTitle(event.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="reason" className="text-slate-800">Select a reason for collecting funds:</label>
                        <select id="reason" name="reason" onChange={(event) => setDonationType(event.target.value)} className="text-slate-800 h-11 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <option value="food"  >Food Drive</option>
                            <option value="clothing" >Clothing Drive</option>
                            <option value="blood">Blood Drive</option>
                            <option value="books">Books Drive</option>
                        </select>
                    </div>
                    <div className={styles.modalActions}>
                        <div className={styles.actionsContainer}>
                            <button className={styles.deleteBtn} onClick={() => ModalIsOpen(false)}>
                                Cancel
                            </button>
                            <button
                                className={styles.cancelBtn}
                                onClick={() => { setDonLat(lat); setDonLng(lng); onSubmit(); ModalIsOpen(false); }}
                            >
                                Yes
                            </button>

                        </div>
                    </div >
                </div>
            </div >
        </>
    );
};

export default Modal;
