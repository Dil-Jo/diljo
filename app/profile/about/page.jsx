"use client";
import Button from "../../global-components/Button";
import { useEffect, useId, useState } from "react";
import PocketBase from "pocketbase";


export default function Page() {
  const [loginData, setLoginData] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem("Login");
    if (storedData) {
      setLoginData(JSON.parse(storedData));
    }
  }, []);

  return (
    <>
      <div className="group grid place-items-center rounded-xl p-10 shadow-lg">
        <div className="w-full">
          <h1
            className="text m-8 mb-12 inline w-72 text-start text-3xl font-black tracking-tighter text-gray-800 lg:w-auto">
            About
          </h1>
        </div>
        <div className="h-full w-full grid gap-4">
          <Field name="Name" detail={loginData.record?.name} />
          <Field name="Password" detail={"•••••••••"} />
          <Field name="Email" detail={loginData.record?.email} />
          <Field name="Username" detail={loginData.record?.username} />
        </div>
      </div>
    </>
  );
}

function Field(props) {
  const dialog = useId();

  function clickHandler() {
    let modal = document.getElementById(`${dialog}`);
    modal.showModal();
  }

  return (
    <div className="m-5 border-b-2">
      <div className="m-3 flex flex-col md:flex-row md:items-center">
        <dialog id={dialog}
                className={"bg-white border-2 border-gray-300 rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "}>
          <Modal type={props.name}></Modal>
        </dialog>
        <div className="mb-4 md:mb-0 md:mr-4 md:flex-1">
          <h1 className="text-xl font-black tracking-tighter text-gray-900">
            {props.name}
          </h1>
          <h1 className="text-lg text-gray-500">{props.detail}</h1>
        </div>
        <div className="md:w-40 md:flex-none">
          <Button
            type="septenary"
            text="Change"
            className="w-full md:w-auto"
            onClick={() => {
              clickHandler();
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
}

function Modal(props) {
  return (<>
    <div className={"w-full h-full flex flex-col p-6"}>
      <div className={"w-full flex justify-center"}><h1>fuck</h1></div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900"> {
        } input</label>
        <input type="text" id="default-input"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
      </div>
      <div><label className="block mb-2 text-sm font-medium text-gray-900">
        input</label>
        <input type="text"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-16" />
      </div>
    </div>
  </>);
}
