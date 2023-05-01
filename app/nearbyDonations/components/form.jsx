import { useState } from 'react';

const DonationForm = () => {
    const [donationType, setDonationType] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the form data
        console.log(donationType, location);

        // SAVE DATA IN POCKETBASE
        setDonationType('');
        setLocation('');
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col w-[40rem] h-[15rem] bg-slate-400'>
            <div className='flex h-[4rem]'>
                <label className="font-normal text-lg h-4 mt-6 mr-8" htmlFor="donation-type">Type of Donation Drive:</label>
                <input
                    className="mt-4 input input-bordered w-full max-w-xs"
                    type="text"
                    id="donation-type"
                    value={donationType}
                    onChange={(event) => setDonationType(event.target.value)}
                />
            </div>
            <div className='flex'>
                <label className="font-normal text-lg mt-6 mr-8" htmlFor="location">Location:</label>
                <input
                    className="mt-4 input input-bordered w-full max-w-xs"
                    type="text"
                    id="location"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                />
            </div>
            <button className='mt-10' type="submit">Submit</button>
        </form>
    );
};

export default DonationForm;
