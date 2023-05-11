"use client";
import React, { useEffect, useState } from "react";
import PocketBase from "pocketbase";
import { useParams } from "next/navigation";

async function getRaised(id) {


}

async function getData(id) {
  const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
  let records = await pb.collection("donations").getFullList({
    filter: `fundraiser = "${id}"`
  });
  let total = 0;
  records.forEach((record) => {
    total += record.amount;
  });
  records = await pb.collection("fundraisers").getOne(id, {});
  if (records.visibility === true) {
    let temp = await pb.collection("users").getOne(records.owner, {});
    records.owner
      = temp.username;
  } else {
    records.owner = "Anonymous";
  }
  records.raised = total;
  return records;
}

export default function() {
  const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
  const { id } = useParams();
  const [record, setRecord] = useState({});
  useEffect(() => {
    getData(id).then((res) => {
      setRecord(res);
      console.log(res);
    });
  }, [id]);
  
  return (
    <div className="flex flex-row xl:px-96 md:px-52 px-10 h-full w-full">
      <div className="flex flex-col w-full border-2 border-gray-300 p-6 rounded-2xl">
        <h1 className="text-4xl tracking-tighter my-5 font-bold">{record.title}</h1>
        <div className="rounded-2xl border-2 border-gray-300 shadow-xl mb-6">
          <img
            className="object-contain rounded-2xl w-full"
            src={pb.getFileUrl(record, record.thumbnail)}
            alt="Image"
          />
        </div>
        
        <hr className={"my-2"}></hr>
        <h1 className={"font-black text-black text-xl"}>Fundraiser by {" "}<span
          className={"text-gray-500"}>@{record.owner}</span></h1>
        <hr className={"my-2"}></hr>
        <h2 className="text-sm mt-2 text-start w-full text-gray-400">
          <span className={"text-xl font-black text-black"}>{record.raised} </span>/ {record.target} raised
        </h2>
        <progress
          className="progress progress-error w-full mt-2 mb-5"
          value={record.raised}
          max={record.target}
        ></progress>
        
        <div className={"flex flex-row justify-start"}>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded text-center mr-3 px-6 py-2"
          >
            Share
          </button>
          <a
            href={record.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-700 text-white font-bold rounded px-6 py-3 text-center"
          >
            Donate
          </a>
        </div>
        <hr className={"my-2"}></hr>
        <h1 className="font-sans text-lg">{record.caption}</h1>
      </div>
    </div>
  );
  
}

// <div className="w-1/4">
//   <div className="flex flex-col w-full h-auto relative items-center justify-center p-3 cursor-default">
//

//   </div>