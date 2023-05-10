"use client";
import WideCard from "../components/WideCard";
import { useEffect, useState } from "react";

export default function page() {
  const [Items, setItems] = useState([0]);
  useEffect(() => {
    setItems([1, 23, 4, 5, 6, 7, 8, 9, 0, 7, 8]);
  }, []);
  return (
    <>
      <div className="group grid place-items-center rounded-xl p-10 shadow-lg">
        <div className={"w-full"}>
          <h1
            className={
              "text m-8 mb-12 inline w-72 text-start text-3xl font-black tracking-tighter text-gray-800 lg:w-auto"
            }
          >
            Achievements
          </h1>
        </div>
        <div className={"grid grid-cols-4 gap-4 w-full h-full"}>
          {Items.map(() => (<AchievementsCard />))}
        </div>
      </div>
    </>);

}

function AchievementsCard() {
  return <>
    <div className={"w-full h-full"}>
      <div className={"border-2 border-gray-300 rounded-xl h-52"}>
        <Image src={""}></Image>
      </div>
    </div>

  </>;
}