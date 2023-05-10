import Drive from './Drive';
import pocketbase from "pocketbase";
import { useEffect, useState } from 'react';
const Sidebar = ({ map }) => {
    const [numDrives, setNumDrives] = useState([]);
    const getCollectionData = async () => {
        try {
            const response = await pb.collection("volunteers").getList();
            setNumDrives(response.items);
        } catch (error) {
            console.error("Failed to get collection data:", error);
        }
    };
    useEffect(() => {
        getCollectionData();
    }, []);

    return (

        <>
            <div className="flex flex-col sidebar w-1/3 h-[50rem] shadow-2xl">
                <div className="sidebar-header h-[7rem]  bg-slate-700">
                    <h3 className="font-normal text-[2.5rem] h-4 ml-4 text-white mt-4">
                        Nearby Donation Drives
                    </h3>
                </div>
                <div className="drives bg-slate-500">
                    {numDrives.map((drive) => (
                        <Drive title={drive.title} category={drive.category} lat={drive.latitude} lng={drive.longitude} stDate={drive.startingDate} endDate={drive.endingDate} map={map} />
                    ))}

                </div>
            </div>
        </>
    );
}
export default Sidebar;