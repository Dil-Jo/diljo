"use client"
import Image from 'next/image';
import { useState } from "react";
import upload from "../../../assets/upload.png";
import defpic from "../../../assets/default.jpeg";

const Comp1 = () => {
  const [reason1, setReason] = useState("");
  const [identity1, setIdentity] = useState("anonymous");
  const [title1, setTitle] = useState("");
  const [description1, setDescription] = useState("");
  const [image1, setImage] = useState(defpic);
  const [formcp1, setForm] = useState({
    reason: "",
    identity: "",
    title: "",
    description: "",
    image: "",
  });
  function onNext(e) {
    setForm({ ...formcp1, reason: reason1, identity: identity1, title: title1, description: description1, image: image1 });
  }
  function onimg(e) {
    const bg = document.getElementById('imgbg');
    // resize the background image
    bg.style.backgroundSize = "cover";
    // change the background image
    bg.style.backgroundImage = `url(${URL.createObjectURL(e.target.files[0])})`;
    setImage(e.target.files[0]);

  }
  return (
    <>
      <div className="h-screen w-screen mt-8 flex bg-slate-400 rounded-l-3xl">
        <div className="w-2/6 flex flex-col justify-center items-center">
          <h2 id="head1" className="text-3xl font-medium text-slate-700 sm:text-4xl mb-8 tracking-tighter">Let's lend a hand to someone,</h2>
          <h2 className="text-3xl font-semi-bold text-blue-900 sm:text-5xl tracking-tighter">who really needs it.</h2>
        </div>
        <div className="w-4/6 bg-slate-300 rounded-l-3xl shadow-xl">
          <div className='flex flex-col'>
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
                  <textarea style={{ resize: "none", width: "30vw", height: "30vh" }} placeholder="Description goes here" className="mt-4 input input-bordered w-full max-w-xl h-xl" onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
              </div>
              <div className="flex flex-col w-[40rem] h-[48rem] ml-20 mt-10">
                <div id='imgbg' className="bg-white w-3/6 h-2/4 mt-14 ml-24 rounded-md">
                  <input type="file" style={{ display: "none" }} accept="image/*" className="inputfile " id="embedpollfileinput" onChange={(e) => onimg(e)} />
                  <label htmlFor="embedpollfileinput" className="flex flex-col items-center justify-center cursor-pointer">
                    <Image style={{ position: "relative", top: "18rem" }} src={upload} alt='Upload sign' className='h-16 w-16 hover:-translate-y-2 duration-200' />
                  </label>

                </div>
                <div className='ml-24'>
                  <h1 className="flex font-normal text-lg mt-4 ml-20 w-[10rem]">Upload a picture</h1>
                </div>
              </div>
            </div>
            <div className='w-[8rem] ml-[60rem]'>
              <button
                type='button' onClick={(e) => onNext(e)}
                className='w-[8rem] h-[3rem] rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2.5 text-center text-lg font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800'
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Comp1;