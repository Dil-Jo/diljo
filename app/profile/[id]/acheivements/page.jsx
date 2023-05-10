"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import PocketBase from "pocketbase";

export default function page() {
  let data = JSON.parse(localStorage.getItem("Login")).record;
  let pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
  const [ItemsAll, setItemsAll] = useState([]);
  const getAchievements = async () => {
    const filter = `user_id = "${data.id}"`;

    const records = await pb.collection("acheivement_users").getFullList(200, { filter });
    const Items = records.map(record => record.acheivement_id);

    const records2 = await pb.collection("acheivements").getFullList(200, {});
    setItemsAll(records2.map(record => {
      record.acheived = Items.includes(record.id);
      return record;
    }));

  };

  useEffect(() => {
    getAchievements();
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
          {ItemsAll.map((item) => (<AchievementsCard {...item} key={item.id} />))}
        </div>
      </div>
    </>);

}

function AchievementsCard(props) {
  let pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
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
          className={`border-2 border-gray-300 rounded-xl h-72 w-72 hover:scale-105 transition-all ease-in ${props.acheived ? "opacity-100" : "opacity-75 filter grayscale"}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
        >
          <div
            className={`w-full h-full rounded-xl transition-all ease-linear z-50  hover:bg-black hover:bg-opacity-30`}>
            {(isHovered && props.acheived) ? (
              <div className="flex flex-row justify-center items-center h-full w-full">
                <p className="text-white">{props.description}</p>
              </div>
            ) : (
              <div className="hover:bg-black w-full h-full rounded-xl hover:bg-opacity-20 transition-all ease-in-out">
                <div className={"flex flex-col justify-center items-center h-full w-full"}>
                  <div className={"h-52 w-52 flex justify-center items-center"}>
                    <Image
                      width={144}
                      height={144}
                      src={pb.files.getUrl(props, props.image)}
                      style={{ objectFit: "cover" }}
                      className="transition-all ease-in-out z-0"
                      loading="lazy"
                    />
                  </div>
                  <h1 className={"text-center text-3xl font-bold text-gray-50"}>{props.name}</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );

}