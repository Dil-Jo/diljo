"use client";
import { useEffect, useRef, useState } from "react";
import PocketBase from "pocketbase";
import Router from "next/router";

export default function Signup() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const nameRef = useRef(null);
  const usernameRef = useRef(null);
  const successRef = useRef(null);
  const [error, setError] = useState("");

  async function create() {
    const pb = new PocketBase("http://127.0.0.1:8090");
    try {
      const resultList = await pb.collection("users").create({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        name: nameRef.current.value,
        username: usernameRef.current.value,
        emailVisibility: true,
        passwordConfirm: passwordRef.current.value,
      });
      successRef.current.style.display = "block";
      return true;
    } catch (e) {
      setError("Invalid email or password");
      return false;
    }
  }
  async function verify() {
    if (
      emailRef.current.value === "" ||
      passwordRef.current.value === "" ||
      nameRef.current.value === "" ||
      usernameRef.current.value === ""
    ) {
      setError("Please fill all the fields");
      return false;
    }

    if (passwordRef.current.value.length < 9) {
      setError("Password must be at least 9 characters long");
      return false;
    }

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError("Passwords do not match");
      return false;
    }

    const pb = new PocketBase("http://127.0.0.1:8090");
    const resultList = await pb.collection("users").getList(1, 50, {
      filter: `email = "${emailRef.current.value}" || username = "${usernameRef.current.value}"`,
    });
    console.log(resultList.items);

    if (resultList.items.length > 0) {
      setError("Email or username already exists");
      return false;
    }

    try {
      await create();
      setError("");
      successRef.current.style.display = "block";
      emailRef.current.value = "";
      passwordRef.current.value = "";
      confirmPasswordRef.current.value = "";
      nameRef.current.value = "";
      usernameRef.current.value = "";
      return true;
    } catch (error) {
      console.log(error);
      // Handle any errors that occur during the create() function
      setError("Something went wrong. Please try again later.");
      return false;
    }
  }
  function clickHandler() {
    setError("");
    successRef.current.style.display = "none";
    verify().then((r) => {
      if (r)
        setTimeout(() => {
          window.location.reload();
        }, 1200);
    });
  }

  return (
    <>
      <input type="checkbox" id="sign-up" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="sign-up"
            className="btn-sm btn absolute right-2 top-2 border-0 bg-white text-black hover:text-white"
          >
            x
          </label>
          <h1 className="mb-3 text-center text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
            Create a Free Account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name
              </label>
              <input
                name="name"
                ref={nameRef}
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="First and Last Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                User Name
              </label>
              <input
                type="username"
                name="username"
                ref={usernameRef}
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="username"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                ref={passwordRef}
                placeholder="••••••••"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirm-password"
                ref={confirmPasswordRef}
                placeholder="••••••••"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the{" "}
                  <a
                    className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <h1 className={"text-red-800"}>{error}</h1>
            <h1 className={"hidden text-green-800"} ref={successRef}>
              Success! You can Sign in now. Reloading...
            </h1>
            <div className="grid w-full">
              <div
                className="w-full place-items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
                onClick={clickHandler}
              >
                Submit
              </div>
            </div>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <label
                htmlFor="sign-in"
                className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
              >
                Login here
              </label>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
