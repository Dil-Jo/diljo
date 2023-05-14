import { useState, useId } from 'react';
import Image from 'next/image';
import Next from '../../../assets/next.png'
const Form1 = ({ next, updateForm, prev, fullForm }) => {
    const [error, setError] = useState('');
    const [form, setForm] = useState({
        reason: fullForm.reason,
        'radio-10': fullForm['radio-10'],
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form['radio-10'] === '' || form.reason === '') {
            setError('Please fill all the fields');
            console.log(form.reason);
            console.log(form['radio-10'])
        }
        console.log(form.reason);
        console.log(form['radio-10'])
        updateForm(form);
        next();
    };
    return (
        <form className='flex flex-col mx-24' onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                <label
                    htmlFor='reason'
                    className='tracking-tighter font-black text-xl md:text-2xl text-slate-800 mr-6 mb-5'
                >
                    SELECT REASON FOR FUNDRAISING:
                </label>
                <select
                    required
                    id='reason'
                    name='reason'
                    onChange={handleChange}
                    className='py-3 px-4 pr-9 block w-full border-2 border-slate-300 bg-white rounded-md text-xl sm:p-5'
                >
                    <option value='Emergencies'>Emergencies</option>
                    <option value='Education'>Education</option>
                    <option value='Medical'>Medical</option>
                    <option value='Environment'>Environment</option>
                    <option value='Utility Bills'>Utility Bills</option>
                </select>
            </div>
            <div className='flex mt-11 flex-col'>
                <h1 className='tracking-tighter font-black text-xl md:text-2xl  text-slate-800 mr-6 mt-2 mb-5'>
                    POST AS:
                </h1>
                <ul className='grid w-full gap-6 md:grid-cols-2 mb-6'>
                    <li>
                        <input
                            required
                            type='radio'
                            id='visible'
                            name='radio-10'
                            value='visible'
                            className='hidden peer'
                            onChange={handleChange}
                        />
                        <label
                            htmlFor='visible'
                            className='inline-flex items-center border-2 border-slate-300 justify-between w-full p-5 text-slate-800 bg-white rounded-lg cursor-pointer peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 '
                        >
                            <div className='block'>
                                <div className='w-full text-lg font-normal '>
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
                            required
                        />
                        <label
                            htmlFor='anonymous'
                            className='inline-flex items-center border-2 border-slate-300 justify-between w-full p-5 text-slate-800 bg-white rounded-lg cursor-pointer peer-checked:border-red-600 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100 '
                        >
                            <div className='block'>
                                <div className='w-full text-lg font-normal'>
                                    Anonymous
                                </div>
                            </div>
                        </label>
                    </li>
                </ul>
            </div>
            <div className='flex justify-end gap-20 py-8'>
                {/* <div>
                    <button onClick={prev()} className="btn btn-square btn-info w-20 h-10">
                        <Image src={arrow} alt="Previous" className="rotate-180 w-8 h-auto" />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> */}
                {/* </button> */}
                {/* </div> */}
                <h1 className={'mb-2 text-red-800'}>{error}</h1>
                <button
                    type='submit'
                    className='mt-16 flex border-2 border-slate-600 rounded-lg w-18 justify-center hover:border-eleven hover:bg-slate-200 duration-300 active:translate-y-1'
                >
                    <Image className='w-16 h-16' src={Next} alt='next' />
                </button>
            </div>
        </form>
    );
};
export default Form1;
