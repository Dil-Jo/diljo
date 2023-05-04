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
    <div className={"md:h-screen h-full w-full flex items-center"}>
      <div className={"w-full"}>
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-row">
              <div className="flex flex-col mx-24">
                <div className=" flex flex-row">
                  <h1 className="tracking-tighter font-black text-2xl text-gray-500 mr-6 my-auto">
                    TITLE:
                  </h1>
                  <input
                    type="text"
                    placeholder="Title goes here"
                    name="title"
                    className=" input input-bordered w-full max-w-xs pb-3 px-4 pr-9 border-gray-200 rounded-md text-lg sm:p-5 my-auto"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mt-11 flex flex-col">
                  <h1 className="tracking-tighter font-black text-2xl text-gray-500 mr-6 my-auto">
                    DESCRIPTION:
                  </h1>
                  <textarea
                    style={{ width: "30vw", height: "30vh" }}
                    placeholder="Description goes here"
                    className="mt-5 p-2 input input-bordered w-full max-w-xl h-xl resize-none border-gray-200 rounded-md text-lg sm:p-5 my-auto"
                    name="description"
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-col">
                <div id="imgbg" className="bg-white w-44 h-full rounded-md">
                  <input
                    type="file"
                    accept="image/*"
                    className="inputfile hidden"
                    id="embedpollfileinput"
                    onChange={(e) => onimg(e)}
                  />
                  <label
                    htmlFor="embedpollfileinput"
                    className="flex flex-col items-center justify-end w-full h-full cursor-pointer"
                  >
                    <Image
                      src={upload}
                      alt="Upload sign"
                      className="h-16 w-16 hover:-translate-y-2 duration-200 relative"
                    />
                  </label>
                </div>
              </div>
              <div className={"flex w-full justify-center items-end"}>
                <div className="mx-5">
                  <Button type={"primary"} text={"Next"}>
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Comp1;
