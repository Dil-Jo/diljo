import PocketBase from "pocketbase";
import styles from "../VolunteerModal.module.css"
import { useState, useEffect } from "react";

const VolunteerModal = ({ setVolunteer, volTit, volId, setVolTit, setVolId }) => {






    const onSubmit = () => {
        saveDataToPocketBase();
        setVolTit('');
        setVolId('');
    }

    return (

        <>
            <div className={styles.darkBG} onClick={() => {
                setVolunteer(false);
                setVolTit('');
                setVolId('');
            }}
            />
            <div className={styles.centered} >
                <form className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>Volunteer for Donation Drive</h5>
                    </div>
                    <button className={styles.closeBtn} onClick={() => {
                        setVolunteer(false);
                        setVolTit('');
                        setVolId('');
                    }}>
                        X
                    </button>
                    <div className={styles.modalContent}>
                        Do you want to volunteer for {volTit}?
                    </div>
                    <div className={styles.stuff}>
                        <h1 className="text-slate-900">This Donation drive ends on :  </h1>
                    </div>
                    <div className={styles.modalActions}>
                        <div className={styles.actionsContainer}>
                            <button className={styles.deleteBtn} onClick={() => {
                                setVolunteer(false);
                                setVolTit('');
                                setVolId('');
                            }}>
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className={styles.cancelBtn}
                                onClick={() => {
                                    onSubmit(); setVolunteer(false);
                                }}
                            >
                                Yes
                            </button>

                        </div>
                    </div >
                </form>
            </div>
        </>
    )
}
const AlreadyEnrolled = () => {
    return (
        <>
            <div className={styles.darkBG} onClick={() => {
                setVolunteer(false);
                setVolTit('');
                setVolId('');
            }}
            />
            <div className={styles.centered} >
                <form className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>Volunteer for Donation Drive</h5>
                    </div>
                    <button className={styles.closeBtn} onClick={() => {
                        setVolunteer(false);
                        setVolTit('');
                        setVolId('');
                    }}>
                        X
                    </button>
                    <div className={styles.modalContent}>
                        You are already enrolled in this drive
                    </div>
                    <div className={styles.stuff}>
                        <h1 className="text-slate-900">This Donation drive ends on :  </h1>
                    </div>
                    <div className={styles.modalActions}>
                        <div className={styles.actionsContainer}>
                            <button className={styles.deleteBtn} onClick={() => {

                                setVolunteer(false);
                                setVolTit('');
                                setVolId('');
                            }}>
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className={styles.cancelBtn}
                                onClick={() => {
                                    onSubmit(); setVolunteer(false);
                                }}
                            >
                                Yes
                            </button>
                        </div>
                    </div >
                </form>
            </div>
        </>
    )
}

export default VolunteerModal