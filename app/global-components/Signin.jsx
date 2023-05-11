"use client";
import { useEffect, useRef, useState } from "react";
import PocketBase from "pocketbase";
// import { LoginContext } from "../Contexts/LoginContext";

export default function Signin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberRef = useRef(null);
  const successRef = useRef(null);
  const [result, setResult] = useState(false);
  const [error, setError] = useState("");
  
  async function verify() {
    if (emailRef.current.value === "" || passwordRef.current.value === "") {
      setError("Please fill all the fields");
      return false;
    }
    
    const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
    try {
      let result = await pb
        .collection("users")
        .authWithPassword(emailRef.current.value, passwordRef.current.value);
      setResult(result);
      successRef.current.style.display = "block";
      return true;
    } catch (e) {
      setError("Invalid email or password");
      return false;
    }
  }
  
  useEffect(() => {
    if (result) {
      localStorage.setItem("Login", JSON.stringify(result));
      setTimeout(() => {
        window.location.reload();
      }, 1200);
    }
  }, [result]);
  
  function clickHandler() {
    setError("");
    successRef.current.style.display = "none";
    
    verify().then((isValid) => {
      console.log(isValid);
    });
  }
  
  // Rest of your component code...
  
  return (
    <>
      <input type="checkbox" id="sign-in" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="sign-in"
            className="btn-sm btn absolute right-2 top-2 border-0 bg-white text-black hover:text-white"
          >
            x
          </label>
          <h3 className="mb-7 mt-2 text-center text-2xl  font-bold">Sign in</h3>
          <form>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                ref={emailRef}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="name@example.com"
                required
              ></input>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                ref={passwordRef}
                placeholder="••••••••"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                required
              ></input>
            </div>
            <h1 ref={successRef} className={"mb-2 hidden text-green-800"}>
              Success! Reloading...
            </h1>
            <h1 className={"mb-2 text-red-800"}>{error}</h1>
            
            <div className="grid w-full">
              <div
                className="w-full place-items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
                onClick={clickHandler}
              >
                Submit
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
