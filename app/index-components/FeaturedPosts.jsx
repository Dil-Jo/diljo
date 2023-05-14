"use client";
import Card from "../global-components/Card";
import PocketBase from "pocketbase";
import { useEffect, useState, useContext } from "react";
import GlobalContext from "../Contexts/GlobalContext";

export default function FeaturedPosts() {

  const { pb } = useContext(GlobalContext);

  async function tempFun() {
    let temp = await pb.collection("fundraisers").getList(1, 10, {
      filter: ""
    });
    const output = temp.items.map((item) => {
      return {
        title: item.title,
        caption: item.caption,
        target: item.target,
        id: item.id,
        thumbnail: pb.files.getUrl(item, item.thumbnail),
        category: item.category,
        link: item.link
      };
    });
    return output;
  }


  const [cardList, setCardList] = useState([]);
  useEffect(() => {
    tempFun().then((data) => {
      setCardList(data);
    });
  }, []);


  return (
    <>
      <h1 className="md:ml-4 text-4xl font-black tracking-tighter text-gray-900 dark:text-white">
        Featured Fundraisers
      </h1>
      <h2 className="md:ml-4 mt-2 tracking-tighter text-gray-500 dark:text-gray-400 md:text-lg">
        Help those who need you the most
      </h2>
      <div className="carousel-center carousel rounded-box w-full space-x-8 overflow-x-scroll p-4">
        {cardList.map((card) => {
          // return (<h1>{card.id}</h1>);
          return <Card key={card.id} {...card} raised="10" />;
        })}
      </div>
    </>
  );
}
