"use client";
import { useRef, useEffect, useState } from "react";
import White from "../../assets/White.svg";
import "./Main.css";

export default function Main() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 1024);
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const videoContainerRef = useRef(null);

  function clickCoolButton() {
    const scrollHeight = window.innerHeight - 50;
    const element = document.querySelector("#coolscrolldownbutton");

    if (
      document.body.scrollTop === scrollHeight ||
      document.documentElement.scrollTop === scrollHeight
    ) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="-mt-[4.49rem] grid h-screen w-full place-items-end bg-six">
      <div className={"flex w-full justify-center absolute "}>
        <div
          className="w-2/5 h-full text-4xl text-white text-center min-[200px]:hidden xs:hidden sm:hidden md:hidden lg:block xl:block 2xl:block lg:mt-60 xl:mt-80 xl:pt-8 min-[1366px]:mt-80 min-[1366px]:pt-16 2xl:mt-80 2xl:pt-8 min-[1566px]:mt-72 min-[1850px]:mt-44"
          style={{
            transform: isLoaded ? "translateX(-5%)" : "translateX(-115%)",
            transition: "transform 1.25s ease-in-out 3s"
          }}
        >
          <blockquote className={"text-6xl text-ten"} style={{
            fontFamily: "'Georgia, serif'",
            fontStyle: "normal",
            fontWeight: "100",
            letterSpacing: "normal",
            lineHeight: "70px",
            textTransform: "none",
            // color: "#F3F3F3"
          }}>No one is useless in this world, who lightens the burdens of another.
          </blockquote>
          <p className="text-2xl text-center py-16 mt-20 text-ten">- Charles Dickens</p>
        </div>
        <svg className={`w-1/2 min-[200px]:ml-[40vw] lg:ml-0 sm:mb-20 md:mt-26 lg:mt-36 xl:mt-64 2xl:mt-52 min-[1566px]:mt-32 min-[1850px]:mt-0`}
          style={{
            transform: isLoaded && !isSmallScreen ? "translateX(0%)" : "translateX(-45%)",
            transition: "transform 1.25s ease-in-out 3s",
            '@media (max-width: 1023px)': { transform: 'none', transition: 'none' },
          }}
          version="1.1"
          id="svg6128"
          width="368"
          height="675.88129"
          viewBox="0 0 368 675.88129"
          xmlns="http://www.w3.org/2000/svg">
          <path
            style={{ fill: "#f0f1fa", stroke: "#f0f1fa" }}
            d="M 271.00001,9.1821289e-8 260.84001,60 l -6.932,29.000001 3.536,19.999999 7.112,32 22.444,101 -27,-10.342 -26,0.294 -75,7.048 v 2 l 43,5 v 1 c -34.243,12.461 -68.024,26.417 -104.000004,33.151 C 84.738,282.633 71.354,284.518 58,286.428 51.7886,287.317 43.4545,287.255 38.2382,291.162 31.9387,295.881 29.4787,306.221 26.0505,313 17.5715,329.766 7.7587001,345.874 8.0017102e-8,363 7.8882001,360.26 17.7428,357.493 23.4872,351.084 28.9123,345.031 29.9267,335.154 37.5369,331.11 45.4066,326.927 56.3616,326.521 65,324.527 80.32,320.992 95.219006,316.333 110.00001,311 86.803,351.11 62.6437,391.131 49.6127,436 c -5.8514,20.148 -8.4688,40.127 -9.8629,61 -2.4289,36.37 3.1186,72.582 22.6515,104 16.1707,26.01 41.95871,44.293 69.59871,56.445 20.426,8.98 42.585,16.787 65,18.255 12.463,0.816 24.847,-1.24 37,-3.816 23.341,-4.946 45.637,-13.274 64.997,-27.527 33.875,-24.94 58.644,-60.993 66.707,-102.357 2.268,-11.639 1.912,-24.166 2.296,-36 h -1 c -3.304,18.873 -8.88,39.487 -18.789,56 -25.125,41.875 -75.088,71.13 -123.211,76.441 -22.641,2.499 -43.023,-1.652 -65,-6.441 v -1 c 19.748,-5.447 39.296,-11.667 59,-17.287 8.601,-2.452 20.793,-3.822 27.819,-9.673 6.071,-5.055 8.388,-14.991 11.302,-22.04 7.102,-17.183 12.949,-35.467 21.463,-52 5.276,-10.245 14.485,-17.84 21.322,-27 9.756,-13.07 17.16,-27.754 22.855,-43 16.393,-43.878 19.204,-92.594 17.065,-139 -0.76,-16.474 -6.065,-33.458 -5.475,-49.874 0.267,-7.402 6.37,-10.506 11.609,-14.58 4.549,-3.537 8.552,-7.676 11.631,-12.565 10.679,-16.962 8.843,-40.219 4.812,-58.981 -3.278,-15.255 -13.849,-24.137 -24.232,-35 -13.538,-14.163 -27.475,-28.999 -37.452,-46 -5.606,-9.552002 -7.403,-21.378699 -10.103,-31.999999 C 285.62301,48.4261 281.10601,22.1752 271.00001,9.1821306e-8 M 320.00001,184 c 9.754,11.127 33.483,31.287 17.322,46.836 -2.407,2.316 -5.349,3.735 -8.322,5.164 -3.723,-16.244 -10.053,-35.28 -9,-52 m -38,256 c -3.778,-17.294 -13.35,-31.138 -28.005,-41.129 -5.633,-3.839 -13.247,-8.95 -20.302,-5.977 -7.266,3.061 -12.471,11.032 -17.031,17.107 -4.426,5.895 -9.332,12.021 -11.927,18.999 -3.693,9.931 -2.734,21.591 -2.735,32 0,6.76 -0.935,14.54 1.437,20.999 2.56,6.971 8.852,12.451 13.563,18.001 -51.109,19.036 -120.084004,-13.456 -118.806004,-73 0.965,-44.954 30.323004,-84.867 58.943004,-116.854 9.443,-10.554 20.988,-19.161 31.862,-28.167 5.493,-4.55 13.127,-9.413 15.946,-16.249 2.313,-5.611 1.086,-12.795 1.055,-18.73 21.091,1.998 40.769,8.266 61,14.24 7.378,2.179 18.841,3.467 24.3,9.346 3.268,3.52 3.654,8.887 4.222,13.419 1.167,9.307 2.125,18.649 2.915,27.995 2.174,25.735 2.879,52.268 0.364,78 -1.76,18.006 -5.327,35.467 -16.801,50 M 73,475 c 6.628,13.867 14.582,27.359 24.954006,38.775 6.831004,7.519 14.573004,14.302 23.046004,19.914 40.102,26.567 88.465,22.919 132,8.311 -8.719,15.208 -20.251,30.924 -34.071,41.879 -12.113,9.602 -26.667,16.661 -39.929,24.539 -8.914,5.295 -22.096,17.049 -33,16.134 -13.736,-1.154 -28.34,-16.124 -36.954,-25.729 C 88.169,575.543 78.127,544.479 73.9,514 72.131,501.238 70.8173,487.786 73,475 m 253.00001,27 -28,36 v 1 l 27,26 18.521,-24 6.563,-12.903 -6.258,-10.366 z"
            id="path" />
        </svg>
      </div>
      <div className="flex w-full mt-5 justify-center">
        <div
          className="mb-6 h-16 w-16 transform rounded-full border-b-4 border-one   border-dashed  outline-white duration-500 hover:-translate-y-3"
          id="coolscrolldownbutton"
          onClick={clickCoolButton}
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="mx-auto mt-4 h-10 w-10"
            viewBox="0 0 30.727 30.727"
            xmlSpace="preserve"
          >
              <path
                style={{ fill: "#f0f1fa" }}
                d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0
        l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"
              />
          </svg>
        </div>
      </div>
    </div>
  );
}
