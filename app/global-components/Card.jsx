"use client";
import Link from "next/link";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";

async function getRaised(id) {
  const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
  let records = await pb.collection("donations").getFullList({
    filter: `fundraiser = "${id}"`
  });
  let total = 0;
  records.forEach((record) => {
    total += record.amount;
  });
  return total;
}

export default function Card(props) {
  const [raised, setRaised] = useState(0);
  
  useEffect(() => {
    async function fetchRaised() {
      const total = await getRaised(props.id);
      setRaised(total);
    }
    
    fetchRaised();
  }, [props.id]);
  
  let progressbar = (raised, goal) => {
    return { width: `${(raised / goal) * 100}%` };
  };
  let resolveImage = (url) => {
    return { backgroundImage: `url("${url}")` };
  };
  
  return (
    <div
      className="group z-0 mx-auto mt-10 w-full max-w-md flex-shrink-0 transform cursor-pointer rounded pb-8 shadow-xl duration-200 hover:-translate-y-2">
      <div
        className="h-64 w-full rounded rounded-b-xl bg-cover bg-center"
        style={resolveImage(props.thumbnail)}
      >
        <div
          className="flex h-full w-full items-end rounded rounded-b-xl bg-black bg-opacity-20 p-4  text-sm font-bold text-white">
          <div className="flex w-1/2 items-center">
            <span>#{props.id}</span>
          </div>
        </div>
      </div>
      <div className="mt-8 px-4">
        <p className="mt-2 text-2xl text-gray-700 truncate">{props.title}</p>
        <h2 className="font-small mt-4 overflow-hidden truncate text-gray-400">
          {props.caption}
        </h2>
        <div className="mt-4 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-2.5 rounded-full bg-blue-600"
            style={progressbar(raised, props.target)}
          ></div>
        </div>
        <h2 className="font-small mt-2 text-end text-gray-400">
          {raised} / {props.target} raised
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
