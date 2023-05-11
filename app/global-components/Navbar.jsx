"use client";
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
  console.log(globalProps.login)
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const router = usePathname();

  function NavbarOpen() {
    setIsOpen(!isOpen);
  }

  function NavDataComponent() {
    let Login = false;
    useEffect(() => {
      Login = JSON.parse(localStorage.getItem("Login")) || false;
    }, []);
    return (
      <>
        <Signup />
        <Signin />
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/">
              <svg className=""

                version="1.1"
                id="svg6128"
                width="30"
                height="40"
                viewBox="0 0 368 675.88129"
                xmlns="http://www.w3.org/2000/svg">
                <path style={{
                  display: "inline",
                  fillOpacity: "0",
                  fill: "#000000",
                  stroke: "#000000",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "bevel",
                  strokeOpacity: "1",
                  paintOrder: "stroke fill markers",
                  strokeDasharray: "2700",
                  strokeDashoffset: "2700",
                }}
                  d="M 271.00001,9.1821289e-8 260.84001,60 l -6.932,29.000001 3.536,19.999999 7.112,32 22.444,101 -27,-10.342 -26,0.294 -75,7.048 v 2 l 43,5 v 1 c -34.243,12.461 -68.024,26.417 -104.000004,33.151 C 84.738,282.633 71.354,284.518 58,286.428 51.7886,287.317 43.4545,287.255 38.2382,291.162 31.9387,295.881 29.4787,306.221 26.0505,313 17.5715,329.766 7.7587001,345.874 8.0017102e-8,363 7.8882001,360.26 17.7428,357.493 23.4872,351.084 28.9123,345.031 29.9267,335.154 37.5369,331.11 45.4066,326.927 56.3616,326.521 65,324.527 80.32,320.992 95.219006,316.333 110.00001,311 86.803,351.11 62.6437,391.131 49.6127,436 c -5.8514,20.148 -8.4688,40.127 -9.8629,61 -2.4289,36.37 3.1186,72.582 22.6515,104 16.1707,26.01 41.95871,44.293 69.59871,56.445 20.426,8.98 42.585,16.787 65,18.255 12.463,0.816 24.847,-1.24 37,-3.816 23.341,-4.946 45.637,-13.274 64.997,-27.527 33.875,-24.94 58.644,-60.993 66.707,-102.357 2.268,-11.639 1.912,-24.166 2.296,-36 h -1 c -3.304,18.873 -8.88,39.487 -18.789,56 -25.125,41.875 -75.088,71.13 -123.211,76.441 -22.641,2.499 -43.023,-1.652 -65,-6.441 v -1 c 19.748,-5.447 39.296,-11.667 59,-17.287 8.601,-2.452 20.793,-3.822 27.819,-9.673 6.071,-5.055 8.388,-14.991 11.302,-22.04 7.102,-17.183 12.949,-35.467 21.463,-52 5.276,-10.245 14.485,-17.84 21.322,-27 9.756,-13.07 17.16,-27.754 22.855,-43 16.393,-43.878 19.204,-92.594 17.065,-139 -0.76,-16.474 -6.065,-33.458 -5.475,-49.874 0.267,-7.402 6.37,-10.506 11.609,-14.58 4.549,-3.537 8.552,-7.676 11.631,-12.565 10.679,-16.962 8.843,-40.219 4.812,-58.981 -3.278,-15.255 -13.849,-24.137 -24.232,-35 -13.538,-14.163 -27.475,-28.999 -37.452,-46 -5.606,-9.552002 -7.403,-21.378699 -10.103,-31.999999 C 285.62301,48.4261 281.10601,22.1752 271.00001,9.1821306e-8 M 320.00001,184 c 9.754,11.127 33.483,31.287 17.322,46.836 -2.407,2.316 -5.349,3.735 -8.322,5.164 -3.723,-16.244 -10.053,-35.28 -9,-52 m -38,256 c -3.778,-17.294 -13.35,-31.138 -28.005,-41.129 -5.633,-3.839 -13.247,-8.95 -20.302,-5.977 -7.266,3.061 -12.471,11.032 -17.031,17.107 -4.426,5.895 -9.332,12.021 -11.927,18.999 -3.693,9.931 -2.734,21.591 -2.735,32 0,6.76 -0.935,14.54 1.437,20.999 2.56,6.971 8.852,12.451 13.563,18.001 -51.109,19.036 -120.084004,-13.456 -118.806004,-73 0.965,-44.954 30.323004,-84.867 58.943004,-116.854 9.443,-10.554 20.988,-19.161 31.862,-28.167 5.493,-4.55 13.127,-9.413 15.946,-16.249 2.313,-5.611 1.086,-12.795 1.055,-18.73 21.091,1.998 40.769,8.266 61,14.24 7.378,2.179 18.841,3.467 24.3,9.346 3.268,3.52 3.654,8.887 4.222,13.419 1.167,9.307 2.125,18.649 2.915,27.995 2.174,25.735 2.879,52.268 0.364,78 -1.76,18.006 -5.327,35.467 -16.801,50 M 73,475 c 6.628,13.867 14.582,27.359 24.954006,38.775 6.831004,7.519 14.573004,14.302 23.046004,19.914 40.102,26.567 88.465,22.919 132,8.311 -8.719,15.208 -20.251,30.924 -34.071,41.879 -12.113,9.602 -26.667,16.661 -39.929,24.539 -8.914,5.295 -22.096,17.049 -33,16.134 -13.736,-1.154 -28.34,-16.124 -36.954,-25.729 C 88.169,575.543 78.127,544.479 73.9,514 72.131,501.238 70.8173,487.786 73,475 m 253.00001,27 -28,36 v 1 l 27,26 18.521,-24 6.563,-12.903 -6.258,-10.366 z"
                  id="path" />
              </svg>
            </Link>
            <div className="hidden sm:flex sm:items-center">
              <Links />
            </div>
            {Login ? (
              <div className={"hidden sm:flex sm:items-center"}>
                <AfterLogin />
              </div>
            ) : (
              <div className="hidden sm:flex sm:items-center">
                <Buttons />
              </div>
            )}
            <div className="cursor-pointer sm:hidden " onClick={NavbarOpen}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.9499909,17 C12.7183558,18.1411202 11.709479,19 10.5,19 C9.29052104,19 8.28164422,18.1411202 8.05000906,17 L3.5,17 C3.22385763,17 3,16.7761424 3,16.5 C3,16.2238576 3.22385763,16 3.5,16 L8.05000906,16 C8.28164422,14.8588798 9.29052104,14 10.5,14 C11.709479,14 12.7183558,14.8588798 12.9499909,16 L20.5,16 C20.7761424,16 21,16.2238576 21,16.5 C21,16.7761424 20.7761424,17 20.5,17 L12.9499909,17 Z M18.9499909,12 C18.7183558,13.1411202 17.709479,14 16.5,14 C15.290521,14 14.2816442,13.1411202 14.0500091,12 L3.5,12 C3.22385763,12 3,11.7761424 3,11.5 C3,11.2238576 3.22385763,11 3.5,11 L14.0500091,11 C14.2816442,9.85887984 15.290521,9 16.5,9 C17.709479,9 18.7183558,9.85887984 18.9499909,11 L20.5,11 C20.7761424,11 21,11.2238576 21,11.5 C21,11.7761424 20.7761424,12 20.5,12 L18.9499909,12 Z M9.94999094,7 C9.71835578,8.14112016 8.70947896,9 7.5,9 C6.29052104,9 5.28164422,8.14112016 5.05000906,7 L3.5,7 C3.22385763,7 3,6.77614237 3,6.5 C3,6.22385763 3.22385763,6 3.5,6 L5.05000906,6 C5.28164422,4.85887984 6.29052104,4 7.5,4 C8.70947896,4 9.71835578,4.85887984 9.94999094,6 L20.5,6 C20.7761424,6 21,6.22385763 21,6.5 C21,6.77614237 20.7761424,7 20.5,7 L9.94999094,7 Z M7.5,8 C8.32842712,8 9,7.32842712 9,6.5 C9,5.67157288 8.32842712,5 7.5,5 C6.67157288,5 6,5.67157288 6,6.5 C6,7.32842712 6.67157288,8 7.5,8 Z M16.5,13 C17.3284271,13 18,12.3284271 18,11.5 C18,10.6715729 17.3284271,10 16.5,10 C15.6715729,10 15,10.6715729 15,11.5 C15,12.3284271 15.6715729,13 16.5,13 Z M10.5,18 C11.3284271,18 12,17.3284271 12,16.5 C12,15.6715729 11.3284271,15 10.5,15 C9.67157288,15 9,15.6715729 9,16.5 C9,17.3284271 9.67157288,18 10.5,18 Z"
                />
              </svg>
            </div>
          </div>

          <div
            className={`${isOpen ? "block" : "hidden"
              } border-t-2 bg-white py-2 sm:hidden`}
          >
            <div className="flex flex-col">
              <Links />
              {Login ? (
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
