"use client";
import Image from "next/image";
// import PocketBase from "pocketbase";
// import { useContext, useEffect } from "react";

export default function ProfileComponent(props) {
  // let pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
  // const record = JSON.parse(localStorage.getItem("Login")).record;
  // const globalContext = useContext(GlobalContext);
  // const { pb } = globalContext;
  const { pb } = props;
  const record = pb.authStore.model;
  const image = record.avatar;
  return (
    <div className="group mx-auto grid w-full max-w-md place-items-center rounded-xl p-10 pb-8 shadow-lg">
      <Image
        className="mb-9 mt-4 h-36 w-36 rounded-full border-4 border-green-400 "
        alt={""}
        width={144}
        height={144}
        style={{ objectFit: "cover" }}
        src={pb.files.getUrl(record, image)}
      ></Image>
      <h5 className="mb-1 text-xl font-medium tracking-tighter text-gray-900">
        {record.name}
      </h5>
      <span className="text-sm text-gray-500">
        @{record.username}
      </span>
    </div>
  );
}
