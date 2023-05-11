"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Donate from "../global-components/Donate";
import Image from "next/image";
import nicePic from "../../assets/nicePic.jpg";

export default function Card(props) {
  // let caption = useRef(null);
  const dialog = useRef(null);

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
  };

  const { title, caption, thumbnail, raised, target, id } = props;
  return (
    <div className="group z-0 mx-auto mt-10 w-full max-w-md flex-shrink-0 transform cursor-pointer rounded pb-8 shadow-xl duration-200 hover:-translate-y-2">
      <div
        className="h-64 w-full rounded rounded-b-xl bg-cover bg-center"
        style={resolveImage(thumbnail)}
      >
        <div className="flex h-full w-full items-end rounded rounded-b-xl bg-black bg-opacity-20 p-4  text-sm font-bold text-white">
          <div className="flex w-1/2 items-center">
            <span>#{props.id}</span>
          </div>
        </div>
      </div>
      <div className="mt-8 px-4">
        <p className="mt-2 text-2xl text-gray-700 truncate">{title}</p>
        <h2 className="font-small mt-4 overflow-hidden truncate text-gray-400">
          {caption}
        </h2>
        <div className="mt-4 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-2.5 rounded-full bg-blue-600"
            style={progressbar(raised, target)}
          ></div>
        </div>
        <h2 className="font-small mt-2 text-end text-gray-400">
          {raised} / {target} raised
        </h2>
        <div className="flex flex-col items-center justify-center">
          <Link
            href={`/donation/${props.id}`}
            className="mb-2 mr-2 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
          >
            Donate
          </Link>
        </div>
      </div>
    </div>
  );
}
