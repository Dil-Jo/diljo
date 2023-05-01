"use client"
import { useState } from "react";
const Comp2 = ({ next, updateForm }) => {
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [amount, setAmount] = useState("");
  const [acname, setAcname] = useState("");
  const [acnum, setAcnum] = useState("");
  const [formcp2, setForm] = useState({
    name: "",
    cnic: "",
    amount: "",
    acname: "",
    acnum: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // setForm({ ...formcp2, name: name, cnic: cnic, amount: amount, acname: acname, acnum: acnum });
    updateForm({ ...formcp2, name: name, cnic: cnic, amount: amount, acname: acname, acnum: acnum });
    next();
  }

  // function onChange(e) {
  //   setForm({ ...formcp2, name: name, cnic: cnic, amount: amount, acname: acname, acnum: acnum });
  // }
  return (
    <form className="h-full w-full flex flex-col" onSubmit={handleSubmit}>
      <div className="flex mt-24 ml-24 h-4/6">
        <div className="w-3/6">
          <div>
            <h1 className="font-normal text-lg mt-1 ">Details about the donee:</h1>
            <div className="flex flex-col ml-8 mt-4">
              <div className="flex mt-2">
                <h1 className="font-normal text-lg mt-1 ">Name:</h1>
                <input type="text" placeholder="Enter the name of the donee" onChange={(e) => setName(e.target.value)} className="input input-bordered ml-4 w-96" required />
              </div>
              <div className="flex mt-6">
                <h1 className="font-normal text-lg mt-1">CNIC:</h1>
                <input type="text" pattern="^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$" placeholder="e.g 35202-3156628-9" onChange={(e) => setCnic(e.target.value)} className="input input-bordered ml-6 w-96" required />
              </div>
            </div>
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text font-normal text-lg">Enter the target amount:</span>
            </label>
            <label className="input-group w-86 mt-4">
              <span>PKR</span>
              <input type="text" placeholder="e.g 1000" onChange={(e) => setAmount(e.target.value)} className="input input-bordered" required />
            </label>
          </div>
          <div className="h-2/6 w-5/6  mt-8 rounded-md">
            <div>
              <h1 className="font-normal text-lg mt-2 ">Banking Details:</h1>
              <div className="flex flex-col ml-8 mt-4">
                <div className="flex mt-2">
                  <h1 className="font-normal text-lg mt-1 ">Account name:</h1>
                  <input type="text" placeholder="Enter the name of recipient account" onChange={(e) => setAcname(e.target.value)} className="input input-bordered ml-4 w-96" required />
                </div>
                <div className="flex mt-6 ml-16">
                  <h1 className="font-normal text-lg mt-1">IBAN:</h1>
                  <input type="text" pattern="^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$" placeholder="e.g PK36SCBL0000001123456702" onChange={(e) => setAcnum(e.target.value)} className="input input-bordered ml-6 w-96" required />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/6">
          <div className="form-control mt-4 w-5/6 h-4/6 border border-10 border-black border-dashed flex justify-center items-center">
            <h1 className="font-normal text-4xl">
              Logo goes here!
            </h1>
          </div>
        </div>
      </div>
      <div className='w-[8rem] ml-[60rem] mt-14'>
        <button
          type='submit'
          className='w-[8rem] h-[3rem] rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2.5 text-center text-lg font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800'
        >
          Submit
        </button>
      </div>
    </form>
  )

}
export default Comp2;