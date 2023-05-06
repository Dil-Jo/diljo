// import Drive from './DonationDrive';
import pocketbase from "pocketbase";
const Sidebar = () => {

    const getCollectionData = async () => {
        try {
            const response = await pocketbase.collection("volunteers").getList();
            console.log(response.items.length); // the array of rows of the collection
        } catch (error) {
            console.error("Failed to get collection data:", error);
        }
    };
    getCollectionData();


    return (
        <>
            <div className="flex flex-col sidebar w-1/4 h-[50rem] shadow-2xl">
                <div className="sidebar-header h-[7rem]  bg-slate-700">
                    <h3 className="font-normal text-[2.5rem] h-4 ml-4 text-white mt-4">
                        Nearby Donation Drives
                    </h3>
                </div>
                <div className="drives bg-slate-500">
                    {/* <Drive donationType="Food" location="1234 Main St." /> */}
                </div>
            </div>
        </>
    )
}
export default Sidebar;