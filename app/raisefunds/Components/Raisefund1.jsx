"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "../../global-components/Button";
import upload from "../../../assets/upload.png";
import arrow from "../../../assets/arrow.png";


const Comp1 = ({ next, updateForm, prev, fullForm }) => {
    const [form, setForm] = useState({
        title: fullForm.title,
        description: fullForm.description,
        image: fullForm.image,
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
                            value={form.title}
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
                            type="text"
                            value={form.description}
                            placeholder="Description goes here"
                            className="mt-5 pr-10 pb-10 pt-2 input input-bordered h-full w-full resize-none border-gray-200 rounded-md text-lg sm:p-5 my-auto"
                            name="description"
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                </div>
                <div className="md:w-2/4 w-full my-5">
                    <div className="flex flex-col h-full w-full ">
                        <div
                            id="imgbg"
                            className="md:bg-slate-100 h-full rounded-md md:mx-6 md:p-3"
                        >
                            <h1
                                className={
                                    "tracking-tighter font-black text-2xl text-gray-500 my-auto mb-5 md:hidden"
                                }
                            >
                                UPLOAD IMAGE:
                            </h1>
                            <input
                                value={form.image}
                                type="file"
                                accept="image/*"
                                className="inputfile md:hidden w-full h-full"
                                id="embedpollfileinput"
                                onChange={(e) => onimg(e)}
                            />
                            <label
                                htmlFor="embedpollfileinput"
                                className="flex flex-col items-center justify-center h-full cursor-pointer md:block hidden"
                            >
                                <Image
                                    src={upload}
                                    alt="Upload sign"
                                    className="h-16 w-16 hover:-translate-y-2 duration-200 relative hidden mx-auto md:block"
                                />
                            </label>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center gap-20 py-8">
                    <div>
                        <button onClick={prev} className="btn btn-square btn-info w-20 h-10">
                            <Image src={arrow} alt="Previous" className="rotate-180 w-8 h-auto" />a
                        </button>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-square btn-success w-20 h-10">
                            <Image src={arrow} alt="Next" className="w-8 h-auto " />b
                        </button>
                    </div>
                </div>
            </form >
        </div >
    );
};
export default Comp1;
