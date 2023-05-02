const DonationDrive = (props) => {
    return (

        <div className="donation-drive">
            <div className="donation-drive-header">
                <h3 className="font-normal text-lg h-4 mt-6 mr-8">
                    {props.donationType}
                </h3>
            </div>
            <div className="donation-drive-location">
                <h3 className="font-normal text-lg h-4 mt-6 mr-8">
                    {props.location}
                </h3>
            </div>
        </div>

    )

}
export default DonationDrive;