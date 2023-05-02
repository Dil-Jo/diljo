import { useState, useEffect } from "react";

const Form1 = ({ next, updateForm }) => {
    const [form, setForm] = useState({ reason: "Emergency", 'radio-10': "" });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (form['radio-10'] == "" || form.reason == "") return alert("Please fill all the fields")
        updateForm(form);
        next();
    }
    return (
        <form className="flex flex-col mt-24 ml-24" onSubmit={handleSubmit}>
            <div className="flex">
                <label htmlFor="reason" className=" font-normal text-lg mr-6 mt-2">Select a reason for collecting funds:</label>
                <select id="reason" name="reason" onChange={handleChange} className="h-11 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <option value="Emergencies"  >Emergencies</option>
                    <option value="Education"  >Education</option>
                    <option value="Medical">Medical</option>
                    <option value="Enviornment">Enviornment</option>
                    <option value="Utility Bills">Utility Bills</option>
                </select>
            </div>
            <div className="flex mt-11">
                <h1 className="font-normal text-lg mt-1 ">Identity of donee:</h1>
                <div className="flex ml-6">
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text mr-4">Anonymous</span>
                            <input type="radio" name="radio-10" value='anonymous' checked={form['radio-10'] === 'anonymous'} className="radio checked:bg-red-700" onChange={handleChange} />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text mr-4">Visible</span>
                            <input type="radio" name="radio-10" value='visible' checked={form['radio-10'] === 'visible'} className="radio checked:bg-blue-700" onChange={handleChange} />
                        </label>
                    </div>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
export default Form1;