import { useState, useId } from 'react';
import Button from '../../global-components/Button';
import Image from 'next/image';
import arrow from '../../../assets/arrow.png';
const Form1 = ({ next, updateForm, prev, fullForm }) => {
    const [form, setForm] = useState({
        reason: fullForm.reason,
        'radio-10': fullForm['radio-10'],
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form['radio-10'] === '' || form.reason === '')
            return alert('Please fill all the fields');
        updateForm(form);
        next();
    };
    return (
        <form className='flex flex-col mx-4' onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                <label
                    htmlFor='reason'
                    className='tracking-tighter font-black text-2xl text-gray-500 mr-6 mb-5'
                >
                    SELECT REASON FOR FUNDRAISING:
                </label>
                <select
                    id='reason'
                    name='reason'
                    onChange={handleChange}
                    className='py-3 px-4 pr-9 block w-full bg-gray-100 rounded-md text-lg sm:p-5'
                >
                    <option value='Emergencies'>Emergencies</option>
                    <option value='Education'>Education</option>
                    <option value='Medical'>Medical</option>
                    <option value='Enviornment'>Environment</option>
                    <option value='Utility Bills'>Utility Bills</option>
                </select>
            </div>
            <div className='flex mt-11 flex-col'>
                <h1 className='tracking-tighter font-black text-2xl text-gray-500 mr-6 mt-2 mb-5'>
                    POST AS:
                </h1>
                <ul className='grid w-full gap-6 md:grid-cols-2 mb-6'>
                    <li>
                        <input
                            type='radio'
                            id='visible'
                            name='radio-10'
                            value='visible'
                            className='hidden peer'
                            onChange={handleChange}
                        />
                        <label
                            htmlFor='visible'
                            className='inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 '
                        >
                            <div className='block'>
                                <div className='w-full text-lg font-semibold'>
                                    Visible
                                </div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <input
                            type='radio'
                            id='anonymous'
                            name='radio-10'
                            value='anonymous'
                            className='hidden peer'
                            onChange={handleChange}
                        />
                        <label
                            htmlFor='anonymous'
                            className='inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-red-600 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100 '
                        >
                            <div className='block'>
                                <div className='w-full text-lg font-semibold'>
                                    Anonymous
                                </div>
                            </div>
                        </label>
                    </li>
                </ul>
            </div>
            <div className='flex justify-center gap-20 py-8'>
                {/* <div>
                    <button onClick={prev()} className="btn btn-square btn-info w-20 h-10">
                        <Image src={arrow} alt="Previous" className="rotate-180 w-8 h-auto" />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> */}
                {/* </button> */}
                {/* </div> */}
                <div>
                    <button
                        type='submit'
                        className='btn btn-square  btn-lg btn-success'
                    >
                        <Image src={arrow} alt='Next' className='w-8 h-auto ' />
                    </button>
                </div>
            </div>
        </form>
    );
};
export default Form1;
