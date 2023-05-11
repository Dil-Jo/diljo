"use client";
import Card from "../global-components/Card";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";

export default function FeaturedPosts() {

  async function tempFun() {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

    // pb.beforeSend = function (url, options) {
    //   // For list of the possible request options properties check
    //   // https://developer.mozilla.org/en-US/docs/Web/API/fetch#options
    //   options.headers = Object.assign({}, options.headers, {
    //     'Access-Control-Allow-Origin': '*',
    //   });

    //   return { url, options };
    // };
    console.log("Pb Sb", pb);
    let temp = await pb.collection("fundraisers").getList(1, 4, {
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
      <h1 className="text-4xl font-black tracking-tighter text-gray-900 dark:text-white">
        Featured Fundraisers
      </h1>
      <h2 className="mt-2 tracking-tighter text-gray-500 dark:text-gray-400 md:text-lg">
        Help those who need you the most
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
        {cardList.map((card) => {
          // return (<h1>{card.id}</h1>);
          return <Card key={card.id} {...card} raised="10" />;
        })}
      </div>
    </>
  );
}
