const Drive = ({ title, category, lat, lng, stDate, endDate }) => {
    return (
        <>
            <div>
                <div className="flex w-30">
                    <h3 className="text-[1.3rem] font-normal ml-4 mt-4">{title}</h3>
                    <div className="flex flex-row ml-4 mt-4">
                        <h3 className="text-[1.5rem] font-normal">Category: {category}</h3>
                        <h3 className="text-[1.5rem] font-normal ml-4">Start Date: {stDate}</h3>
                        <h3 className="text-[1.5rem] font-normal ml-4">End Date: {endDate}</h3>
                    </div>
                </div>
                <div className="flex flex-row">
                    <h3 className="text-[1.5rem] font-normal ml-4 mt-4">Latitude: {lat}</h3>
                    <h3 className="text-[1.5rem] font-normal ml-4 mt-4">Longitude: {lng}</h3>
                </div>
            </div>
        </>
    );
}
export default Drive;