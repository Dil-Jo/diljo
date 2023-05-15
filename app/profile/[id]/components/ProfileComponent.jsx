"use client";
import Image from "next/image";
import edit from "../../../../assets/edit.png";
import { useState, useEffect, useRef, useContext } from "react";
import defaultP from "../../../../assets/default.jpeg";
import Toast from "../../../nearbyDonations/components/Toast";

export default function ProfileComponent(props) { //
  const picture = useRef(null);
  const { pb } = props;
  const record = pb.authStore.model || {};
  const image = record.avatar;
  const [toast, setToast] = useState({
    show: false,
    text: "",
    color: null
  })
  useEffect(() => {
    if (image !== "") {
      const pic = pb.files.getUrl(record, image);
      picture.current.style.backgroundImage = `url(${pic})`;
    } else {
      picture.current.style.backgroundImage = `url(${defaultP.src})`;
    }
    picture.current.style.backgroundSize = "cover";
    picture.current.style.backgroundPosition = "center";
  }
    , [])

  const onImg = async (e) => {
    const file = e.target.files[0];
    const File2 = new File([file], `${record.id}.png`, { type: file.type });
    const formData = new FormData();
    formData.append("avatar", File2);

    picture.current.style.backgroundImage = `url(${URL.createObjectURL(
      file
    )
      })`;
    picture.current.style.backgroundSize = "cover";
    picture.current.style.backgroundPosition = "center";
    try {
      await pb.collection("users").update(record.id, formData);
      setToast({
        show: true,
        text: "Profile Picture Updated",
      })

    }
    catch (err) {
      setToast({
        show: true,
        text: "Error Updating Profile Picture",
        color: "bg-red-700"
      })
    }

  }
  useEffect(() => {
    if (toast.show == true) {
      setTimeout(() => {
        setToast({ show: false, text: '', color: null });
      }, 3000);
    }
  }, [toast]);


  return (
    <>
      {toast.show && <Toast text={toast.text} color={toast.color} />}
      <div className="group mx-auto grid w-full max-w-md place-items-center rounded-xl p-10 pb-8 shadow-lg bg-white">
        <div className="relative user-img mb-9 mt-4 h-36 w-36 rounded-full">
          <div id="photo"
            className=" h-36 w-36 rounded-full border-4 border-[#476dae] "
            ref={picture}
            alt={""}
            width={144}
            height={144}
            style={{ objectFit: "cover" }}
          ></div>
          <input accept="/image/*" className="hidden" id="file" type="file" onChange={(e) => onImg(e)}
          ></input>
          <label className="absolute top-[7rem] left-[6rem] border-[1.5px] border-black glass opacity-90 rounded-full w-9 h-9" htmlFor="file" id="uploadBtn"><Image alt="edit" className="ml-1.5 mt-1.5 w-6 h-6 cursor-pointer" src={edit}></Image></label>

        </div>
        <h5 className="mb-1 text-xl font-medium tracking-tighter text-gray-900">
          {record.name}
        </h5>
        <span className="text-sm text-gray-500">
          {"@"}{record.username}
        </span>

      </div>
    </>
  );
}
