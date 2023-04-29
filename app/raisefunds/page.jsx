"use client"
import { useState } from "react";
const RaiseFunds = () => {
  const [reason1,setReason] = useState("");
  const [form,setForm] = useState({
    reason:""
  });
  function onSubmit(){
    setForm({...form.reason=reason1});
  }
  return (
    <>
      <div className="h-screen w-screen mt-8 flex bg-slate-400 rounded-l-3xl">
        <div className="w-2/6 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-medium tracking-tight text-slate-700 sm:text-4xl mb-8 tracking-tighter">Let's lend a hand to someone,</h2>
        <h2 className="text-3xl font-semi-bold tracking-tight text-blue-900 sm:text-5xl tracking-tighter">who really needs it.</h2>
        </div>
        <div className="w-4/6 bg-slate-300 rounded-l-3xl shadow-xl">
        <div className="flex flex-col mt-24 ml-24 h-5/6">
        <div className="flex">
  <label htmlFor="reason" className=" font-normal text-lg mr-6 mt-2">Select a reason for collecting funds:</label>
  <select id="reason" name="reason" className="h-11 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <option value="emergency" onClick={()=>setReason("emergency")}>Emergency</option>
    <option value="education" onClick={()=>setReason("education")}>Education</option>
    <option value="environment" onClick={()=>setReason("environment")}>Healthcare</option>
  </select>
</div>
<div className="flex mt-11">
<h1 className="font-normal text-lg mt-1 ">Identity of donee:</h1>
<div className="flex ml-6">
<div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text mr-4">Anonymous</span> 
    <input type="radio" name="radio-10" className="radio checked:bg-red-700" checked />
  </label>
</div>
<div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text mr-4">Visible</span> 
    <input type="radio" name="radio-10" className="radio checked:bg-blue-700" checked />
  </label>
</div>
</div>
</div>
</div>

        </div>
      </div>
    </>
  );
};
export default RaiseFunds;
