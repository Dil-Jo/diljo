'use client'
import ProfileComponent from "./components/ProfileComponent";
import ButtonGroupComponent from "./components/ButtonGroupComponent";
import { useState, useEffect, useContext } from "react";
import GlobalContext from "../../Contexts/GlobalContext";
import Signin from "../../global-components/Signin";
import { useParams } from "next/navigation";
import Locked from "./components/Locked";



const verifyUser = async (pb) => {
  const authData = await pb.collection('users').authRefresh();
  console.log({ pb })
  return pb.authStore.isValid;
}


export default function Page({ children }) {
  const { id } = useParams();
  const globalProps = useContext(GlobalContext);
  const { pb } = globalProps;
  const [loginState, setLoginState] = useState(false)
  useEffect(() => {
    verifyUser(pb).then((res) => {
      if (!res || pb.authStore.model.id !== id) {
        pb.authStore.clear();
        alert("Please login to continue");
        // window.location.reload();
        setLoginState(false)
        // return <Signin pb={pb} />
      } else setLoginState(true)
    }
    );

  }, [])

  // if (!loginState) return <div>
  //   <h2 className="text-xl font-bold">
  //     Please login to continue
  //   </h2>
  //   <label htmlFor="sign-in" className="btn">open modal</label>
  //   <Signin pb={pb} />
  // </div>
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12">
      <div className="col-span-1 bg-white xl:col-span-3">
        <div className="m-6 flex flex-col">
          <ProfileComponent pb={pb} />
          <ButtonGroupComponent />
        </div>
      </div>
      <div className="col-span-1 bg-white xl:col-span-9">
        <div className="m-6">
          <div className="inline">
            {loginState ? (
              <div>{children}</div>
            ) : (<Locked />)}

          </div>
        </div>
      </div>
    </div>
  );
}
