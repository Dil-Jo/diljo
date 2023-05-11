"use client";
import Logo from "./Logo";
import { useEffect, useState, useRef, useContext } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Signin from "./Signin";
import Signup from "./Signup";
// import { LoginContext } from "../Contexts/LoginContext";
import Image from "next/image";
import GlobalContext from "../Contexts/GlobalContext";

export default function Navbar(props) {
  const globalProps = useContext(GlobalContext);
  console.log(globalProps.login);
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const router = usePathname();
  
  function NavbarOpen() {
    setIsOpen(!isOpen);
  }
  
  function NavDataComponent() {
    const [loginStatus, setLoginStatus] = useState(false);
    // let Login = false;
    useEffect(() => {
      setLoginStatus(JSON.parse(localStorage.getItem("Login")) || false);
    }, []);
    return (
      <>
        <Signup />
        <Signin />
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/">
              <Logo height="50px" />
            </Link>
            <div className="hidden sm:flex sm:items-center">
              <Links />
            </div>
            {loginStatus ? (
              <div className={"hidden sm:flex sm:items-center"}>
                <AfterLogin />
              </div>
            ) : (
              <div className="hidden sm:flex sm:items-center">
                <Buttons />
              </div>
            )}
            <div className="cursor-pointer sm:hidden " onClick={NavbarOpen}>
            
            </div>
          </div>
          
          <div
            className={`${isOpen ? "block" : "hidden"
            } border-t-2 bg-white py-2 sm:hidden`}
          >
            <div className="flex flex-col">
              <Links />
              {loginStatus ? (
                <div className="flex w-full border-t-2 pt-2">
                  <AfterLogin />
                </div>
              ) : (
                <div className="flex items-center justify-between border-t-2 pt-2">
                  <Buttons />
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  useEffect(() => {
    if (router === "/") {
      function scrollFunction() {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          navbarRef.current.style.marginTop = "-4.49rem";
          navbarRef.current.style.transition = "0.3s";
          navbarRef.current.style.borderRadius = "0";
          navbarRef.current.style.width = "100%";
          navbarRef.current.style.marginLeft = "0";
        } else if (
          document.body.scrollTop <= 80 ||
          document.documentElement.scrollTop <= 80
        ) {
          navbarRef.current.style.marginTop = "-2.5rem";
          navbarRef.current.style.transition = "0.3s";
          navbarRef.current.style.borderRadius = "0.75rem";
          navbarRef.current.style.width = "calc(100% - 2.5rem)";
          navbarRef.current.style.marginLeft = "1rem";
        }
      }
      
      window.onscroll = scrollFunction;
      
      return () => {
        window.onscroll = null;
      };
    }
  }, [router]);
  
  return (
    <>
      {router === "/" ? (
        <div
          className="fixed z-50  -m-[2.5rem] mx-4 rounded-xl bg-white shadow-md"
          ref={navbarRef}
          style={{ width: "calc(100% - 2.5rem)" }}
        >
          <NavDataComponent />
        </div>
      ) : router === "/raisefunds" ? (
        <div
          className="md:fixed z-50 bg-white shadow-md"
          ref={navbarRef}
          style={{ width: "100%" }}
        >
          <NavDataComponent />
        </div>
      ) : (
        <div
          className="fixed z-50 bg-white shadow-md"
          ref={navbarRef}
          style={{ width: "100%" }}
        >
          <NavDataComponent />
        </div>
      )}
    </>
  );
}

function Links() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const menuItems = [
    { id: 1, name: "EXPLORE" },
    { id: 2, name: "MAIN" },
    { id: 3, name: "ABOUT" }
  ];
  
  return (
    <>
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="mx-4"
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Link
            href={`/${item.name.toLowerCase()}`}
            className={`text-md font-semibold tracking-tighter text-gray-800 hover:text-blue-600`}
          >
            {item.name}
          </Link>
          <div
            className={`h-1 bg-black transition-all duration-500 ease-in-out ${hoveredIndex === item.id ? "w-full" : "w-0"
            }`}
          ></div>
        </div>
      ))}
    </>
  );
}

function Buttons() {
  return (
    <>
      <label
        className="mr-10 text-sm font-semibold text-gray-800
        hover:text-blue-600"
        htmlFor="sign-in"
      >
        Sign in
      </label>
      <label
        className="rounded-lg border px-4 py-1 text-sm font-semibold text-gray-800 hover:border-blue-600 hover:text-blue-600"
        htmlFor="sign-up"
      >
        Sign up
      </label>
    </>
  );
}

function AfterLogin() {
  const logoutRef = useRef(null);
  
  return (
    <div className={"flex w-full justify-between"}>
      {/* <div className={""}>
          <Image
            className="h-10 mr-5 w-10 rounded-full border-4 border-blue-400"
            alt={""}
            src={""}
          ></Image>{" "}
        </div> */}
      <div>
        <label
          className="rounded-lg border px-4 py-1 text-sm h-full flex text-center font-semibold items-center text-gray-800 hover:border-blue-600 hover:text-blue-600"
          ref={logoutRef}
          onClick={() => {
            logoutRef.current.style.backgroundColor = "#3B82F6";
            logoutRef.current.style.color = "white";
            logoutRef.current.style.transition = "0.3s";
            logoutRef.current.style.border = "none";
            localStorage.removeItem("Login");
            setTimeout(() => {
              window.location.reload();
            }, 1200);
          }}
        >
          Logout
        </label>
      </div>
    </div>
  );
}
