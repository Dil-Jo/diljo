"use client"
import { useState } from "react";

const Comp1 = () => {
  const [reason1, setReason] = useState("");
  const [identity1, setIdentity] = useState("anonymous");
  const [title1, setTitle] = useState("");
  const [formcp1, setForm] = useState({
    reason: "",
    identity: "",
    title: "",
  });
  function onSubmit(e) {
    setForm({ ...formcp1, reason: reason1, identity: identity1, title: title1 });
  }
  return (
    <>
      <div className="flex">
        <div className="flex flex-col mt-24 ml-24 h-5/6">
          <div className="flex">
            <label htmlFor="reason" className=" font-normal text-lg mr-6 mt-2">Select a reason for collecting funds:</label>
            <select id="reason" name="reason" className="h-11 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <option value="emergency" onClick={() => setReason("emergency")}>Emergency</option>
              <option value="education" onClick={() => setReason("education")}>Education</option>
              <option value="environment" onClick={() => setReason("environment")}>Healthcare</option>
            </select>
          </div>
          <div className="flex mt-11">
            <h1 className="font-normal text-lg mt-1 ">Identity of donee:</h1>
            <div className="flex ml-6">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text mr-4">Anonymous</span>
                  <input type="radio" name="radio-10" onChange={() => setIdentity("anonymous")} className="radio checked:bg-red-700" checked />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text mx-4">Visible</span>
                  <input type="radio" name="radio-10" onChange={() => setIdentity("visible")} className="radio checked:bg-blue-700" />
                </label>
              </div>
            </div>
          </div>
          <div className="mt-11 flex flex-col">
            <h1 className="font-normal text-lg">Title for the Fundraiser:</h1>
            <input type="text" placeholder="Title goes here" className="mt-4 input input-bordered w-full max-w-xs" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="mt-11 flex flex-col">
            <h1 className="font-normal text-lg">Description for the Fundraiser:</h1>
            <textarea style={{ resize: "none", width: "30vw", height: "30vh" }} placeholder="Description goes here" className="mt-4 input input-bordered w-full max-w-xl h-xl"></textarea>
          </div>
        </div>
        <div className="flex flex-col w-[40rem] h-[48rem] ml-20 mt-10 bg-slate-400">
          <div className="bg-white w-3/6 h-2/4 mt-14 ml-24">

          </div>

        </div>
      </div>

    </>
  );
}
export default Comp1;