import { useEffect, useState } from 'react';
import React from "react";
import styles from "../Modal.module.css"
import PocketBase from "pocketbase";

const Modal = ({ ModalIsOpen, lat, lng }) => {

    const [donationType, setDonationType] = useState('');
    const [donlat, setDonLat] = useState();
    const [donlng, setDonLng] = useState();

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
                        Do you want to submit a donation drive?
                    </div>
                    <div>
                        <label htmlFor="reason" className="{styles.modalContent}">Select a reason for collecting funds:</label>
                        <select id="reason" name="reason" onChange={(event) => setDonationType(event.target.value)} className="h-11 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <option value="">-- Select a reason --</option>
                            <option value="emergency"  >Emergency</option>
                            <option value="education"  >Education</option>
                            <option value="healthcare">Healthcare</option>
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
