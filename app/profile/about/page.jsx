"use client";
import Button from "../../global-components/Button";
import { useEffect, useState } from "react";
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
  return (
    <div className="m-5 border-b-2">
      <div className="m-3 flex flex-col md:flex-row md:items-center">
        {/*<AssumedModal type={props.name}></AssumedModal>*/}
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
              // Do something about he modal
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
}

