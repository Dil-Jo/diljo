"use client";
import { useEffect, useRef } from "react";
import Donate from "../global-components/Donate";
import Image from "next/image";
import nicePic from "../../assets/nicePic.jpg";




export default function Card(props) {
  let caption = useRef(null);
  const dialog = useRef(null);

  useEffect(() => {
    console.log("hello");
    caption.current.innerHTML =
      props.caption.length > 100
        ? props.caption.substring(0, 100) + "..."
        : props.caption;
  }, []);

  let progressbar = (raised, goal) => {
    return { width: `${(raised / goal) * 100}%` };
  };
  let resolveImage = (url) => {
    return { backgroundImage: `url("${url}")` };
  };
  const handleClick = () => {
    if (dialog.current) {
      dialog.current.showModal();
    }
  }


  return (
    <div className="group z-0 mx-auto mt-10 w-full max-w-md flex-shrink-0 transform cursor-pointer rounded pb-8 shadow-xl duration-200 hover:-translate-y-2">
      <dialog ref={dialog}>
        <Donate data={props} />
      </dialog>
      <div
        className="content h-64 w-full rounded rounded-b-xl bg-cover bg-center"
      //style={resolveImage(props.image)}
      >
        <div>
          <Image
            placeholder={<>Loading prgram</>}
            src={props.image}
            // src={nicePic}
            className="h-full w-full rounded-t-lg object-cover"
            alt="Donation Img"
            // width={500}
            fill />
        </div>
        <div className="flex h-full w-full items-end rounded rounded-b-xl bg-black bg-opacity-20 p-4  text-sm font-bold text-white">
          <div className="flex w-1/2 items-center">
            <span>#{props.id}</span>
          </div>
        </div>
      </div>
      <div className="mt-8 px-4">
        <p className="mt-2 text-2xl text-gray-700">{props.title}</p>
        <h2
          className="font-small mt-4 overflow-hidden text-ellipsis text-gray-400"
          ref={caption}
        ></h2>
        <div className="mt-4 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-2.5 rounded-full bg-blue-600"
            style={progressbar(props.raised, props.target)}
          ></div>
        </div>
        <h2 className="font-small mt-2 text-end text-gray-400">
          {props.raised} / {props.target} raised
        </h2>
        <div className="flex flex-col items-center justify-center">
          <button
            type="button"
            // href={props.link}
            // target="_blank"
            onClick={handleClick}
            className="mb-2 mr-2 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}
