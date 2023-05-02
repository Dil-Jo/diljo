"use client";
import Image from "next/image";
import { useState } from "react";
import upload from "../../../assets/upload.png";

const Comp1 = ({ next, updateForm }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
  });

  function onimg(e) {
    const bg = document.getElementById("imgbg");
    bg.style.backgroundSize = "cover";
    bg.style.backgroundImage = `url(${URL.createObjectURL(e.target.files[0])})`;
    console.log({ wee: e.target });
    setForm({ ...form, image: e.target.files[0] });
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title === "" || form.description === "")
      return alert("Please fill all the fields");
    updateForm(form);
    next();
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="flex">
        <div className="flex flex-col mt-24 ml-24">
          <div className="mt-11 flex flex-col">
            <h1 className="font-normal text-lg">Title for the Fundraiser:</h1>
            <input
              type="text"
              placeholder="Title goes here"
              name="title"
              className="mt-4 input input-bordered w-full max-w-xs"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-11 flex flex-col">
            <h1 className="font-normal text-lg">
              Description for the Fundraiser:
            </h1>
            <textarea
              style={{ resize: "none", width: "30vw", height: "30vh" }}
              placeholder="Description goes here"
              className="mt-4 input input-bordered w-full max-w-xl h-xl"
              name="description"
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col w-[40rem] h-[48rem] ml-20 mt-10">
          <div
            id="imgbg"
            className="bg-white w-3/6 h-2/4 mt-14 ml-24 rounded-md"
          >
            <input
              type="file"
              style={{ display: "none" }}
              accept="image/*"
              className="inputfile "
              id="embedpollfileinput"
              onChange={(e) => onimg(e)}
            />
            <label
              htmlFor="embedpollfileinput"
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <Image
                style={{ position: "relative", top: "18rem" }}
                src={upload}
                alt="Upload sign"
                className="h-16 w-16 hover:-translate-y-2 duration-200"
              />
            </label>
          </div>
          <div className="ml-24">
            <h1 className="flex font-normal text-lg mt-4 ml-20 w-[10rem]">
              Upload a picture
            </h1>
          </div>
        </div>
      </div>
      <div className="flex pl-8 justify-end w-full">
        <button
          type="submit"
          className="w-[8rem] h-[3rem] rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2.5 text-center text-lg font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
        >
          Next
        </button>
      </div>
    </form>
  );
};
export default Comp1;
