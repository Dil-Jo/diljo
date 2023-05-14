"use client";
import Link from "next/link";
import PocketBase from "pocketbase";
import React, { useEffect, useState } from "react";

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
      className={"border-2 border-slate-100 group z-0 mx-auto mt-2 w-full max-w-md flex-shrink-0 transform bg-gradient-to-r from-slate-50 to-zinc-100 rounded-3xl pb-8 shadow-lg duration-200 hover:-translate-y-2"}>
      <div
        className="h-64 w-full rounded-3xl rounded-b-none bg-cover bg-center"
        style={resolveImage(props.thumbnail)}
      >
        <div
          className="flex h-full w-full items-end rounded-3xl rounded-b-none bg-black bg-opacity-20 p-4  text-sm font-bold text-white">
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
        {/*<div className="mt-4 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">*/}
        {/*  <div*/}
        {/*    className="h-2.5 rounded-full bg-blue-600"*/}
        {/*    style={progressbar(raised, props.target)}*/}
        {/*  ></div>*/}
        {/*</div>*/}
        <progress
          className="progress progress-error w-full my-1 mt-3"
          value={raised}
          max={props.target}
        ></progress>
        <h2 className="font-small mt-1 text-end text-gray-400">
          Rs{" "}{raised} / {props.target} raised
        </h2>
        <div className="flex flex-col items-center justify-center w-full mt-5">
          <Link
            href={`/donation/${props.id}`}
            className={"bg-two px-6 py-2 rounded-md text-white border-2 border-two font-bold text-sm transition-all duration-200 hover:bg-opacity-10 hover:text-two"}
          >
            Donate
          </Link>
        </div>
      </div>
    </div>
  );
}
