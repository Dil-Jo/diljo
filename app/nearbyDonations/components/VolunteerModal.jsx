import PocketBase from "pocketbase";
import styles from "../VolunteerModal.module.css"
const VolunteerModal = ({ setVolunteer, volTit, volId, setVolTit, setVolId }) => {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
    const user = JSON.parse(localStorage.getItem("Login")).record.id
    // const res = pb.collection('volunteers').getList(1, 50, {
    //     filter: `id = "${volId}"`,
    // });
    // console.log(res.items);



    const saveDataToPocketBase = async () => {
        try {
            const response = await pb.collection('user_volunteers').create({
                users: user,
                drives: volId,
            });
            console.log('Data saved successfully:', response.data);
        }
        catch (error) {
            console.error('Failed to save data:', error);
        }
    };
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
export default VolunteerModal