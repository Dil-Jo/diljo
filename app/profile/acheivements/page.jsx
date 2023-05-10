"use client";
import WideCard from "../components/WideCard";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function page() {
  const [Items, setItems] = useState([0]);
  useEffect(() => {
    setItems([1, 23, 4, 5, 6, 7, 8, 9, 0, 7, 8]);
  }, []);
  return (
    <>
      <div className="group grid place-items-center rounded-xl p-10 shadow-lg">
        <div className={"w-full "}>
          <h1
            className={
              "text m-8 mb-12 inline  text-start text-3xl font-black tracking-tighter text-gray-800 lg:w-auto"
            }
          >
            Achievements
          </h1>
        </div>
        <div className={"grid grid-cols-4 w-full h-full"}>
          {Items.map(() => (<AchievementsCard />))}
        </div>
      </div>
    </>);

}

function AchievementsCard(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="w-full h-full mb-12">
        <div
          style={{
            background:
              "linear-gradient(109.6deg, #4C7D94 11.2%, #6A4E67 53.7%, #FCF9EE 100.2%)"
          }}
          className="border-2 border-gray-300 rounded-xl h-72 w-72 hover:scale-105 transition-all ease-in"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
        >
          <div className={"w-full h-full rounded-xl hover:bg-black hover:bg-opacity-30 transition-all ease-linear"}>
            {isHovered ? (
              <div className="flex flex-row justify-center items-center h-full w-full">
                <p className="text-white text-xl">{props.description}</p>
              </div>
            ) : (
              <div className="hover:bg-black w-full h-full rounded-xl hover:bg-opacity-20 transition-all ease-in-out">
                <div className="flex flex-row justify-center items-center h-full w-full">
                  <Image
                    width={144}
                    height={144}
                    src={props.image}
                    style={{ objectFit: "cover" }}
                    className="transition-all ease-in-out"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );

}