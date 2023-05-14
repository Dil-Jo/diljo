'use client'
import ProfileComponent from "./components/ProfileComponent";
import ButtonGroupComponent from "./components/ButtonGroupComponent";
import { useState, useEffect, useContext } from "react";
import GlobalContext from "../../Contexts/GlobalContext";
import Signin from "../../global-components/Signin";
import { useParams } from "next/navigation";
import Locked from "./components/Locked";

export default function Page({ children }) {
  const { id } = useParams();
  const globalProps = useContext(GlobalContext);
  const { pb, globalLogin } = globalProps;
  fetch("/api/acheivements", {
    method: "POST",
    body: JSON.stringify({
      id: pb.authStore.model.id
    })
  })


  return (
    <div className="grid grid-cols-1 xl:grid-cols-12">
      <div className="col-span-1 bg-ten xl:col-span-3">
        <div className="m-6 flex flex-col">
          <ProfileComponent pb={pb} />
          <ButtonGroupComponent pb={pb} />
        </div>
      </div>
      <div className="col-span-1 bg-ten xl:col-span-9">
        <div className="m-6">
          <div className="inline">
            {globalLogin && pb.authStore.model.id === id ? (
              <div>{children}</div>
            ) : (<Locked />)}

          </div>
        </div>
      </div>
    </div>
  );
}
