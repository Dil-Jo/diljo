import Image from "next/image";
const Drive = ({ title, category, lat, lng, stDate, endDate, map }) => {

    return (
        <>
            <div className="flex border border-solid border-black rounded-xl mb-[1rem] active:bg-blue-900 active:text-white" onClick={() => {
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
                <div className="flex justify-center w-1/6 items-end my-auto">
                    <Image title="Volunteer for this drive" src={"/assets/volunteer.png"} className="mr-4 bg-white rounded-full" width={30} height={30} alt="volunteer-here">
                    </Image>
                    <Image title="Open directions for this drive" alt="go-here" className="mr-8 rounded-full bg-white" width={30} height={30} src={'/assets/arrow.png'}></Image>
                </div>
            </div>
        </>
    );
}
export default Drive;