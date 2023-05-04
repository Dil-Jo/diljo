"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "../../global-components/Button";
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
    <div className={"flex flex-row w-full items-center h-full"}>
      <form
        className="flex w-full md:flex-row flex-col mx-4"
        onSubmit={handleSubmit}
      >
        <div className={"w-full flex flex-col"}>
          <div className="flex md:flex-row flex-col">
            <h1 className="tracking-tighter font-black text-2xl text-gray-500 mr-6 md:my-auto my-2">
              TITLE:
            </h1>
            <input
              type="text"
              placeholder="Title goes here"
              name="title"
              className=" input input-bordered w-full max-w-xs pb-3 px-4 pr-9 md:mt-0 mt-5 border-gray-200 rounded-md text-lg sm:p-5 my-auto"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-11 flex flex-col">
            <h1 className="tracking-tighter font-black text-2xl text-gray-500 mr-6 my-auto">
              DESCRIPTION:
            </h1>
            <textarea
              placeholder="Description goes here"
              className="mt-5 pr-10 pb-10 pt-2 input input-bordered h-full w-full resize-none border-gray-200 rounded-md text-lg sm:p-5 my-auto"
              name="description"
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <div className={"md:w-2/4 w-full my-5"}>
          <div className={"flex flex-col h-full w-full "}>
            <div
              id="imgbg"
              className="md:bg-slate-100 h-full rounded-md md:mx-6 md:p-3"
            >
              <h1
                className={
                  "tracking-tighter font-black text-2xl text-gray-500 my-auto md:hidden"
                }
              >
                UPLOAD IMAGE:
              </h1>
              <input
                type="file"
                accept="image/*"
                className="inputfile md:hidden w-full h-full"
                id="embedpollfileinput"
                onChange={(e) => onimg(e)}
              />
              <label
                htmlFor="embedpollfileinput"
                className="flex flex-col items-center justify-end h-full cursor-pointer md:block hidden"
              >
                <Image
                  src={upload}
                  alt="Upload sign"
                  className="h-16 w-16 hover:-translate-y-2 duration-200 relative hidden md:block"
                />
              </label>
            </div>
            <div className="flex w-full h-full flex-col justify-end items-end">
              <div className={""}>
                <Button type={"primary"} text={"Next"}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Comp1;
