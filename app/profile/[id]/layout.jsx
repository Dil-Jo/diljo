'use client'
import ProfileComponent from "./components/ProfileComponent";
import ButtonGroupComponent from "./components/ButtonGroupComponent";
import { useState, useEffect, useContext } from "react";
import GlobalContext from "../../Contexts/GlobalContext";
import Signin from "../../global-components/Signin";
import { useParams } from "next/navigation";
import Locked from "./components/Locked";



// const verifyUser = async (pb) => {
//   const authData = await pb.collection('users').authRefresh();
//   console.log({ pb })
//   return pb.authStore.basetoken !== '';
// }


export default function Page({ children }) {
  const { id } = useParams();
  const globalProps = useContext(GlobalContext);
  const { pb, globalLogin } = globalProps;


  // if (!loginState) return <div>
  //   <h2 className="text-xl font-bold">
  //     Please login to continue
  //   </h2>
  //   <label htmlFor="sign-in" className="btn">open modal</label>
  //   <Signin pb={pb} />
  // </div>
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
