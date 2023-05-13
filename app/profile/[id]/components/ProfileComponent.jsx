"use client";
import Image from "next/image";
import edit from "../../../../assets/edit.png";
import { useState, useEffect } from "react";
// import PocketBase from "pocketbase";
// import { useContext, useEffect } from "react";

export default function ProfileComponent(props) {
  // let pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
  // const record = JSON.parse(localStorage.getItem("Login")).record;
  // const globalContext = useContext(GlobalContext);
  // const { pb } = globalContext;
  const { pb } = props;
  const record = pb.authStore.model || {};
  const image = record.avatar;
  const [pic, setPic] = useState();

  const onImg = (e) => {
    const file = e.target.files[0];
    setPic(file);
    const bg = document.getElementById('photo');
    bg.style.backgroundSize = 'cover';
    bg.style.backgroundImage = `url(${URL.createObjectURL(
      e.target.files[0]
    )})`;
    pb.collection("users").update(record.id, { avatar: file });
  }



  return (
    <div className="group mx-auto grid w-full max-w-md place-items-center rounded-xl p-10 pb-8 shadow-lg bg-white">
      <div className="relative user-img mb-9 mt-4 h-36 w-36 rounded-full">
        <div id="photo"
          className=" h-36 w-36 rounded-full border-4 border-green-400 "
          alt={""}
          width={144}
          height={144}
          style={{ objectFit: "cover" }}
        ></div>
        <input accept="/image/*" className="hidden" id="file" type="file" onChange={(e) => onImg(e)}
        ></input>
        <label className="absolute top-[7rem] left-[6rem] border-[1.5px] border-black bg-five rounded-full w-9 h-9" htmlFor="file" id="uploadBtn"><Image className="ml-1.5 mt-1.5 w-6 h-6 cursor-pointer" src={edit}></Image></label>
      </div>
      <h5 className="mb-1 text-xl font-medium tracking-tighter text-gray-900">
        {record.name}
      </h5>
      <span className="text-sm text-gray-500">
        @{record.username}
      </span>

    </div>
  );
}
