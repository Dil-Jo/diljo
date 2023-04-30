"use client";
import { useEffect, useRef, useState } from "react";
import PocketBase from "pocketbase";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberRef = useRef(null);

  async function verify() {
    const pb = new PocketBase("http://127.0.0.1:8090");
    let temp = await pb.collection("users").authWithPassword(email, password);
    console.log(temp);
  }

  function clickHandler() {
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.value);
    setRemember(rememberRef.current.checked);
  }
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
            <div className="mb-6 flex items-start">
              <div className="flex h-5 items-center">
                <input
                  ref={rememberRef}
                  type="checkbox"
                  value=""
                  className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                  required
                ></input>
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
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
